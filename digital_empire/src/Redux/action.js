import axios from "axios"
import { ADD_TO_CART, PRODUCT_DATA_FAILURE, PRODUCT_DATA_LOADING, PRODUCT_DATA_SUCCESS, REMOVE_CART_ITEM } from "./actionTypes"
export const fetchdata = (params) => (dispatch) => {
  dispatch({ type: PRODUCT_DATA_LOADING })
  axios.get("https://digital-empire.onrender.com/products?", params)
    .then(res => {
      console.log(res)
      dispatch({ type: PRODUCT_DATA_SUCCESS, payload: res.data })
    })
    .catch(dispatch({ type: PRODUCT_DATA_FAILURE }));
}
export const addToCart = (userData)=>(dispatch) =>{
  dispatch({type: ADD_TO_CART, payload:userData})
}

export const removeItem = (cart) =>(dispatch)=>{
  dispatch({type:REMOVE_CART_ITEM, payload:cart})

}