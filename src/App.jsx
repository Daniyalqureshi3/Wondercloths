import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './layout/Layout'
import Cart from './pages/Cart'
import Favorite from './pages/Favorite'
import All from './pages/All'

function App() {
const router = createBrowserRouter([
  {
    path:"/",
    element:<Layout />,
    children: [
      {
        path: "All",
        element: <All />
      },
      // {
      //   path:"pants",
      //   element:< />
      // }
    ]
  },
  {
    path:"cart",
    element:<Cart/>
  },
  {
    path:"favorite",
    element:<Favorite/>
  },
])

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
