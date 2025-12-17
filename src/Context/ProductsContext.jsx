import data from "../Components/Assets//All_Products/all_products";
import React, {createContext, useState} from 'react'

const getDefaultCart = () => {
    let cart= {};
    for(let i=0; i < data.length + 1; i++){
        cart[i] = 0;
    }
    return cart;
}

export const ProductsContext = createContext(null);

const ProductsContextProvider = (props) => {

    const [cartItems, setCartItems] = useState(getDefaultCart())


    const addToCart = (itemId, itemNumber) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + itemNumber }))
    }

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: 0 }))
    }

    const cartItemsNumbers = () => {
        let sum = 0;
        for(let key in cartItems){
            sum = cartItems[key] + sum
        }
        return sum
    }
    
    const contextValue = {
        data,
        addToCart,
        removeFromCart,
        cartItems,
        cartItemsNumbers
    };
    
        return (
            <ProductsContext.Provider value={contextValue}>
                {props.children}
            </ProductsContext.Provider>
        )
}

export default ProductsContextProvider