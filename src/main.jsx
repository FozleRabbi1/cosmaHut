import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Home from './ComponentFile/HomeFile/Home'
import Register from './ComponentFile/RegisterFile/Register'
import Login from './ComponentFile/LoginFile/Login'
import AuthProviders from './Providers/AuthProviders'

const router = createBrowserRouter([
  {
    path: "/", element: <App></App>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "login", element: <Login></Login> },
      { path: "register", element: <Register></Register> }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} ></RouterProvider>
    </AuthProviders>
  </React.StrictMode>,
)
