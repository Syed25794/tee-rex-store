import { FILTER_PRODUCTS, GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS, SEARCH_PRODUCTS } from "./ProductActionTypes";

let initState={
    products:[],
    filterProducts:[],
    isLoading:false,
    isError:false,
    isSuccess:false
};

export const ProductReducer = (state=initState,action)=>{
    const {type,payload}=action;
    switch( type ){
        case GET_PRODUCTS_LOADING:
            return {
                ...state,
                isLoading:true
            };
        case GET_PRODUCTS_SUCCESS:
            return {
                ...state,
                isSuccess:true,
                isLoading:false,
                products:payload
            };
        case GET_PRODUCTS_ERROR:
            return {
                ...state,
                isError:true,
                isLoading:false
            };
        case FILTER_PRODUCTS:
            return {
                ...state,
                filterProducts:payload
            };
        case SEARCH_PRODUCTS:
            return {
                ...state,
                
            }
        default:
            return state;
    }
}