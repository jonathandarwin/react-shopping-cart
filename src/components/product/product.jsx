import React, { Component, createRef } from 'react';
import { useDispatch } from 'react-redux';

const Product = ({product}) => {                      
        const dispatch = useDispatch()
        
        let qty = createRef()

        return (             
            <div className="col-md-3 p-3" key={product.id}>
                <span>{product.name}</span>
                <br />
                <input ref={qty} type="number" className="input form-control"/>                
                <span>Price : {product.price}</span>
                <br />
                <br />
                <button className="form-control btn btn-primary" onClick={() => dispatch(addCart(product, parseInt(qty.current.value)))}>Add To Cart</button>
            </div>                
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