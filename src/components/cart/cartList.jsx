import React, { Component } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Cart from './cart'

function CartList(){

    const cartState = useSelector(state => state.CartReducer)
    const dispatch = useDispatch()
    
    return (
        <React.Fragment>
            <h3>Your Cart</h3>
            {generateCart(cartState, dispatch)}
        </React.Fragment>        
    );
}
 
const generateCart = (cartState, dispatch) => {    

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
            <div className="row">
                 <div className="col-md-12">
                    <button className="btn btn-danger btn-sm" onClick={() => dispatch(resetCart())}>Reset Cart</button>
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

const resetCart = () => {
    return {
        type : 'RESET_CART'
    }
}

export default CartList;