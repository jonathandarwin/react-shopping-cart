import React, { Component } from 'react';
import { useDispatch } from 'react-redux'

function Cart({cartList}) {         
    const dispatch = useDispatch()

    return (  
        cartList.map(cart => {            
            return (                                
                <div className="row" key={cart.id}>
                    <div className="col-md-1">                        
                        <i className="fa fa-minus-circle ic-delete" aria-hidden="true" onClick={() => dispatch(decrementCart(cart.id))}></i>
                    </div>
                    <div className="col-md-1">
                        <span>{cart.qty}x</span>
                    </div>
                    <div className="col-md-5">
                        <strong>{cart.name}</strong>
                    </div>
                    <div className="col-md-4">
                        <span>{cart.price}</span>
                    </div>
                </div>                                 
            )  
        })
    );
}

const decrementCart = id => {    
    return {
        type : "DECREMENT_CART",
        id : id
    }
}
 
export default Cart