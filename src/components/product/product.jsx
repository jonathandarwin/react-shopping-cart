import React, { Component, createRef } from 'react';
import { useDispatch } from 'react-redux';

function Product({product}) {                      
        const dispatch = useDispatch()
        
        let qty = createRef()

        return ( 
            <React.Fragment>
                <span>{product.name}</span>
                <br />
                <input ref={qty} type="number" className="input form-control"/>                
                <span>Price : {product.price}</span>
                <br />
                <br />
                <button className="form-control btn btn-primary" onClick={() => dispatch(addCart(product, parseInt(qty.current.value)))}>Add To Cart</button>
            </React.Fragment>            
        );
}

const addCart = (product, qty) => {        
    if(isNaN(qty)){        
        return {
            type : "INVALID"        
        }
    }    
    return {
        type : "ADD",
        value: product,
        qty: qty
    }
}
 
export default Product;