import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './layout/Layout'
import Cart from './pages/Cart'
import Favorite from './pages/Favorite'
import All from './pages/All'
import Pants from './pages/Pants'
import Trouser from './pages/Trouser'
import Tshirt from './pages/Tshirt'
import Waffle from './pages/Waffle'
import Watches from './pages/Watches'
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
  {
    path:"paints",
    element:<Pants />
  },
  {
    path:"trouser",
    element:<Trouser />
  },
  {
    path:"tshirt",
    element:<Tshirt />
  },
  {
    path:"waffle",
    element:<Waffle />
  },
  {
    path:"watches",
    element:<Watches />
  },

])

  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App
