"use strict";
function showProductDetails(product) {
    console.log(`O nome do produto é ${product.name} e seu preço é de: ${product.price}`);
    if (product.isAvailable) {
        console.log("O produto está disponível");
    }
    else {
        console.log("Produto não disponível no momento");
    }
}
const shirt = {
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
function showUserDetails(user) {
    if (user.role) {
        console.log(`O email de: ${user.email} foi verificado com sucesso e sua função é de: ${user.role}`);
    }
    else {
        console.log(`O email de: ${user.email} foi verificado.`);
    }
}
const u1 = {
    email: "Gabriel@email.com",
    role: "Admin",
};
const u2 = {
    email: "Matheus@email.com",
};
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4,
};
console.log(fusca);
let coords = {
    x: 10,
};
coords.y = 20;
console.log(coords);
const gabriel = {
    name: "Gabriel",
    age: 20,
};
console.log(gabriel);
const gabriel2 = {
    name: "Gabriel",
    age: 20,
    superpowers: ["Kamehameha", "Genjustu", "Genki Dama"],
};
console.log(gabriel2);
console.log(gabriel2.superpowers[1]);
const camaro = {
    brand: "Chevrolet",
    wheels: 4,
    color: "Amarelo",
    optionals: "Bancos de couro"
};
console.log(camaro);
const laFerrari = {
    brand: "ferrari",
    wheels: 4,
    color: "Vermelho",
    optionals: "Bancos esportivos e logos adicionais",
    engine: "V12"
};
console.log(laFerrari);
const arnold = {
    name: "Arnold",
    type: "shotgun",
    caliber: 12
};
console.log(arnold);
const fullName = {
    name: "Gabriel",
    lastName: "De Conto Oliveira"
};
console.log(fullName);
// 7 - ReadOnlyArray 
const myArray = ["Maçã", "Banana", "Limão"];
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myArrayNumber = [1, 2, 3, 4, 5];
console.log(myArrayNumber);
const anotherUser = ["Gabriel", 20];
console.log(anotherUser[0]);
anotherUser[0] = "Matheus";
console.log(anotherUser[0]);
//  9 - tupla com ReadOnly
function showNumbers(numbers) {
    // numbers[0] = 10
    console.log(numbers[0]);
    console.log(numbers[1]);
}
showNumbers([1, 2]);
