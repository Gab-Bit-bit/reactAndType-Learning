"use strict";
// 1 - Number
let x = 10;
console.log(x);
x = 16;
console.log(typeof x);
const y = 15.5643;
console.log(typeof y);
console.log(y);
console.log(y.toPrecision(3)); //alterar casas decimais
// 2 - String
const firstName = "Gabriel";
console.log(firstName.toUpperCase());
let fullName; //variavel nao declarada porem tipada
const lastName = "Oliveira";
fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);
// 3 = Boolean
let a = true;
console.log(a);
console.log(typeof a);
a = false;
console.log(a);
// 4 - Annotation e Inference
const ann = "Teste";
// tipar manualmente ou o ts detecta qual seria o tipo
let inf = "Teste";
// ann = 1
// inf = 1
// DESAFIO
const n1 = 10;
const numberToString = n1.toString();
const printMyNumber = `Eu vou imprimir o número ${numberToString}`;
console.log(printMyNumber);
