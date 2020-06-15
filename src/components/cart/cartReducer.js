const CartReducer = (state = [], action) => {    
    switch(action.type){
        case "ADD" :                         
            console.log('add cart')
            return addCart(state, action)            

        case "DECREMENT_CART" :
            console.log('decrement cart')
            return decrementCart(state, action)            
    }    
    return state;
}

const addCart = (state, action) => {
    let temp = [...state]      
    const search = temp.filter(obj => {
        return obj.id === action.value.id
    })                        

    if(search.length == 0){                
        temp.push({
            id: action.value.id,
            name: action.value.name,
            price: action.value.price * action.qty,
            qty: action.qty
        });
    }
    else{
        const idx = temp.indexOf(search[0])                                
        temp[idx].qty += action.qty
        temp[idx].price += (action.value.price * action.qty)
    }                        
    return temp;    
}

const decrementCart = (state, action) => {
    const id = action.id            
    let temp = [...state]      
    const search = temp.filter(e => e.id === id)

    if(search.length == 1){
        const idx = temp.indexOf(search[0])                
        if(temp[idx].qty == 1){
            temp = temp.filter(e => e.id != id)                    
        }
        else{
            let originalPrice = temp[idx].price / temp[idx].qty
            temp[idx].qty--;
            temp[idx].price -= originalPrice;                    
        }                
    }
    return temp;
}

export default CartReducer