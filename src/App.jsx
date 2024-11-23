import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import Root from './component/layers/Root.jsx'
import Error from './component/pages/Error';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      {/* <Route path='/' element={<Home />}/>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/shop' element={<Products />}></Route>
      <Route path='/products' element={<Products />}></Route>
      <Route path='/services' element={<Services />}></Route>
      <Route path='/faq' element={<Faq />}></Route>
      <Route path='/about' element={<About />}></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/cart/:id' element={<Cart />}></Route>
      <Route path='/lern' element={<Learn />}></Route>
      <Route path='/products/details/:id' element={<Product />}></Route> */}
      <Route path='*' element={<Error />}/>
    </Route>
  )
);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
