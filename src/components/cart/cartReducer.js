const CartReducer = (state = [], action) => {    
    switch(action.type){
        case "ADD" :                                     
            return addCart(state, action)            
        case "DECREMENT_CART" :            
            return decrementCart(state, action)            
        case "RESET_CART":
            return resetCart(state, action)

    }    
    return state;
}

const addCart = (state, action) => {
    let newState = [...state]      
    const search = newState.filter(obj => {
        return obj.id === action.value.id
    })                        

    if(search.length == 0){          
        if(action.qty > 0){
            newState.push({
                id: action.value.id,
                name: action.value.name,
                price: action.value.price * action.qty,
                qty: action.qty
            });
        }        
    }
    else{
        const idx = newState.indexOf(search[0])
        if((newState[idx].qty + action.qty) > 0){
            newState[idx].qty += action.qty
            newState[idx].price += (action.value.price * action.qty)
        }  
        else{
            newState = newState.filter(e => e.id != newState[idx].id)
        }      
    }                        
    return newState;    
}

const decrementCart = (state, action) => {
    const id = action.id            
    let newState = [...state]      
    const search = newState.filter(e => e.id === id)

    if(search.length == 1){
        const idx = newState.indexOf(search[0])                
        if(newState[idx].qty == 1){
            newState = newState.filter(e => e.id != id)                    
        }
        else{
            let originalPrice = newState[idx].price / newState[idx].qty
            newState[idx].qty--;
            newState[idx].price -= originalPrice;                    
        }                
    }
    return newState;
}

const resetCart = (state, action) => {
    return []
}

export default CartReducer