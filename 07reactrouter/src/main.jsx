import React from "react";
import Home from "../components/home/Home";




const router = createBrowserRouter([
    {
        path : "/",
        // element : <layout/>,
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
