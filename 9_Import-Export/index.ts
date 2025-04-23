// 1 - importação de arquivos
import importGreet from "./greet";
importGreet();

// 2 - import de variavel
import { x } from "./variable";
console.log(x);

// 3 - importação multipla
import { a, b, myFunction } from "./multiple";
myFunction();
console.log(a);
console.log(b);

//  4 - elias 
import { someName as name } from "./changename"; //mudou o nome utilizando o "as"
console.log(name)

// 5 - import all
import * as myNumber from "./numbers";
console.log(myNumber);

const nx = myNumber.n1
console.log(nx);

console.log(myNumber.showNumber());

// 6 - importando tipos
import { Human } from "./mytype";

class User implements Human{
  name
  age
  constructor(name: string, age: number){
    this.name = name
    this.age = age
  }
}
const gabriel = new User("Gabriel", 20);
console.log(gabriel);
console.log(gabriel.name);
console.log(gabriel.age);