import React, { Component } from 'react';
import { useSelector } from 'react-redux';
import Cart from './cart'

function CartList(){

    const cartState = useSelector(state => state.CartReducer)
    
    return (
        <React.Fragment>
            <h3>Your Cart</h3>
            {generateCart(cartState)}
        </React.Fragment>        
    );
}
 
const generateCart = cartState => {    
    if(cartState.length == 0)
        return (
            <span className="text-muted">
                No product in your card right now.
            </span>
        )
        
    return (
        <React.Fragment>
            <Cart cartList={cartState} />    
            <hr />
            <div className="row">
                <div className="col-md-7">
                    <h4>Total : </h4>
                </div>
                <div className="col-md-5">
                    {calculateTotalScore(cartState)}
                </div>
            </div>
        </React.Fragment>        
    )    
}

const calculateTotalScore = cartState => {
    let total = 0
    cartState.forEach(e => {
        total += e.price
    });    
    return total;
}

export default CartList;