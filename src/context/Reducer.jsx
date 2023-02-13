export const Reducer = (state,action)=>{
    const {type,payload}=action;
    switch( type ){
        case "ADD_DATA":
            return {
                ...state,
                products:payload
            }
        case "ADD_INTO_CART":
            let product=state.products.filter((product)=>{
                return product.id === payload
            });
            return {
                ...state,
                cartProducts:[...state.cartProducts,...product]
            }
        case "DELETE":
            let products = state.cartProducts.filter((product)=>{
                return product.id !== payload;
            });
            return {
                ...state,
                cartProducts:products
            }
        case "FILTERED_DATA":
            return {
                ...state,
                filterProducts:[...state.filterProducts,...payload]
            }
        default:
            return state;
    }
}