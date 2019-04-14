const pizzaObjLit ={
    name:'Pepp',
    price:15,
    getName(){
        return this.name;
    }
};

const toppings =['pepperoni'];


function createOrder(zaa: any,topps: any){
    return {zaa,topps}
}


console.log(pizzaObjLit.getName());
console.log(createOrder(pizzaObjLit,toppings));