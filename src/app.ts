const pizzas =[
    {name:'pepperoni', toppings: ['pepperoni'] }
];

const mappedPizzas = pizzas.map(function (pizza) {
    return pizza.name.toUpperCase()
});

console.log(mappedPizzas);