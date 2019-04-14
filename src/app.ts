const pizzas =[
    {name:'pepperoni', toppings: ['pepperoni'] }
];

const mappedPizzas = pizzas.map((pizza) => pizza.name.toUpperCase());

console.log(mappedPizzas);

const pizza ={
    name: 'BlazingInferno',
    getName:() => pizza.name,
    outputName:function(){
        console.log(this.name);
    }
}

console.log(pizza.getName());
pizza.outputName();