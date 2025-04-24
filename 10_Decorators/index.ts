// 1 - exemplo decorator
function myDecorator() {
  console.log("Iniciando decorator");
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executando decorator");
    console.log(target);
    console.log(propertKey);
    console.log(descriptor);
  };
}

class myClass {
  @myDecorator()
  testing() {
    console.log("Terminando a execução do método");
  }
}
const myObj = new myClass();

myObj.testing();

// 2 - multiplos decorators
function a() {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executou a");
  };
}
function b() {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executou b");
  };
}
function c() {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    console.log("Executou c");
  };
}
class MultipleDecorators {
  @c()
  @b()
  @a()
  testing() {
    console.log("Terminando execução");
  }
}
const multiple = new MultipleDecorators();
multiple.testing();

// 3 - decorator de classe
function classDecorator(constructor: Function) {
  console.log(constructor);
  if (constructor.name === "User") {
    console.log("Criando Usuário");
  }
}

@classDecorator
class User {
  name;

  constructor(name: string) {
    this.name = name;
  }
}
const gabriel = new User("Gabriel");
console.log(gabriel);

// 4 - decorator de metodo
function enumerable(value: boolean) {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}
class Machine {
  name;

  constructor(name: string) {
    this.name = name;
  }
  @enumerable(false)
  showName() {
    console.log(this);
    return `O nome da máquina é: ${this.name}`;
  }
}
const trator = new Machine("Trator");
console.log(trator.showName());

// 5 - acessor decorator
function enumerable2(value: boolean) {
  return function (
    target: any,
    propertKey: string,
    descriptor: PropertyDescriptor
  ) {
    descriptor.enumerable = value;
  };
}

class Monster {
  name?;
  age?;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  @enumerable2(true)
  get showName() {
    return `O nome do monstro é: ${this.name}`;
  }

  @enumerable2(false)
  get showAge() {
    return `Idade do monstro é: ${this.age}`;
  }
}
const charmander = new Monster("Charmander", 17);
console.log(charmander);

// 6 - property decorators
function formatNumber() {
  return function (target: object, propertKey: string) {
    let value: string;

    const getter = function () {
      return value;
    };
    const setter = function (newVal: string) {
      value = newVal.padStart(5, "0");
    };

    Object.defineProperty(target, propertKey, {
      get: getter,
      set: setter,
    });
  };
}

class Id {
  @formatNumber()
  id;

  constructor(id: string) {
    this.id = id;
  }
}
const myId = new Id("12345");

console.log(myId);
console.log(myId.id);

// 7 - ex real com class decorator
function createdDate(created: Function) {
  created.prototype.createdAt = new Date();
}

@createdDate
class Book {
  id;
  createdAt?: Date;

  constructor(id: number) {
    this.id = id;
  }
  createdDate() {
    return `Este livro com o ID de ${this.id} foi criado em: ${this.createdAt}`;
  }
}
@createdDate
class Pen {
  id;
  createdAt?: Date;

  constructor(id: number) {
    this.id = id;
  }
  createdDate() {
    return `Esta com o ID de ${this.id} foi criada em: ${this.createdAt}`;
  }
}
const newBook = new Book(12);
const pen = new Pen(55);

console.log(newBook.createdDate());
console.log(pen.createdDate());

// 8 - ex real com decorator em metodos
function checkIfUserPosted() {
  return function (
    target: object,
    Key: string | symbol,
    descriptor: PropertyDescriptor
  ) {
    const childFunction = descriptor.value;
    // console.log(childFunction);
    descriptor.value = function (...args: any[]) {
      if (args[1] === true) {
        console.log("Usuário já postou!");
        return null;
      } else {
        return childFunction.apply(this, args);
      }
    };
    return descriptor;
  };
}

class Post {
  alreadyPosted = false;

  @checkIfUserPosted()
  post(content: string, alreadyPosted: boolean) {
    this.alreadyPosted = true;
    console.log(`Post do usuário: ${content}`);
  }
}
const newPost = new Post();

newPost.post("Meu primeiro post!", newPost.alreadyPosted);
// newPost.post("Meu primeiro post!", newPost.alreadyPosted);
// retorna que o usuario ja postou!

// ex real com decorator de propriedade
// capacidade max de caracteres no nome
function Max(limit: number) {
  return function (target: object, propertKey: string) {
    let value: string

    const getter = function(){
      return value
    }
    const setter = function(newVal: string){
      if(newVal.length > limit){
        console.log(`O valor deve ter no máximo 10 digitos`);
        return
      }else{
        value = newVal;
      }
    }

    Object.defineProperty(target, propertKey, {
      get: getter,
      set: setter
    })

  };
}

class Admin {
  @Max(10)
  username;

  constructor(username: string) {
    this.username = username;
  }
}
const newUser = new Admin("Gabriel de Conto")

const anotherUser = new Admin("Gabriel")
console.log(anotherUser);