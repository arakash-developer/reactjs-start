"use client"
import React from 'react'
import { Provider } from 'react-redux'
import Store from '@/app/lib/store/Store'
import DataContext from '@/app/lib/context/DataContext'

const StoreProvider = ({ children }) => {
    return (
        <>
            <Provider store={Store}>
                <DataContext>
                    {children}
                </DataContext>
            </Provider>
        </>

    )
}

export default StoreProvider