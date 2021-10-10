import { useContext, useEffect } from "react"
import { ProductListContext } from "../context/ProductListContext"
import { ShopCartContext } from "../context/ShopCartContext"

const useLocalStorage = () => {

    const {state: productState} = useContext(ProductListContext)
    const {state: cartState} = useContext(ShopCartContext)

    useEffect(() => {
        const obj = {productState, cartState}
        localStorage.setItem("shopState", JSON.stringify(obj));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cartState])

}


export {useLocalStorage}