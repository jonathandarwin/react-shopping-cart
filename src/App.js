import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/navbar';
import ProductList from './components/product/productList';
import CartList from './components/cart/cartList';
import { useSelector, useDispatch } from 'react-redux';

function App() {
  const dispatch = useDispatch()
  const selector = useSelector(state => state.ProductListReducer)

  return (    
    <React.Fragment>
      <Navbar />    
      <div className="container p-2">
        <div className="row">
          {/* Cart */}
          <div className="col-md-3 p-2 border-right">
            <CartList />            
          </div>          
          <div className="col-md-9">
            {/* Product List */}
            <div className="row">
              <ProductList />
            </div>
            <hr />
            <div className="row m-2">
              <button className="btn btn-warning" onClick={() => dispatch(addProduct({
                id: selector.length+1,
                name: `Product ${selector.length+1}`,
                price: (selector.length+1) * 10000
              }))}>Add Product</button>
            </div>
          </div>
        </div>        
      </div>
    </React.Fragment>    
  );
}

export const addProduct = product => {
  return {
      type : "ADD_PRODUCT",
      value : product
  }
}

export default App;
