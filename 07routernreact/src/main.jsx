import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

  // const router = createBrowserRouter([
  //   {
  //     path: "/",
  //     element: <Layout/>,
  //     children: [
  //       {
  //         path:"",
  //         element:<Home/>
  //       },
  //       {
  //         path: "About",
  //         element: <About/>
  //       },
  //       {
  //         path: "contact",
  //         element: <Contact/>
  //       },
  //     ]
  //   },
  // ])
  //Alternate Way

    const router = createBrowserRouter(
      createRoutesFromElements(
        <Route path = '/' element = {<Layout/>}>
            <Route path = '' element = {<Home/>}/>
            <Route path = 'about' element = {<About/>}/>
            <Route path = 'contact' element = {<Contact/>}/>
        </Route>
      )
    )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
