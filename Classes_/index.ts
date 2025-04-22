// 1 - campos em classes
class User{
  name!: string
  age!: number
}
const gabriel = new User();
console.log(gabriel);

gabriel.name = "Gabriel"
gabriel.age = 20;

// 2 - constructor
class NewUser{
  name
  age
  job

  constructor(name: string, age: number, job: string){
    this.name = name
    this.age = age
    this.job = job
  }
}
const gab = new NewUser("Gabriel", 20, "Programador")
console.log(gab);

// const joao = new NewUser(12, "Jogador", "Joao");

// 3 - campo readonly
class Car{
  name 
  readonly wheels = 4

  constructor(name: string){
    this.name = name
  }
}
const fusca = new Car("Fusca")
console.log(fusca);
console.log(fusca.wheels);

fusca.name = "Fusca turbo";
console.log(fusca.name);

// 4 - herança e super
class Machine {
  name 

  constructor(name:string){
    this.name = name
  }
}

class KillerMachine extends Machine{
  guns

  constructor(name: string, guns: number){
    super(name)
    this.guns = guns
  }
}
const trator = new Machine("Trator");
const destroyer = new KillerMachine("Destroyer", 4);

console.log(trator);
console.log(destroyer);