import axios from "axios"
import { LOGOUT, PRODUCT_DATA_FAILURE, PRODUCT_DATA_LOADING, PRODUCT_DATA_SUCCESS } from "./actionTypes"
export const fetchdata = (params) => (dispatch) => {
  dispatch({ type: PRODUCT_DATA_LOADING })
  axios.get("https://digital-empire.onrender.com/products?", params)
    .then(res => {
      console.log(res)
      dispatch({ type: PRODUCT_DATA_SUCCESS, payload: res.data })
    })
    .catch(dispatch({ type: PRODUCT_DATA_FAILURE }));
}

export const logout = () => (dispatch) => {
  dispatch({ type: LOGOUT });
}