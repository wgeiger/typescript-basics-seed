const pizzas =[
    {name:'pepperoni', toppings: ['pepperoni'] }
];

const mappedPizzas = pizzas.map((pizza) => pizza.name.toUpperCase());

console.log(mappedPizzas);