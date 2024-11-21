import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import './App.css'
import About from './component/pages/About'
import Root from './component/layers/Root.jsx'
import Home from './component/pages/Home';
import Error from './component/pages/Error';


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='/' element={<Home />}/>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
      {/* <Route path='/products/details/:id' element={<Product />}></Route> */}
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
