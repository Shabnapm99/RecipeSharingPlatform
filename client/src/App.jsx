import { useEffect } from 'react'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './routes/Root';
import Home from './pages/HomePage/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import RecipeList from './pages/RecipeListingPage/RecipeList';
import RecipeDetails from './pages/RecipeDetailsPage/RecipeDetails';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';
import AddRecipe from './pages/AddRecipePage/AddRecipe';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthUser, setIsLoggedIn } from './features/userSlice'
import { setSavedRecipes } from './features/favoritesSlice';
import ProtectedRoute from './routes/ProtectedRoute';
import GuestRout from './routes/GuestRout';
import { axiosInstance } from './axios/axiosInstance';
import UserAddedRecipes from './pages/UserAddedRecipes';
import AdminDashboard from './pages/AdminDashboard';
import AdminProtectedRoute from './routes/AdminProtectedRoute';


// Router setup using createBrowserRouter

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/recipes',
        element: <RecipeList />,
      },
      {
        path: '/recipes/:id',
        element: <RecipeDetails />
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: '/favorites',
            element: <Favorites />
          },
          {
            path: '/add',
            element: <AddRecipe />
          },
          {
            path: '/added-recipes',
            element: <UserAddedRecipes />
          },

        ]
      },

    ],
    errorElement: <NotFound />
  },
  {
    path: '/admin',
    element:<AdminProtectedRoute/>,
    errorElement: <NotFound />,
    children: [
      {
        path: 'dashboard',
        element: <AdminDashboard />,

      },
    ]
  },
  {
    element: <GuestRout />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/login',
        element: <Login />,

      },
      {
        path: '/signup',
        element: <SignUp />,

      },]
  }

]);

function App() {

  let dispatch = useDispatch();
  let user = useSelector((state) => state.users.authUser);
  let loggedIn = useSelector((state) => state.users.isLoggedIn);


  //to observe the signIn changes and store the details
  useEffect(() => {

    const getAuthUser = async () => {
      try {

        let response = await axiosInstance.get('/profile');
        if (response.status === 200) {
          dispatch(setAuthUser(response.data.user));
          dispatch(setIsLoggedIn(true));
        }

        // let favResponse = await axiosInstance.get('/favorites/getfavorites');
        // if (favResponse.status === 200) {
        //   dispatch(setSavedRecipes(favResponse.data.favoriteRecipes.recipes));
        //   console.log(favResponse.data);
        // }


      } catch (error) {
        console.log(error.message);
        dispatch(setAuthUser(null));
        dispatch(setIsLoggedIn(false))
        dispatch(setSavedRecipes([]));

      }

    }
    getAuthUser();
  }, [dispatch])

  //When a user logged in fetch the users favorite recipe list

  useEffect(() => {

    if (loggedIn) {
      let getSavedRecipes = async () => {
        try {
          let response = await axiosInstance.get('/favorites/getfavorites');
          if (response.status === 200) {
            dispatch(setSavedRecipes(response.data.favoriteRecipes.recipes));
          }

        } catch (error) {
          console.log(error.message)
        }
      }
      getSavedRecipes()

    }

  }, [loggedIn])

  return (
    <div id='rootContainer' className='min-h-screen w-full bg-[#1c2720]'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
