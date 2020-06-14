import { combineReducers } from 'redux'
import ProductListReducer from './productListReducer'
import CartReducer from './cartReducer'

const reducer = combineReducers({ ProductListReducer, CartReducer })

export default reducer