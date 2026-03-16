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
          }

        ]
      }
    ],
    errorElement: <NotFound />
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
  const recipes = useSelector((state) => state.recipes.recipes);
  let favorites =  useSelector((state)=>state.favorites.savedRecipes)


  //to observe the signIn changes and store the details
  useEffect(() => {

    const getAuthUser = async () => {
      try {
        let response = await axiosInstance.get('/profile');
        if (response.status === 200) {
          dispatch(setAuthUser(response.data.user));
          dispatch(setIsLoggedIn(true));
        }

      } catch (error) {
        console.log(error.message);
        dispatch(setAuthUser(null));
        dispatch(setIsLoggedIn(false))

      }

    }
    getAuthUser();
  }, [])

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
    <div id='rootContainer'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
