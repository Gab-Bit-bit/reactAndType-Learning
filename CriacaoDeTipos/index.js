"use strict";
// 1 - generics revisao
function showGeneric(arg) {
    return `O dado é: ${arg}`;
}
console.log(showGeneric(5));
console.log(showGeneric("testando o generic"));
console.log(showGeneric(true));
console.log(showGeneric(["Gabriel", 5, true]));
//aceita qualquer tipo voltando a tipagem da function
// 2 - constraints em generics
function showProductName(obj) {
    return `O nome do produto é: ${obj.name}`;
}
const myObj = { name: "Porta", cor: "Branca" };
console.log(showProductName(myObj));
const otherObj = { name: "Carro", wheels: 4, engine: 1.0 };
console.log(showProductName(otherObj));
const myCar = { name: "fusca", wheels: 4, engine: 1.0, color: "Branco" };
const myPen = { name: "Caneta BIC", wheels: false, engine: false, color: "Azul" };
console.log(myCar);
console.log(myPen);
// 4 - type parameters
function getSomeKey(obj, key) {
    return `A chave ${key.toString()} está presente no objeto e tem o valor de ${obj[key]}`;
}
const server = {
    hd: "2TB",
    ram: "32GB"
};
console.log(getSomeKey(server, "ram"));
// -----------------
function ssdOuHD(obj, key) {
    return `O ${key.toString()} tem ${obj[key]} de memória!`;
}
const hdOuSsd = {
    ssd: "500GB",
    hd: "1TB"
};
console.log(ssdOuHD(hdOuSsd, "ssd"));
console.log(ssdOuHD(hdOuSsd, "hd"));
function showCharName(obj, key) {
    return `${obj[key]}`;
}
const myChar = {
    name: "Gabriel",
    age: 20,
    isDirveLicense: true
};
console.log(showCharName(myChar, "name"));
console.log(showCharName(myChar, "age"));
console.log(showCharName(myChar, "isDirveLicense"));
// 6 - typeof type operator
const userName = "Gabriel";
const userName2 = "Matheus";
const userName4 = "Joaquim";
const newTruck = {
    km: 10000,
    kg: 5000,
    desciption: "Caminhão para pouco peso"
};
function showKm(km) {
    return `O veículo tem a km de ${km}`;
}
console.log(showKm(newTruck.km));
const newCar = {
    km: 11000,
    kg: 600
};
console.log(showKm(newCar.kg));
function showPcDetails(ram, hd, ssd) {
    if (!ram || !hd) {
        return `hd e ssd são Obrigatórios`;
    }
    else if (ram && hd && ssd) {
        return `Detalhes do computador: ${ram} de memória ram, ${hd} de hd, ${ssd} de ssd`;
    }
    else if (ram && hd) {
        return `Detalhes do computador: ${ram} de memória ram, ${hd} de hd`;
    }
}
const pc = {
    ram: "32GB",
    hd: "930GB",
    ssd: "500GB"
};
console.log(showPcDetails(pc.ram, pc.hd, pc.ssd));
console.log(showPcDetails(pc.ram, pc.hd));
const pc2 = {
    ram: "",
    hd: "930GB",
    ssd: "500GB"
};
console.log(showPcDetails(pc2.ram, pc2.ssd));
const someVar = 5;
const teste = "some text";
const testing = "Union";
//OU
const testing2 = "Testando";
