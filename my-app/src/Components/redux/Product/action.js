import axios from "axios"
import { PRODUCT_DATA_FALIUER, PRODUCT_DATA_LOADING, PRODUCT_DATA_SUCCESS } from "./actionType"
export const fetchdata=(params)=>(dispatch)=>{
     dispatch({type:PRODUCT_DATA_LOADING})
     axios.get("https://digital-empire.onrender.com/products?",params)
     .then(res=>{
        console.log(res)
        dispatch ({type:PRODUCT_DATA_SUCCESS,payload:res.data})
     })
     .catch(dispatch({type:PRODUCT_DATA_FALIUER}))
}