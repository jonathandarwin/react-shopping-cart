const ProductListReducer = (state = [
    {
        id : 1,
        name : "Product 1",     
        price : 10000   
    },
    {
        id : 2,
        name : "Product 2",        
        price : 20000
    },
    {
        id : 3,
        name : "Product 3",        
        price : 30000
    },
    {
        id : 4,
        name : "Product 4",     
        price : 40000   
    },
    {
        id : 5,
        name : "Product 5",     
        price : 50000   
    },
], action) => {
    switch(action.type){
        case "ADD_PRODUCT":            
            const temp = [...state]
            temp.push(action.value)
            return temp;
    }
    return state;
}

export default ProductListReducer