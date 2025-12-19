import { useState } from 'react'
import './App.css'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Root from './routes/Root';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import RecipeList from './pages/RecipeList';
import RecipeDetails from './pages/RecipeDetails';
import Favorites from './pages/Favorites';
import NotFound from './pages/NotFound';

function App() {

  // Router setup using createBrowserRouter

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Root/>,
      children:[
        {
          path:'/',
          element:<Home/>
        },
        {
          path:'/login',
          element:<Login/>
        },
        {
          path:'/signup',
          element:<SignUp/>
        },
        {
          path:'/recipes',
          element:<RecipeList/>
        },
        {
          path:'/recipes/:id',
          element:<RecipeDetails/>
        },
        {
          path:'/favorites',
          element:<Favorites/>
        }
      ],
      errorElement:<NotFound/>
    },

  ]);
 

  return (
    <>
    <RouterProvider router={router}/>    
    </>
  )
}

export default App
