import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Product from './product';

const ProductList = () => {        
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
            <Product key={product.id} product={product} />
            
        )
    })
}

 
export default ProductList;