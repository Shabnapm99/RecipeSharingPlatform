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
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { app } from './utils/firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthUser, setIsLoggedIn } from './features/userSlice'
import { fetchUserfavorites } from './utils/favorite';
import { setSavedRecipes } from './features/favoritesSlice';

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);

// Router setup using createBrowserRouter

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
        // loader: recipeLoader
      },
      {
        path: '/recipes',
        element: <RecipeList />,
        // loader: recipeLoader
      },
      {
        path: '/recipes/:id',
        element: <RecipeDetails />
      },
      {
        path: '/favorites',
        element: <Favorites />
      },
      {
        path: '/add',
        element: <AddRecipe />
      }
    ],
    errorElement: <NotFound />
  },
  {
    path: '/login',
    element: <Login />,
    errorElement: <NotFound />
  },
  {
    path: '/signup',
    element: <SignUp />,
    errorElement: <NotFound />
  },
]);

function App() {

  let dispatch = useDispatch();
  let user = useSelector((state) => state.users.authUser);
  let loggedIn = useSelector((state) => state.users.isLoggedIn);
  const recipes = useSelector((state) => state.recipes.recipes);

  //to observe the signIn changes and store the details
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setAuthUser({
          name: user.displayName,
          id: user.uid,
          email: user.email
        }));//since user conatin many other methods classes etc. so store only the datas we needed
        dispatch(setIsLoggedIn(true));
      }
      else {
        dispatch(setAuthUser(null));
        dispatch(setIsLoggedIn(false))
      }
    });
  }, [])

  //When a user logged in fetch the users favorite recipe list

  useEffect(() => {
    if (user?.id && recipes.length > 0) {
      const setFav = async () => {
        if (user?.id) {
          let userSavedId = await fetchUserfavorites(user?.id);

          let userSavedRecipes = userSavedId?.map((id) => {
            const match = recipes?.find((recipe) => recipe?.uniqueId === id);
            return match;
          }).filter((item) => item) // If item exists, keep it.filtering undefined items;
          dispatch(setSavedRecipes(userSavedRecipes))
        }
      }
      setFav();
    }
  }, [user?.id, recipes])

  return (
    <div id='rootContainer'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
