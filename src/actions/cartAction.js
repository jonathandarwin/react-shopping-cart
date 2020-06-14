export const addCart = (product, qty) => {        
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