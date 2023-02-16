import { GET_PRODUCTS_ERROR, GET_PRODUCTS_LOADING, GET_PRODUCTS_SUCCESS } from "./ProductActionTypes";
import axios from 'axios';

export const getProducts = () => async ( dispatch ) =>{
    dispatch({type:GET_PRODUCTS_LOADING});
    axios.get("https://geektrust.s3.ap-southeast-1.amazonaws.com/coding-problems/shopping-cart/catalogue.json")
      .then((d) => {
        dispatch({ type: GET_PRODUCTS_SUCCESS, payload: d.data });
      })
      .catch((err) =>{
        dispatch({type:GET_PRODUCTS_ERROR,payload:err});
    });
}