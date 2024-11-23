import React, { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import Load from './Load'


const Root = () => {
    return (
        <>
            <Navbar />
            <Suspense fallback={<Load/>}>
                <Outlet />
            </Suspense>
            <Footer />
        </>
    )
}
export default Root
