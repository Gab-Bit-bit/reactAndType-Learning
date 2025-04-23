// 1 - type guard
function sum(a: number | string, b: number | string){
  if(typeof a === "string" && typeof b === "string"){
    return (parseFloat(a) + parseFloat(b));
  }else if (typeof a === "number" && typeof b === "number"){
    return a + b;
  }else{
      return "Impossível realizar a soma!"
    }
}
console.log(sum("4", "59"));
console.log(sum(4, 5))
console.log(sum("4", 5))

// 2 - checando se valor existe
function operations(arr:  number[], operation?: string| undefined){
  if(operation){

    if(operation === "sum"){
      const sum = arr.reduce((i, total) => i + total);
      return sum
    } else if(operation === "multiply"){
      const multiply = arr.reduce((i, total) => i * total)
      return multiply
    }

  }else{
    return "Por favor, defina uma operação!"
  }
}
console.log(operations([1, 5, 6], "sum"));
console.log(operations([3, 3, 4], "multiply"));
console.log(operations([1, 2, 3]));

// 3 - instance of
class User{
  name

  constructor(name: string){
    this.name = name
  }
}

class SuperUser extends User { // extends herda os metodos de uma classe para outra
  constructor(name: string){
    super(name)
  }
}

const jhon = new User("Jhon")
const paul = new SuperUser("Paul")

console.log(jhon)
console.log(paul)

function userGreeting(user: object){
  if(user instanceof SuperUser){
    return `Olá ${user.name}, gostaria de checar os dados do sistema?`
  }else if(user instanceof User){
    return `Olá ${user.name}`
  }
}

console.log(userGreeting(paul));
console.log(userGreeting(jhon));


// 4 - operador in
class Dog{
  name
  breed

  constructor(name: string, breed?: string){
      this.name = name
      if(breed){
        this.breed = breed
      }
  }
}
const turca = new Dog("Turca");
const bob = new Dog("Bob", "Pastor Almeão");

function showDogDetails(dog: Dog){
  if("breed" in dog){
    return `O cachorro é da raça ${dog.breed}`
  } else{
    return `O cachorro é SRD`
  }
}

console.log(showDogDetails(bob));
console.log(showDogDetails(turca));


class Person{
  name
  lastName

  constructor(name: string, lastName?: string){
    this.name = name;
    if(lastName){
      this.lastName = lastName
    }
  }
}

const p1 = new Person ("Gabriel");
const p2 = new Person("Cassiana", "de Conto");

function showPersonDetails(person: Person){
  if("lastName" in person){
    return `Olá ${person.name} ${person.lastName}, tudo bem? Gostaria de acessar os dados no sistema?`
  } else{
    return `Usuário não permitido no sistema...`
  }
}

console.log(showPersonDetails(p1));
console.log(showPersonDetails(p2));

// DESAFIO
type Review = number | boolean

function showUserReview(review: Review){
  if(!review){
    return "Você não avaliou o produto"
  }
  return `A nota que você deu foi: ${review}`
}

console.log(showUserReview(false));
console.log(showUserReview(5));
console.log(showUserReview(2));

