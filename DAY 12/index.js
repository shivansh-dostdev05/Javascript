let user = {
    name: "Shivansh",
    age: 20,
    "is admin": true
};

console.log(user.name); // Shivansh
console.log(user.age); // 20

user.isSeniorCitizen = false;
user["movie lover"] = false;

console.log(user);

console.log(user["is admin"]);

user.age = 40;
user["movie lover"] = true;

//delete user["movie lover"];
// delete user.age;
console.log(user)

const someKey = "age";

console.log(user[someKey]); // 40

/*let car = prompt("Which is your fav car?");

let favCars = {
    [car]: 5
}

console.log(favCars);*/

// Cosntructor Function
function Car(name, model) {
    this.name = name;
    this.model = model
}

const bmwCar = new Car("BMW", "X1");
const audiCar = new Car("Audi", "A8");
console.log(bmwCar)
console.log(audiCar)

console.log(bmwCar instanceof Car);

const person = new Object()
person.name = "Shivansh";
person.age = 20;
console.log(person);


// factory
function createUser(name, age) {
    return {
       name, //if key name and parameters are same, we can use shorthand which is same for both
       age,
       greet() {
        console.log(this.name)
       }
    }
}

const user1 = createUser("shivansh", 20)
console.log(user1)
user1.name;
user1.age;
user1.greet();
const user2 = createUser("dostdev", 21)
console.log(user2)

let profile = {
    name: "Shivansh",
    company: "Uix Labs",
    message: function() {
        console.log(`${this.name} works at ${this.company}`)
    },
    address: {
        city: "Delhi",
        pin: 110000,
        state: "Delhi",
        country: "India",
        greeting: function() {
            console.log("Welcome to India")
        }
  },

}
// for ... in

for (let key in profile) {
    console.log(key)
    console.log(profile[key]);
}

console.log(Object.keys(profile));

console.log(profile.salary); // undefined

console.log("salary" in profile);

if (!profile.salary) {
    console.log("The salary property doesn't exist");
}

console.log(profile.address.country); // India
profile.address.greeting();
console.log(profile.name);// "Shivansh"
console.log(profile.company); // "UIX Labs"

profile.message();

// Object Reference

let fruit = { name: "mango"}; // XA01
const oneMoreFruit = { name: "mango"}; // YB02

console.log(fruit == oneMoreFruit); // false
console.log(fruit === oneMoreFruit); // false

fruit = oneMoreFruit;// pointing to same memory location


console.log(fruit == oneMoreFruit); // true
console.log(fruit === oneMoreFruit); // true

// Static Methods

const target = {p:1, a:2};
const source = {a:3, b:5};// here is a is getting overridden

const returnedObj = Object.assign(target, source);
console.log(returnedObj); //if there is similar key target and source, it will get overridden

const obj = {name: "javascript"};
const obj2 = Object.assign({}, obj);
console.log(obj2)
console.log(obj === obj2) //false

const obj3 = {
    a: 1,
    b: {c: 2}
}
const obj4 = Object.assign({}, obj3);
console.log(obj4); // {a: 1, b: {c: 2}}
/* obj4.b.c = 3;
 console.log(obj4.b.c) // 3
 console.log(obj3.b.c) // expected 2 but got 3
 This is because whenever a nested object is dealt, it creates a copy of reference instead of copying the value
 This is known as shallow copy
 */

/*  obj4.a = 100;
 console.log(obj4.a); // 100
 console.log(obj3.a); // 1
 It will be creating a new reference for obj 4 when obj 3 is assigned to obj 4.
*/

//for deep cloning always use structuredClone
const obj5 = structuredClone(obj3);

obj5.a = 300;
obj5.b.c = 30;

console.log(obj5.a); // 300
console.log(obj3.a); // 1

console.log(obj5.b.c) // 30
console.log(obj3.b.c) // 2



const myObj = {
    a: "shivansh",
    b: 20
};

const myArr = Object.entries(myObj); //object to array
console.log(myArr)

const entries = new Map([
    ["foo", "bar"],
    ["baz", 42],
]);
const objEntries = Object.fromEntries(entries)  //array to object
console.log(objEntries);


const emp = {
    sal: 100
}

Object.freeze(emp);

emp.sal = 200;
emp.name = "Alex";
delete emp.sal;
console.log(emp)
console.log(Object.isFrozen(emp));

// we can't modify the value

const dept = {
    name: "finance"
}

Object.seal(dept);

dept.address = "Delhi"
delete dept.name;

dept.name = "HR"
console.log(dept) //HR   //here we can modify value

console.log(Object.hasOwn(dept, "address")) //false
