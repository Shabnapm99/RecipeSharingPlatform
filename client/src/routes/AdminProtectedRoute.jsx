import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

function AdminProtectedRoute() {
    let isAdmin = useSelector((state) => state.users.authAdmin)
    return (
        isAdmin ? <Outlet /> : <Navigate to={'/'} replace />
    )
}

export default AdminProtectedRoute