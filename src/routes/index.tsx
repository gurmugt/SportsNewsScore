import { createBrowserRouter, Navigate } from "react-router-dom";
import Signin from "../pages/signin"
import Signup from "../pages/signup"
import AppLayout from "../common/index"
import Logout from "../pages/logout";
import Notfound from "../pages/Notfound";
import React from "react";
import ProtectedRoute from "./ProtectedRoute"
import Home from '../pages/home/Home'

const router = createBrowserRouter([
  { path: "/", element: <Home/> },
  {
    path: "/signin", 
    element: <Signin />
  },
  {
    path: "/signup", 
    element: <Signup />
  },
  { 
    path: "/logout", 
    element: <Logout /> 
  },
  { 
    path: "/notfound", 
    element: <Notfound /> 
  },
  {
    path: "*",
    element: <Navigate to="/notfound" />,
  },
  // Protected Routes
  {
    path: "dashboard",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
  },
]);
export default router;