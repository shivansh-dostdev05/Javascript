//this at global level gives window object

/*  Implicit Binding
When we invoke a  method on a object, the context of 'this' is bound to
the object on which we have invoked the method
*/
const Employee = {
  id: "ABC123",
  firstName: "Dost",
  lastName: "Dev",

  returnThis: function () {
    return this;
  },

  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  }

}
console.log("Employee Id", Employee.id);
//ABC123

//Implicit Binding
console.log("this inside the object", Employee.returnThis());
console.log(Employee.getFullName());

const tom = {
  name: "Tom",
  age: 5
}
function greetMe(obj) {
  obj.logMessage = function () {
    console.log(`${this.name} is ${this.age} years old. `);
  }
}

greetMe(tom);
tom.logMessage();


//this inside a function
function sayName() {
  console.log(this);
}

sayName();
//window

function outer(a) {
  console.log(this);

  return function inner(b) {
    console.log(this);
  }
}
const outerResult = outer(5);
//window
console.log(outerResult(6));
//window
//this points to window object in nested function also but in strict mode, to avoid confusion, it returns undefined


//this inside arrow function
//in arrow function, this depends on the lexical environment and surrounding(parent scope) where 'this' is present
const getFood = () => this;
console.log(getFood());

const food = {
  name: "mango",
  color: "yellow",

  //getDesc: () => `${ this.name } is ${ this.color }` //undefined
  /* getDesc: function(){
  return `${this.name} is ${this.color}`
  } */
  getDesc: function () {
    return () => `${this.name} is ${this.color}`;
  }
}
const descFunc = food.getDesc();
console.log(descFunc());


/* Explicit Binding
Binding of context of this to something unrelated
can be achieved using call, apply or bind method
*/


function greeting() {
  console.log(`Hi, ${this.name} lives in ${this.address}`);
}
const user = {
  name: "shivansh",
  address: "Delhi"
}

//call method
greeting.call(user);

const likes = function (hobby1, hobby2) {
  console.log(this.name + ' likes ' + hobby1 + ', ' + hobby2);
}

const person = {
  name: "Shivansh"
};


likes.call(person, "Coding", "Running");
const getHobbies = ["Solving", "Learning"];
//apply method: can pass the arguments in an array
likes.apply(person, getHobbies);

//bind method: we create a new function and then we can execute that in certain point of time
const newFn = likes.bind(person, "Coding", "Running");
newFn();

//new keyword

const Car = function (name, model) {
  this.name = name;
  this.model = model;
  this.log = function () {
    console.log(this.name + ' is made in ' + this.model);
  }
};

const audiCar = new Car("Audi", "2007");
const bmwCar = new Car("BMW", "2001");

audiCar.log();
bmwCar.log();
