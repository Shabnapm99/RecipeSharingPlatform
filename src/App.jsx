import { useEffect, useState } from 'react'
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
// import { recipeLoader } from './pages/RecipeListingPage/RecipeList';
import AddRecipe from './pages/AddRecipePage/AddRecipe';
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { app } from './utils/firebaseConfig';
import { useDispatch, useSelector } from 'react-redux';
import { setAuthUser, setIsLoggedIn } from './features/userSlice'
import { fetchUserfavorites } from './utils/favorite';
import { setSavedRecipes } from './features/favoritesSlice';


const auth = getAuth(app);

function App() {

  let dispatch = useDispatch();
  let user = useSelector((state) => state.users.authUser);
  let loggedIn = useSelector((state) => state.users.isLoggedIn);
  const recipes = useSelector((state) => state.recipes.recipes);
  // let saved = useSelector((state)=>state.Favorites.savedRecipes);
  console.log(user, loggedIn);


  //to observe the signIn changes and store the details
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(setAuthUser({
          name: user.displayName,
          id: user.uid,
          email: user.email
        }));//since user conatin many other methods classes etc. so store only the datas we needed
        dispatch(setIsLoggedIn(true))
        // console.log(useSelector((state)=>state.user.authUser))
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
  return match; // Ensure this is just the object {uniqueId: '...', name: '...'}
}).filter(Boolean);

console.log("CHECK THIS ARRAY:", userSavedRecipes);


          // let userSavedRecipes = userSavedId.map((id) => {

          //   return recipes.find((recipe) => recipe?.uniqueId === id)
          // })
          // console.log(userSavedRecipes);
          // console.log(userSavedId);

           dispatch(setSavedRecipes(userSavedRecipes))
        }




        
      }


      

      
    
    setFav();}



  }, [user?.id, recipes])


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


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
