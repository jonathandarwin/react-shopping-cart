import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from './product';


function ProductList(){        
    const productListState = useSelector(state => state.ProductListReducer)        

    return ( 
        <React.Fragment>                
            {generateProduct(productListState)}
        </React.Fragment>            
    );    
}

const generateProduct = productListState => {
    return productListState.map(product => {
        return (
            <div className="col-md-3 m-2" key={product.id}>
                <Product key={product.id} product={product} />
            </div>
        )
    })
}

 
export default ProductList;