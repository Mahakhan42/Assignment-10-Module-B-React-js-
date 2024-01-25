import React from 'react'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import { CardProduct } from '../Pages/CardProduct'
import { Product_Details } from '../Pages/ProductDetails'

const router = createBrowserRouter(createRoutesFromElements(
<Route>
    <Route path='' element={<CardProduct/>}/>

    {/* Dynamic Routes */}
    <Route path='/cardproduct/:id' element={<Product_Details/>}/>
</Route>

))

export const RouterApp = () => {
  return (
    <RouterProvider router={router}/>
  )
}

