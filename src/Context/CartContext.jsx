import React, { createContext, useContext, useEffect, useState } from "react";
import { UserContext } from "./UserContext";

export const CartContext = createContext(null)




const CartContextProvider = (props) => {

    const [user, setUser] = useContext(UserContext)
    const [cart, setCart] = useState([])

    useEffect(() => {
        if (user.token !== '') {
            fetch(`http://localhost:4000/users/cart/${user._id}`)
                .then((res) => res.json())
                .then((data) => { setCart(data) })
        }

    }, [user])


    useEffect(() => {
        if(user.token !== ''){
            fetch(`http://localhost:4000/users/cart/${user._id}`, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(cart),
            }).then((res) => res.json())
        }
    },[cart])

    return (
        <CartContext.Provider value={[cart, setCart]}>
            {props.children}
        </CartContext.Provider>
    )

}

export default CartContextProvider
