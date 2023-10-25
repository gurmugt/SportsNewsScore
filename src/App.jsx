/* eslint-disable react/react-in-jsx-scope */
import {
  createBrowserRouter,
  RouterProvider,
  Navigate
} from 'react-router-dom'
import Notfound from './pages/Notfound'
import Signup from './pages/signup'
import Signin from './pages/signin'
import NavBar from './common/NavBar'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Signup />
  },
  {
    path: '/signup',
    element: <Signup />
  },
  {
    path: '/signin',
    element: <Signin />
  },
  {
    path: '/dashboard',
    element: <NavBar />
  },
  {
    path: '/notfound',
    element: <Notfound />
  },
  {
    path: '*',
    element: <Navigate to="/notfound" />
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App
