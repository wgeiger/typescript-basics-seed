function sumAll(arr: number[]){
    return arr.reduce((prev,next)=>prev+next);
}

const sum = sumAll([1,2,3,4,5,6,7,8,9,10])
console.log(sum);

//or

function sumAll2(... arr){
    return arr.reduce((prev,next)=>prev+next);
}

const sum2 = sumAll2(1,2,3,4,5,6,7,8,9,10)
console.log(sum2);