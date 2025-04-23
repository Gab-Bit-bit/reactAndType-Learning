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

// 5 - metodos
class Dwarf{
  name

  constructor(name: string){
    this.name= name
  }

  greeting(){
    console.log("Hey stranger")
  }
}
const jimmy = new Dwarf("Jimmy")

console.log(jimmy.name);
jimmy.greeting()
console.log(jimmy);

// 6 - this
class MyTruck{
  model
  horsePower

  constructor(model: string, horsePower: number){
    this.model = model
    this.horsePower = horsePower
  }

  showDetails(){
    console.log(`Cminhão do modelo: ${this.model} com ${this.horsePower} cavalos de potência!`)
  }
}

const truck = new MyTruck("Volvo", 400);
const scania = new MyTruck("Scania", 350);

truck.showDetails();
scania.showDetails();

// 7 - getters
class Person{
  name
  surname

  constructor(name: string, surname: string){
    this.name = name
    this.surname = surname
  }

  get fullname(){
    return this.name + " " + this.surname
  }
}
const gabrielDeConto = new Person("Gabriel", "de Conto")
console.log(gabrielDeConto.fullname);

// 8 - setters
class Coords{
  x!: number
  y!: number

  set fillX(x: number){
    if(x === 0){
      return 
    }
    this.x = x
    console.log("X inserido com sucesso")
  }

  set fillY(y: number){
    if(y === 0){
      return
    }
    this.y = y
    console.log("Y inserido com sucesso")
  }

  get getCoords(){
    return `O valor de X: ${this.x} e de Y: ${this.y}`
  }
}
const coords = new Coords();

coords.fillX = 10;
coords.fillY = 10;
console.log(coords);

console.log(coords.getCoords);

// 9 - herança de interfaces
interface showTitle{
  itemTitle():string
}

class blogPost implements showTitle{
  title

  constructor(title: string){
    this.title = title
  }

  itemTitle(){
    return `O título do post é: ${this.title}`
  }
}

const myPost = new blogPost("Hello World");
console.log(myPost.itemTitle());

// 10 - override de metodos
class base{
  someMethod(){
    console.log("Alguma coisa")
  }
}
class Nova extends base{
  someMethod(){
      console.log("Alguma outra coisa")
  }
}
const myObject = new Nova()
myObject.someMethod()

// 11 - visibilidade
// Public
class C{
 public x = 10
}
class D extends C{

}
const cIntance  = new C();
console.log(cIntance.x);
const dInstance = new D()
console.log(dInstance.x);

// Potected
class E{
  protected x = 10

  protected protectedMethod(){
    return "Este método é protegido"
  }
}
class F extends E{
  showX(){
    return `X = ${this.x}`
  }
  showProtectedMethod(){
    return `${this.protectedMethod()}`
  }
}
const fInstance = new F();
// console.log(fInstance.x);
// console.log(fInstance.protectedMethod())
console.log(fInstance.showX());
console.log(fInstance.showProtectedMethod());

// Private
class PrivateClass{
  private name = "Gabriel"
  private privateMethod(){
    return `Metódo Privado`
  }
  showName(){
    return `O nome privado é: ${this.name}`
  }
  showPrivateMethod(){
    return `O método privado é: ${this.privateMethod()}`
  }
}
const pObj = new PrivateClass();
// console.log(pObj.name);
// console.log(pObj.privateMethod());
console.log(pObj.showName());
console.log(pObj.showPrivateMethod());

// 12 - static members
class StaticMembers{
  static prop = "Teste static"
  static staticMethod(){
    console.log("Este é um método estático")
  }
}
console.log(StaticMembers.prop);
StaticMembers.staticMethod();

// 13 - generic class
class Item<T, U>{
  first
  second

  constructor(first: T, second: U){
    this.first = first
    this.second = second
  }
  get showFirst(){
    return `O primeiro elemento é: ${this.first}`
  }
  get showSecond(){
    return `O segundo elemento é: ${this.second}`
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
console.log(secondItem.showSecond)

// 14 - parameters properties
class ParameterProperties{
  constructor(
      public name: string, 
      private qty: number,
      private price: number
  ){
    this.name = name
    this.qty = qty
    this.price = price
  }
  get showQty(){
    return `A quantidade é de: ${this.qty}`
  }
  get showPrice(){
    return `O preço é de: ${this.price}`
  }
}
const newShirt = new ParameterProperties("Camise", 7, 59.90);
console.log(newShirt);
console.log(newShirt.showQty);
console.log(newShirt.showPrice);

// 15 - class expressions
const myClass = class<T>{
  name

  constructor(name: T){
    this.name = name
  }
}
const pessoa = new myClass("Gabriel");
console.log(pessoa);

// 16 - abstract class
abstract class AbstractClass{
  abstract showName():void
}
class AbstractExemple extends AbstractClass{
  name: string

  constructor(name:string){
    super()
    this.name = name
  }
  showName(){
    return `O nome é: ${this.name}`       
  }
}
const newAbstarctObject = new AbstractExemple("Josias");
console.log(newAbstarctObject.showName());

// 17 - ralação entre classes
class Dog{
  name!: string
}
class Cat{
  name!: string
}
const doguinho: Dog = new Cat()
console.log(doguinho);