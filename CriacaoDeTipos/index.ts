// 1 - generics revisao
function showGeneric<T>(arg: T): string{ 
  return `O dado é: ${arg}`
}
console.log(showGeneric(5));
console.log(showGeneric("testando o generic"));
console.log(showGeneric(true));
console.log(showGeneric(["Gabriel", 5, true]));
//aceita qualquer tipo voltando a tipagem da function

// 2 - constraints em generics
function showProductName<T extends {name: string}>(obj: T){
  return `O nome do produto é: ${obj.name}`
}
const myObj = {name: "Porta", cor: "Branca"}
console.log(showProductName(myObj));

const otherObj = {name: "Carro", wheels: 4, engine: 1.0};
console.log(showProductName(otherObj));
//apenas uma propriedade garantida que seja um OBJ porem "aceita" as outras

// 3 - generics com interfaces
interface myObject<T, U, Q>{
  name: string,
  wheels: T,
  engine: U,
  color: Q
}
type Car = myObject<number, number, string>
type Pen = myObject<boolean, boolean, string>

const myCar: Car = {name: "fusca", wheels: 4, engine: 1.0, color: "Branco"}
const myPen: Pen = {name: "Caneta BIC", wheels: false, engine: false, color: "Azul"}

console.log(myCar);
console.log(myPen);

// 4 - type parameters
function getSomeKey<T, K extends keyof T>(obj: T, key: K){
  return `A chave ${key.toString()} está presente no objeto e tem o valor de ${obj[key]}`
}
const server = {
  hd: "2TB",
  ram: "32GB"
}
console.log(getSomeKey(server, "ram"));

// -----------------
function ssdOuHD<T, K extends keyof T>(obj: T, key: K){
  return `O ${key.toString()} tem ${obj[key]} de memória!`
}
const hdOuSsd = {
  ssd: "500GB",
  hd: "1TB"
}
console.log(ssdOuHD(hdOuSsd, "ssd"));
console.log(ssdOuHD(hdOuSsd, "hd"));

// 5 - keyof type operator
type Character = {name: string, age:  number, isDirveLicense:boolean};
type k = keyof Character

function showCharName(obj: Character, key: k): string{
  return `${obj[key]}`
}

const myChar: Character = {
  name: "Gabriel",
  age: 20,
  isDirveLicense: true
}
console.log(showCharName(myChar, "name"));
console.log(showCharName(myChar, "age"));
console.log(showCharName(myChar, "isDirveLicense"));

// 6 - typeof type operator
const userName: string = "Gabriel"
const userName2: typeof userName = "Matheus"
// const userName3: typeof userName = 5

type x = typeof userName
const userName4: x = "Joaquim"
//criar uma variavel com o mesmo tipo de outra variavel

// 7 - indexed access type
type Truck = {km: number, kg: number, description: string}
type Km = Truck["km"];

const newTruck = {
  km: 10000,
  kg: 5000,
  desciption: "Caminhão para pouco peso"
}

function showKm(km: Km){
  return `O veículo tem a km de ${km}`
}
console.log(showKm(newTruck.km));

const newCar = {
  km: 11000,
  kg:  600 
}
console.log(showKm(newCar.kg));

// ----------------
type PcGamer = {ram: string, hd: string, ssd?: string};
type dados = PcGamer["ram" | "hd" | "ssd"]

function showPcDetails(ram: dados, hd: dados, ssd?: dados){
  if(!ram || !hd){
    return `hd e ssd são Obrigatórios`
  }else if(ram && hd && ssd){
    return  `Detalhes do computador: ${ram} de memória ram, ${hd} de hd, ${ssd} de ssd`
  }else if(ram && hd){
    return  `Detalhes do computador: ${ram} de memória ram, ${hd} de hd`
  }
}

const pc = {
  ram: "32GB",
  hd: "930GB",
  ssd: "500GB"
}
console.log(showPcDetails(pc.ram, pc.hd, pc.ssd));
console.log(showPcDetails(pc.ram, pc.hd));

const pc2 = {
  ram: "",
  hd: "930GB",
  ssd: "500GB"
}
console.log(showPcDetails(pc2.ram, pc2.ssd));

// 8 - conditional expression type
interface A{}
interface B extends A{}

type MyType = B extends A ? number : string
const someVar: MyType = 5;
// const someVar2: MyType = "testando";

interface Teste{
  name: string
  age: string
}
type MyTypeB = Teste extends{name: string} ? string : boolean
type MyTybeC = Teste extends{age: number} ? number : boolean

// 9 - template literals
type testeA = "text"
type CustomType = `some ${testeA}`

const teste: CustomType = "some text"

type a1 = "Testando"
type a2 = "Union"
type a3 = `${a1}` | `${a2}`

const testing: a3 =  "Union"
//OU
const testing2: a3 = "Testando"