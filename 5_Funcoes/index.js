"use strict";
// 1 - void
function withoutReturn() {
    console.log("Esta função não tem retorno!");
}
withoutReturn();
// 2 - callback como função
function greeting(name) {
    return `Olá ${name}`;
}
function preGreeting(f, userName) {
    console.log("Preparando a função");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Gabriel");
preGreeting(greeting, "Matheus");
// 3 - generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2
    };
}
const newObject = mergeObjects({ name: "Gabriel" }, { age: 20, job: "Programador" });
console.log(newObject);
// 4 - constraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 6));
console.log(biggestNumber("14", "11"));
// 5 - especificar argumento
function mergeArrays(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArrays([1, 2, 3], [4, 5]));
console.log(mergeArrays([7, 8, 9], ["Tetse", "Testando"]));
// 6 - parametros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Olá ${greet} ${name}, tudo bem?`;
    }
    return `Olá ${name}, tudo bem?`;
}
console.log(modernGreeting("Gabriel", "Dr."));
console.log(modernGreeting("Gabriel"));
// outro tipo
function optionalParameter(height, weight) {
    if (weight) {
        return `Você tem ${height}cm de altura e pesa ${weight}kg`;
    }
    return `Você tem ${height}cm de altura.`;
}
console.log(optionalParameter(170, 53));
console.log(optionalParameter(170));
// 7 - parametro default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10)); //USANDO O VALOR DEFAULT DO M
console.log(somaDefault(15, 12)); //ALTERANDO O VALOR DO M
// 8 - unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        return x[0];
    }
    else if (typeof x === "number") {
        return "X é um número";
    }
}
console.log(doSomething([1, 2, 3]));
console.log(doSomething(5));
function anything(desconhecido) {
    if (typeof desconhecido === "string") {
        return `O elemento ${desconhecido} é uma String`;
    }
    else if (Array.isArray(desconhecido)) {
        return `O elemento ${desconhecido} é um Array`;
    }
    else if (typeof desconhecido === "number") {
        return `O elemento ${desconhecido} é um número`;
    }
    return `O elemento ${desconhecido} é um boolean`;
}
console.log(anything("Gabriel"));
console.log(anything([4, 5, 6]));
;
console.log(anything(5));
console.log(anything(false));
// 9 - never
function showErrorMesage(msg) {
    throw new Error(msg);
}
// console.log(showErrorMesage("Algum erro!"));
// 10 - rest operator
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 5, 6));
console.log(sumAll(5, 234, 5342));
// 11 - destructuring
function showProductsDetails({ name, price }) {
    return `O nome do produto é ${name} e ele custa ${price}`;
}
const shirt = { name: "Camisa", price: 49.90 };
console.log(showProductsDetails(shirt));
