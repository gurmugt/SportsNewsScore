import { Navigate, createBrowserRouter } from "react-router-dom";
import AppLayout from "../common/index"
import ProtectedRoute from "./ProtectedRoute"
import Signin from "../pages/signin"
import Signup from "../pages/signup"
import Logout from "../pages/logout";
import Notfound from "../pages/Notfound";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Signin />
  },
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
  // Protected Routes
  {
    path: "dashboard",
    element: (
      <ProtectedRoute>
        <AppLayout />
      </ProtectedRoute>
    ),
  },

  {
    path: "*",
    element: <Navigate to="/notfound" />,
  },

]);

export default router;