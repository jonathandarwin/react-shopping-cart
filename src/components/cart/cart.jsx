import React, { Component } from 'react';

function Cart({cartList}) {      
    return (  
        cartList.map(cart => {            
            return (                                
                <div className="row" key={cart.id}>
                    <div className="col-md-2">
                        <span>{cart.qty}x</span>
                    </div>
                    <div className="col-md-5">
                        <strong>{cart.name}</strong>
                    </div>
                    <div className="col-md-5">
                        <span>{cart.price}</span>
                    </div>
                </div>                                 
            )  
        })
    );
}
 
export default Cart