console.log("Closures");
/* What is the usefulness of Closure?
  1. We can keep the variables private without exposing them.
  2. We can stop variable pollution
  3. We can create a function factory.
  4. We can keep a variable alive b/w multiple calls.
*/
//Outer Inner
function outer() {
  let x = 10;

  return function inner() {
    console.log(x);
  };
}
const func = outer();
func(); //10

//count closure
function outerCount() {
  let count = 0;

  return function innerCount() {
    count++;
    console.log(count);
  }
}

const retCount = outerCount();

retCount(); //1
retCount(); //2
retCount(); //3

//Bank example
function createBankAccount(initialBalance) {
  let balance = initialBalance;

  return {
    deposit: (amount) => {
      balance = balance + amount;
      console.log("Deposited: ", amount, "Current Balance: ", balance);
    },

    withdraw: (amount) => {
      if (amount > balance) {
        console.warn("Insufficient Balance!!");
      } else {
        balance = balance - amount;
        console.log("Withdrawn: ", amount, "Current Balance: ", balance);
      }
    },

    checkBalance: () => console.log("Current Balance:", balance)
  };
}

const myAccount = createBankAccount(1000);
myAccount.checkBalance(); //Current Balance: 1000
myAccount.deposit(500);   //Deposited: 1000 Current Balance: 1500
myAccount.withdraw(1700); //insufficient balance!!
myAccount.withdraw(700);  //Withdrawn: 700 Current Balance: 800
myAccount.checkBalance(); //Current Balance: 800

//Closure in Event handler
function setupButton() {
  let clickCount = 0;

  document.getElementById("myButton").addEventListener("click", function () {
    clickCount++;
    console.log(`Button clicked ${clickCount} times`);
  });
}
setupButton();

//Task
function createMultiplier(multiplier) {
  return function (x) {
    console.log(x * multiplier);
  };
}
const double = createMultiplier(2);
const triple = createMultiplier(3);

double(5);//10
triple(5);//15
