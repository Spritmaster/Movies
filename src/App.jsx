import React from 'react'
import {  RouterProvider, createBrowserRouter } from 'react-router-dom'
import { 
  Home,
  Homelayout,
  SingleMovie } from './pages'


const App = () => {
  const routes=createBrowserRouter(
    [
    {
      path:'/',
      element:<Homelayout/>,
      children:[
        {
          index:true,
          element:<Home/>,
        },
        {
          path:'singleMovie/:id',
          element:<SingleMovie/>
        }
      ]
    }
    ]
  )

  return (
    <>
    <RouterProvider router={routes} />
    </>
  )
}

export default App