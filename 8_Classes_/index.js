"use strict";
// 1 - campos em classes
class User {
}
const gabriel = new User();
console.log(gabriel);
gabriel.name = "Gabriel";
gabriel.age = 20;
// 2 - constructor
class NewUser {
    constructor(name, age, job) {
        this.name = name;
        this.age = age;
        this.job = job;
    }
}
const gab = new NewUser("Gabriel", 20, "Programador");
console.log(gab);
// const joao = new NewUser(12, "Jogador", "Joao");
// 3 - campo readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("Fusca");
console.log(fusca);
console.log(fusca.wheels);
fusca.name = "Fusca turbo";
console.log(fusca.name);
// 4 - herança e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const trator = new Machine("Trator");
const destroyer = new KillerMachine("Destroyer", 4);
console.log(trator);
console.log(destroyer);
// 5 - metodos
class Dwarf {
    constructor(name) {
        this.name = name;
    }
    greeting() {
        console.log("Hey stranger");
    }
}
const jimmy = new Dwarf("Jimmy");
console.log(jimmy.name);
jimmy.greeting();
console.log(jimmy);
// 6 - this
class MyTruck {
    constructor(model, horsePower) {
        this.model = model;
        this.horsePower = horsePower;
    }
    showDetails() {
        console.log(`Cminhão do modelo: ${this.model} com ${this.horsePower} cavalos de potência!`);
    }
}
const truck = new MyTruck("Volvo", 400);
const scania = new MyTruck("Scania", 350);
truck.showDetails();
scania.showDetails();
// 7 - getters
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
    }
    get fullname() {
        return this.name + " " + this.surname;
    }
}
const gabrielDeConto = new Person("Gabriel", "de Conto");
console.log(gabrielDeConto.fullname);
// 8 - setters
class Coords {
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso");
    }
    set fillY(y) {
        if (y === 0) {
            return;
        }
        this.y = y;
        console.log("Y inserido com sucesso");
    }
    get getCoords() {
        return `O valor de X: ${this.x} e de Y: ${this.y}`;
    }
}
const coords = new Coords();
coords.fillX = 10;
coords.fillY = 10;
console.log(coords);
console.log(coords.getCoords);
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O título do post é: ${this.title}`;
    }
}
const myPost = new blogPost("Hello World");
console.log(myPost.itemTitle());
// 10 - override de metodos
class base {
    someMethod() {
        console.log("Alguma coisa");
    }
}
class Nova extends base {
    someMethod() {
        console.log("Alguma outra coisa");
    }
}
const myObject = new Nova();
myObject.someMethod();
// 11 - visibilidade
// Public
class C {
    constructor() {
        this.x = 10;
    }
}
class D extends C {
}
const cIntance = new C();
console.log(cIntance.x);
const dInstance = new D();
console.log(dInstance.x);
// Potected
class E {
    constructor() {
        this.x = 10;
    }
    protectedMethod() {
        return "Este método é protegido";
    }
}
class F extends E {
    showX() {
        return `X = ${this.x}`;
    }
    showProtectedMethod() {
        return `${this.protectedMethod()}`;
    }
}
const fInstance = new F();
// console.log(fInstance.x);
// console.log(fInstance.protectedMethod())
console.log(fInstance.showX());
console.log(fInstance.showProtectedMethod());
// Private
class PrivateClass {
    constructor() {
        this.name = "Gabriel";
    }
    privateMethod() {
        return `Metódo Privado`;
    }
    showName() {
        return `O nome privado é: ${this.name}`;
    }
    showPrivateMethod() {
        return `O método privado é: ${this.privateMethod()}`;
    }
}
const pObj = new PrivateClass();
// console.log(pObj.name);
// console.log(pObj.privateMethod());
console.log(pObj.showName());
console.log(pObj.showPrivateMethod());
// 12 - static members
class StaticMembers {
    static staticMethod() {
        console.log("Este é um método estático");
    }
}
StaticMembers.prop = "Teste static";
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
// 13 - generic class
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O primeiro elemento é: ${this.first}`;
    }
    get showSecond() {
        return `O segundo elemento é: ${this.second}`;
    }
}
const newItem = new Item("Caixa", "Surpresa");
console.log(newItem.first);
console.log(newItem.showFirst);
console.log(typeof newItem.first);
console.log(newItem.showSecond);
const secondItem = new Item(20, false);
console.log(secondItem.second);
console.log(secondItem.showFirst);
console.log(typeof secondItem.second);
console.log(secondItem.showSecond);
// 14 - parameters properties
class ParameterProperties {
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
        this.name = name;
        this.qty = qty;
        this.price = price;
    }
    get showQty() {
        return `A quantidade é de: ${this.qty}`;
    }
    get showPrice() {
        return `O preço é de: ${this.price}`;
    }
}
const newShirt = new ParameterProperties("Camise", 7, 59.90);
console.log(newShirt);
console.log(newShirt.showQty);
console.log(newShirt.showPrice);
// 15 - class expressions
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass("Gabriel");
console.log(pessoa);
// 16 - abstract class
class AbstractClass {
}
class AbstractExemple extends AbstractClass {
    constructor(name) {
        super();
        this.name = name;
    }
    showName() {
        return `O nome é: ${this.name}`;
    }
}
const newAbstarctObject = new AbstractExemple("Josias");
console.log(newAbstarctObject.showName());
// 17 - ralação entre classes
class Dog {
}
class Cat {
}
const doguinho = new Cat();
console.log(doguinho);
