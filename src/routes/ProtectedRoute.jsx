import React from 'react'
import { useSelector } from 'react-redux'
import {Navigate,Outlet} from 'react-router-dom'

function ProtectedRoute() {

    let isLoggedIn = useSelector((state)=>state.users.isLoggedIn);//authenticated state from redux

  return (
    isLoggedIn?<Outlet/>:<Navigate to={'/login'} replace/>//If logged in show the child component eg(favorite page or addrecipepage) if not navigate to login page
  )
}

export default ProtectedRoute