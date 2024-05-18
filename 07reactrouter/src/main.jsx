import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { element } from 'prop-types'
import Home from '../components/home/Home.jsx'
import About from '../components/about/About.jsx'

  const router = createBrowserRouter([
    {
        path : "/",
        // element: <Layout/>,
        children : [
          {
          path : "",
          element : <Home/>,
        },
        {
          path : "About",
          element : <About/>
        },
      ]
    }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
