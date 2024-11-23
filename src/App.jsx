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
import Home from './component/pages/Home';
import About from './component/pages/About';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route path='/' element={<Home />}/>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/about' element={<About />}></Route>
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
