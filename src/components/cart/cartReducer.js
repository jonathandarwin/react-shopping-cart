const CartReducer = (state = [], action) => {
    switch(action.type){
        case "ADD" :                        
            const temp = [...state];            
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
    return state;
}

export default CartReducer