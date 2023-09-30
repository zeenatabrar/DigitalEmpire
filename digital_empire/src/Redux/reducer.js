import { ADD_TO_CART, PRODUCT_DATA_FAILURE, PRODUCT_DATA_LOADING, PRODUCT_DATA_SUCCESS, REMOVE_CART_ITEM } from "./actionTypes";
const initialState = {
  isLoading: false,
  Productdata: [],
  isError: false,
  cart:[]
}
export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_DATA_LOADING:
      return { ...state, isLoading: true }
    case PRODUCT_DATA_SUCCESS:
      return { ...state, isLoading: false, Productdata: payload, isError: false }
    case PRODUCT_DATA_FAILURE:
      return { ...state, isLoading: false, isError: true }
    case ADD_TO_CART:
      return {...state, cart:[...state.cart, payload]}
    case REMOVE_CART_ITEM:
      return {...state, cart:state.cart.filter(el=>el.id!=payload)}  

    default:
      return state
  }
}