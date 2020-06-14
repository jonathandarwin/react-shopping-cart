import React, { Component } from 'react';
import { useSelector } from 'react-redux';

function Cart(){

    const selector = useSelector(state => state.CartReducer)
    
    return (
        <React.Fragment>
            <h3>Your Cart</h3>
            {generateCart(selector)}
        </React.Fragment>        
    );
}
 
const generateCart = selector => {    
    if(selector.length == 0)
        return (
            <span className="text-muted">
                No product in your card right now.
            </span>
        )
        
    return selector.map(cart => {
        return (
            <div className="row" key={cart.id}>
                <div className="col-md-2">
                    <span>{cart.qty}x</span>
                </div>
                <div className="col-md-10">
                    <span>{cart.name}</span>
                </div>
            </div>
        )  
    })    
}

export default Cart;