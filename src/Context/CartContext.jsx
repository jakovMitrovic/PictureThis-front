import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext(null)


const CartContextProvider = (props) => {
    const [cart, setCart] = useState([])
    return (
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )
  
}

export default CartContextProvider
