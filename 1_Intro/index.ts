// tipagem 
const firstName = "Gabriel"
const anotherName = 1
const x = true

function greeting(name: string){
  console.log("Ola: " + name);
}

greeting(firstName);
// greeting(anotherName);
// greeting(x);


// desafio
function soma(a: number, b: number){
  return a + b;
}
console.log(soma(2, 2));

const z = 5;
const y = 8;

console.log(soma(z, y));

const a = 10;
const b = 25;
function calculo(a: number, b: number){
  return a + b; 
}
console.log(calculo(a, b));