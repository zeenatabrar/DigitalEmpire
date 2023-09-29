import { PRODUCT_DATA_FALIUER, PRODUCT_DATA_LOADING, PRODUCT_DATA_SUCCESS } from "./actionType";
const initialState={
    isLoading:false,
    Productdata:[],
    isError:false
}
export const ProductReducer=(state= initialState,{type,payload})=>{
switch (type) {
    case PRODUCT_DATA_LOADING:
        return {...state,isLoading:true}
    case PRODUCT_DATA_SUCCESS:
        return {...state,isLoading:false,Productdata:payload,isError:false}    
    case PRODUCT_DATA_FALIUER:
         return {...state,isLoading:false,isError:true}    

    default:
        return state
}
}