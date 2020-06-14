import React, { Component, createRef } from 'react';
import { useDispatch } from 'react-redux';
import { addCart } from '../actions/cartAction'

function Product(product) {    
         
        // const { product } = this.props        
        const dispatch = useDispatch()
        
        let qty = createRef()

        return ( 
            <React.Fragment>
                <span>{product.product.name}</span>
                <br />
                <input ref={qty} type="number" className="input form-control"/>
                <br />
                <button className="form-control btn btn-primary" onClick={() => dispatch(addCart(product.product, parseInt(qty.current.value)))}>Add To Cart</button>
            </React.Fragment>            
        );
}
 
export default Product;