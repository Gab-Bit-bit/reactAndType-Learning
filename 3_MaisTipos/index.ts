// 1 - arrays
let numbers: number[] = [1, 2, 3];

numbers.push(5);
console.log(numbers[2]);

// numbers = "teste";

const nomes: string[] = ["Gabriel", "Matheus"]

nomes.push("João");
console.log(nomes);
console.log(nomes[1]);
console.log((nomes[0].toUpperCase()));

// nomes.push(4);

// 2 - outra sintaxe de arrays
const nums: Array<number> = [100, 200];

nums.push(300);
console.log(nums);
console.log(nums[0]);
console.log(nums[10]);

// 3 - any
const arr1: Array<any> = [1, "Tetse", true, 17.7483, [], {nome: "Gabriel"}];
console.log(arr1);

arr1.push([1, "Mauricio"]);
console.log(arr1.length);

// 4 - parametros tipados
function soma(a: number, b: number){
  return a + b;
}
console.log(soma(4, 5));

function calculo(c: number, d: number, e: number){
  return c * d + e
}
console.log(calculo(2, 5, 6));

// 5 - retorno de função
function greeting(name: string): string{
  return `Ola ${name}`
}
console.log(greeting("Gabriel"));

// 6 - função anonima
setTimeout(function(){
  const sallary: number = 1000;
  // console.log(parseFloat(sallary));
  // console.log(sallary);
});

// 7 - tipos de objetos
function passCordinates(coord: {x: number, y: number}){
  console.log("X coordinates: " + coord.x);
  console.log("Y coordinates: " + coord.y);
};
 const objCoord = {x: 329, y: 84.5}

// 8 - propriedades opcionais
function showNumbers(a:  number, b: number, c?: number){
  return `A: ${a} \nb: ${b} \nc: ${c}`
}
console.log(showNumbers(1, 2, 3));
console.log(showNumbers(1, 2));
// console.log(showNumbers(1));

// 9 - validando argumento opcional
function advancedGreeting(firstName: string, lastName?: string){
  if(lastName !== undefined){
    return `Olá ${firstName} ${lastName}, tudo bem?`
  } 
  return `Olá ${firstName}, tudo bem?`
};

console.log(advancedGreeting("Gabriel", "de Conto"));
console.log(advancedGreeting("Gabriel"));

// 10 - union type
function showBalance(balance: number | string){
  return `O saldo da conta é R$${balance}`
}
console.log(showBalance(100));
console.log(showBalance("500"));

// union type em arrays
const arr2: Array<number | string | boolean> = [1, "Gabriel", true];

// 11 - avançando em union type
function showUserRole(role: boolean | string){
  if(typeof role === "boolean"){
    return "Usuário não encontrado"
  }
  return `A função do usário é ${role}`
};

console.log(showUserRole(false));
console.log(showUserRole("Admin"));

// 12 - type alias
type ID = string | number;
function showId(id:  ID){
  return `O ID é ${id}`
}
console.log(showId(123))
console.log(showId("456"));

// 13 - interfaces
interface Point{
  x: number
  w: number
  z: number
};
function showCoords(obj: Point){
  return `X: ${obj.x} \nY: ${obj.w} \nZ: ${obj.z}`
}

const coordObj: Point = {
  x: 10,
  w: 15,
  z: 20
}
console.log(showCoords(coordObj));

// 14 - interface x type alias
interface Person{
  name: string
};
interface Person{ //modifiquei a interface add o age
  age: number
};

const somePerson: Person = {name: "Gabriel", age: 20};

console.log(somePerson);

type personType = {
  name: string
};
// type personType = {
//   age: number
// };   // nao da para modificar

// 15 - literal types
let teste: "testando"

// teste = 1;

function showDirection(direction: "left" | "right" | "center"){ //LITERAL TYPE COM UNION TYPE
  return `A direção é: ${direction}`
}
console.log(showDirection("left"));

// console.log(showDirection("top"));

// 16 - non null assertion operator
const p = document.getElementById("some-p");
console.log(p!.innerText);

// 17 - bigint
let n: bigint;

// n = 1;

n = 1000n
console.log(n)
console.log(typeof n);

// 18 - symbol
let symbolA: symbol = Symbol("a")
let symbolB = Symbol("a")

console.log(symbolA == symbolB)
console.log(symbolA === symbolB)
