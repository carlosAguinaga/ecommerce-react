import React, { useContext } from 'react'
import Header from '../components/custom/Header/Header'
import { ShopCartContext } from '../context/ShopCartContext'


const Main = ({children}) => {

    const {state} = useContext(ShopCartContext)

    return (
        <>
            <Header cart={state.cart} total={state.totalPrice} name={state.user}/>
            {children}
        </>
    )
}

export default Main
