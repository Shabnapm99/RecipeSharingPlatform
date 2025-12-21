import { useState } from 'react'
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
import { recipeLoader } from './pages/RecipeListingPage/RecipeList';

function App() {


  // Router setup using createBrowserRouter

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          path: '/',
          element: <Home />,
          loader: recipeLoader
        },
        {
          path: '/recipes',
          element: <RecipeList />,
          loader: recipeLoader
        },
        {
          path: '/recipes/:id',
          element: <RecipeDetails />
        },
        {
          path: '/favorites',
          element: <Favorites />
        }
      ],
      errorElement: <NotFound />
    },
    {
      path: '/login',
      element: <Login />,
      errorElement:<NotFound/>
    },
    {
      path: '/signup',
      element: <SignUp />,
      errorElement:<NotFound/>
    },


  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
