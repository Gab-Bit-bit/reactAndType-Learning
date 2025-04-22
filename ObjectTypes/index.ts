// 1 - tipo de objetos para função com interface
interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}
function showProductDetails(product: Product) {
  console.log(
    `O nome do produto é ${product.name} e seu preço é de: ${product.price}`
  );
  if (product.isAvailable) {
    console.log("O produto está disponível");
  } else {
    console.log("Produto não disponível no momento");
  }
}

const shirt: Product = {
  name: "Camisa",
  price: 49.99,
  isAvailable: true,
};
showProductDetails(shirt);

showProductDetails({
  name: "Camisa",
  price: 129.9,
  isAvailable: false,
});

// 2 - propriedade opcional em interfaces
interface User {
  email: string;
  role?: string;
}
function showUserDetails(user: User) {
  if(user.role){
    console.log(`O email de: ${user.email} foi verificado com sucesso e sua função é de: ${user.role}`)
  }else{
    console.log(`O email de: ${user.email} foi verificado.`)
  }
}

const u1: User = {
  email: "Gabriel@email.com",
  role: "Admin",
};
const u2: User = {
  email: "Matheus@email.com",
};
showUserDetails(u1);
showUserDetails(u2);

// 3 - readonly
interface Car {
  brand: string;
  readonly wheels: number;
}

const fusca: Car = {
  brand: "VW",
  wheels: 4,
};
console.log(fusca);

// fusca.wheels = 5

// 4 - index signature
interface CoordObject {
  [index: string]: number;
}

let coords: CoordObject = {
  x: 10,
};
coords.y = 20;

console.log(coords);

//  5 - Herança de interfaces
interface Human {
  name: string;
  age: number;
}
interface SuperHuman extends Human {
  superpowers: string[];
}
const gabriel: Human = {
  name: "Gabriel",
  age: 20,
};
console.log(gabriel);

const gabriel2: SuperHuman = {
  name: "Gabriel",
  age: 20,
  superpowers: ["Kamehameha", "Genjustu", "Genki Dama"],
};
console.log(gabriel2);
console.log(gabriel2.superpowers[1]);

// -------------
interface AllCars {
  brand: string;
  readonly wheels: number;
  color: string;
  optionals?: string;
}
interface Cars extends AllCars {
  engine: string | number
  
}

const camaro: AllCars = {
  brand: "Chevrolet",
  wheels: 4,
  color: "Amarelo",
  optionals: "Bancos de couro"
};
console.log(camaro);

const laFerrari: Cars = {
  brand: "ferrari",
  wheels: 4,
  color: "Vermelho",
  optionals: "Bancos esportivos e logos adicionais",
  engine: "V12"
}

console.log(laFerrari);

// 6 -  intersection type
interface Character{
 name: string
}
interface Gun{
  type: string,
  caliber: number
}
type HumanWithGun = Character & Gun

const arnold: HumanWithGun = {
  name: "Arnold",
  type: "shotgun",
  caliber: 12 
}
console.log(arnold);

//--------------
interface Name{
  name: string
}
interface LastName{
  lastName: string
}
type ShowFullName = Name & LastName;

const fullName: ShowFullName = {
  name: "Gabriel",
  lastName: "De Conto Oliveira"
}

console.log(fullName);

// 7 - ReadOnlyArray 
const myArray: ReadonlyArray<string> = ["Maçã", "Banana", "Limão"]

console.log(myArray);

myArray.forEach((item) => {
  console.log("Fruta: " + item);
});
myArray.map((item) => {
  return `Fruta: ${item}`
})
console.log(myArray);

// 8 - tupla
type fiveNumbers = [number, number, number, number, number]
const myArrayNumber = [1, 2, 3, 4, 5]
console.log(myArrayNumber);

type nameAndAge = [string, number]

const anotherUser: nameAndAge = ["Gabriel", 20];
console.log(anotherUser[0]);

anotherUser[0] = "Matheus";
console.log(anotherUser[0]);

//  9 - tupla com ReadOnly
function showNumbers(numbers: readonly [number, number]){
  // numbers[0] = 10
  console.log(numbers[0])
  console.log(numbers[1]);
}
showNumbers([1, 2]);