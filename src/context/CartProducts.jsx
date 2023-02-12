import { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductsContextProviderWrapper = ({children}) =>{
    const [cart,setCart]=useState(0);
    const handleCartProducts=()=>{

    }

    return (
        <ProductContext.Provider value={[cart,handleCartProducts]}>
            {children}
        </ProductContext.Provider>
    )
}