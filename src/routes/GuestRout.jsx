import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom'

function GuestRout() {
    let isLoggedIn = useSelector((state)=>state.users.isLoggedIn);//authenticated state from redux
  return (
    isLoggedIn?<Navigate to={'/'} replace/>:<Outlet/>//if loggedIn user is trying to go to /login or signup redirect to home
  )
}

export default GuestRout