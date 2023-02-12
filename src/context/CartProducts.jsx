import { createContext, useReducer } from "react";
import { Reducer } from "./Reducer";

export const ProductContext = createContext();

let initState={
    cartProducts:[],
    products:[]
};

export const ProductsContextProviderWrapper = ({children}) =>{
    const [state,dispatch]=useReducer(Reducer,initState);
    return (
        <ProductContext.Provider value={[state,dispatch]}>
            {children}
        </ProductContext.Provider>
    )
}