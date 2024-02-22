import React, { createContext, useEffect, useState } from "react";


export const ProductContext = createContext(null)


const ProductContextProvider = (props) => {
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('http://localhost:4000/products/allProducts')
        .then((res)=>res.json())
        .then((data)=>{setProducts(data)})
    }, [])
        

    return (
        <ProductContext.Provider value={products}>
            {props.children}
        </ProductContext.Provider>
    )
}

export default ProductContextProvider;