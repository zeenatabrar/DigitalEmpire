import { LOGOUT, PRODUCT_ADDED_TO_CART, PRODUCT_DATA_FAILURE, PRODUCT_DATA_LOADING, PRODUCT_DATA_SUCCESS } from "./actionTypes";

const initialState = {
  isLoading: false,
  productData: [],
  isError: false,
  theme: "light",
  isAuth: true,
  cart: [],
}
export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case PRODUCT_DATA_LOADING:
      return { ...state, isLoading: true }
    case PRODUCT_DATA_SUCCESS:
      return { ...state, isLoading: false, productData: payload, isError: false }
    case PRODUCT_DATA_FAILURE:
      return { ...state, isLoading: false, isError: true }
    case LOGOUT:
      {
        return { ...state, isAuth: false };
      }
    case PRODUCT_ADDED_TO_CART:
      return { ...state, cart: [...state.cart, payload] }
    default:
      return state;
  }
}