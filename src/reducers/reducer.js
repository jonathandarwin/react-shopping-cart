import { combineReducers } from 'redux'
import ProductListReducer from '../components/product/productListReducer'
import CartReducer from '../components/cart/cartReducer'

const reducer = combineReducers({ ProductListReducer, CartReducer })

export default reducer