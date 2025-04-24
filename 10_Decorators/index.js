"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// 1 - exemplo decorator
function myDecorator() {
    console.log("Iniciando decorator");
    return function (target, propertKey, descriptor) {
        console.log("Executando decorator");
        console.log(target);
        console.log(propertKey);
        console.log(descriptor);
    };
}
class myClass {
    testing() {
        console.log("Terminando a execução do método");
    }
}
__decorate([
    myDecorator()
], myClass.prototype, "testing", null);
const myObj = new myClass();
myObj.testing();
// 2 - multiplos decorators
function a() {
    return function (target, propertKey, descriptor) {
        console.log("Executou a");
    };
}
function b() {
    return function (target, propertKey, descriptor) {
        console.log("Executou b");
    };
}
function c() {
    return function (target, propertKey, descriptor) {
        console.log("Executou c");
    };
}
class MultipleDecorators {
    testing() {
        console.log("Terminando execução");
    }
}
__decorate([
    c(),
    b(),
    a()
], MultipleDecorators.prototype, "testing", null);
const multiple = new MultipleDecorators();
multiple.testing();
// 3 - decorator de classe
function classDecorator(constructor) {
    console.log(constructor);
    if (constructor.name === "User") {
        console.log("Criando Usuário");
    }
}
let User = class User {
    constructor(name) {
        this.name = name;
    }
};
User = __decorate([
    classDecorator
], User);
const gabriel = new User("Gabriel");
console.log(gabriel);
// 4 - decorator de metodo
function enumerable(value) {
    return function (target, propertKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Machine {
    constructor(name) {
        this.name = name;
    }
    showName() {
        console.log(this);
        return `O nome da máquina é: ${this.name}`;
    }
}
__decorate([
    enumerable(false)
], Machine.prototype, "showName", null);
const trator = new Machine("Trator");
console.log(trator.showName());
// 5 - acessor decorator
function enumerable2(value) {
    return function (target, propertKey, descriptor) {
        descriptor.enumerable = value;
    };
}
class Monster {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    get showName() {
        return `O nome do monstro é: ${this.name}`;
    }
    get showAge() {
        return `Idade do monstro é: ${this.age}`;
    }
}
__decorate([
    enumerable2(true)
], Monster.prototype, "showName", null);
__decorate([
    enumerable2(false)
], Monster.prototype, "showAge", null);
const charmander = new Monster("Charmander", 17);
console.log(charmander);
// 6 - property decorators
function formatNumber() {
    return function (target, propertKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            value = newVal.padStart(5, "0");
        };
        Object.defineProperty(target, propertKey, {
            get: getter,
            set: setter,
        });
    };
}
class Id {
    constructor(id) {
        this.id = id;
    }
}
__decorate([
    formatNumber()
], Id.prototype, "id", void 0);
const myId = new Id("12345");
console.log(myId);
console.log(myId.id);
// 7 - ex real com class decorator
function createdDate(created) {
    created.prototype.createdAt = new Date();
}
let Book = class Book {
    constructor(id) {
        this.id = id;
    }
    createdDate() {
        return `Este livro com o ID de ${this.id} foi criado em: ${this.createdAt}`;
    }
};
Book = __decorate([
    createdDate
], Book);
let Pen = class Pen {
    constructor(id) {
        this.id = id;
    }
    createdDate() {
        return `Esta com o ID de ${this.id} foi criada em: ${this.createdAt}`;
    }
};
Pen = __decorate([
    createdDate
], Pen);
const newBook = new Book(12);
const pen = new Pen(55);
console.log(newBook.createdDate());
console.log(pen.createdDate());
// 8 - ex real com decorator em metodos
function checkIfUserPosted() {
    return function (target, Key, descriptor) {
        const childFunction = descriptor.value;
        // console.log(childFunction);
        descriptor.value = function (...args) {
            if (args[1] === true) {
                console.log("Usuário já postou!");
                return null;
            }
            else {
                return childFunction.apply(this, args);
            }
        };
        return descriptor;
    };
}
class Post {
    constructor() {
        this.alreadyPosted = false;
    }
    post(content, alreadyPosted) {
        this.alreadyPosted = true;
        console.log(`Post do usuário: ${content}`);
    }
}
__decorate([
    checkIfUserPosted()
], Post.prototype, "post", null);
const newPost = new Post();
newPost.post("Meu primeiro post!", newPost.alreadyPosted);
// newPost.post("Meu primeiro post!", newPost.alreadyPosted);
// retorna que o usuario ja postou!
// ex real com decorator de propriedade
// capacidade max de caracteres no nome
function Max(limit) {
    return function (target, propertKey) {
        let value;
        const getter = function () {
            return value;
        };
        const setter = function (newVal) {
            if (newVal.length > limit) {
                console.log(`O valor deve ter no máximo 10 digitos`);
                return;
            }
            else {
                value = newVal;
            }
        };
        Object.defineProperty(target, propertKey, {
            get: getter,
            set: setter
        });
    };
}
class Admin {
    constructor(username) {
        this.username = username;
    }
}
__decorate([
    Max(10)
], Admin.prototype, "username", void 0);
const newUser = new Admin("Gabriel de Conto");
const anotherUser = new Admin("Gabriel");
console.log(anotherUser);
