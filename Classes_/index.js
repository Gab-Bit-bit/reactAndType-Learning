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
