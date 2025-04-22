// 1 - Number
let x: number = 10
console.log(x);

x = 16
console.log(typeof x);

const y: number = 15.5643
console.log(typeof y);
console.log(y);

console.log(y.toPrecision(3)); //alterar casas decimais

// 2 - String
const firstName: string = "Gabriel"
console.log(firstName.toUpperCase());

let fullName: string //variavel nao declarada porem tipada

const lastName: string = "Oliveira"

fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);

// 3 = Boolean
let a: boolean = true
console.log(a)
console.log(typeof a);

a = false
console.log(a);

// 4 - Annotation e Inference
const ann: string = "Teste"
// tipar manualmente ou o ts detecta qual seria o tipo de dado
let inf = "Teste"

// ann = 1
// inf = 1

// DESAFIO
const n1: number = 10

const numberToString = n1.toString();
const printMyNumber: string = `Eu vou imprimir o número ${numberToString}`;

console.log(printMyNumber);