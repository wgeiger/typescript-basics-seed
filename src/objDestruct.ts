const pizzaObj = {
    name:'Pepp',
    toppings:['Pepp']
};

function order({name:pizzaName,toppings:pizzaToppings}){
    return {pizzaName,pizzaToppings}
}

const {pizzaName} = order(pizzaObj);