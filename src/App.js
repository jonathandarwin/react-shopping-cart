import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/productList';
import Cart from './components/cart';
import { addProduct } from './actions/productAction';
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
            <Cart />            
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
                name: `Product ${selector.length+1}`
              }))}>Add Product</button>
            </div>
          </div>
        </div>        
      </div>
    </React.Fragment>    
  );
}

export default App;
