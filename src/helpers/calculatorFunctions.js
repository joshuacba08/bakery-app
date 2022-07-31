const getTotalPrice = (array) =>{
    return array.reduce((acum, currentValue)=> acum + (currentValue.price * currentValue.qty) ,0);
}

const getTotalItems = (array) =>{
    return array.reduce((acum, currentValue)=> acum + currentValue.qty ,0);
}


export {
    getTotalPrice,
    getTotalItems
}