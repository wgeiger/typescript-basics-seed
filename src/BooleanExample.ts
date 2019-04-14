const pizzasExample : number = 5;

function offerDiscount(orders:number):boolean{
    return orders >= 3;
}

if(offerDiscount(pizzasExample)){
    console.log(`You're entitled to a discout`);
}else{
    console.log('order more than 3 pizzas for discount');
}