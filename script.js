document.writeln('Watch console :)')

console.log('Hello, world!');

console.log(1 == 1.0); // true
console.log(1 === 1.0); // true
console.log(100 == 1e2); // true

console.log(NaN == NaN); // false
console.log(NaN === NaN); // false
console.log(isNaN(NaN)); // true
console.log(1/0); // Infinity

console.log(Math.floor(123.45) == 123); // true
console.log(parseInt(123.45) == 123); // true
console.log('ala ma kota'.toUpperCase()); // ALA MA KOTA

console.log('===================================================')

/* A block is a set of statements wrapped in curly braces. Unlike many other languages,
 * blocks in JavaScript do not create a new scope, so variables should be defined at the
 * top of the function, not in blocks. */

/* Falsy values: false, null, undefined, '', 0, NaN */

/* The other form (called for in) enumerates the property names (or keys) of an object.
 * On each iteration, another property name string from the object is assigned to the
 * variable.
 *
 * It is usually necessary to test object.hasOwnProperty(variable) to determine whether
 * the property name is truly a member of the object or was found instead on the prototype
 * chain.
 *
 * for (myvar in obj) {
 *   if (obj.hasOwnProperty(myvar)) {
 *   ...
 *   }
 * } */

console.log(true ? 'ok' : 'err'); // ok

/* The simple types of JavaScript are numbers, strings, booleans (true and false), null,
 * and undefined. All other values are objects. Numbers, strings, and booleans are
 * object-like in that they have methods, but they are immutable. Objects in JavaScript
 * are mutable keyed collections. In JavaScript, arrays are objects, functions are objects,
 * regular expressions are objects, and, of course, objects are objects.
 * 
 * An object is a container of properties, where a property has a name and a value. A
property name can be any string, including the empty string. A property value can be
any JavaScript value except for undefined.

Objects in JavaScript are class-free. There is no constraint on the names of new properties
or on the values of properties. Objects are useful for collecting and organizing
data. Objects can contain other objects, so they can easily represent tree or graph
structures.

JavaScript includes a prototype linkage feature that allows one object to inherit the
properties of another. When used well, this can reduce object initialization time and
memory consumption. */

var person = {
  'name': 'Jan',
  'surname': 'Nowak',
}

console.log(person.name + ' ' + person.surname); // Jan Nowak

var address = {
  street: 'Jasna 10',
  city: 'Gdynia',
}
address.full = address.street + ', ' + address.city
console.log(address.full); // Jasna 10, Gdynia
address['formal'] = address.city + ': ' + address.street
console.log(address.formal); // Gdynia: Jasna 10
console.log(address.test); // undefined
console.log(address.test || 'test'); // test

var person = {
  name: 'Jan',
  surname: 'Nowak',
  company: {
    name: 'Firma'
  }
}

console.log(person.company.name) // Firma
console.log(person.car) // undefined
// console.log(person.car.name) // raise TypeError
console.log(person.car && person.car.name) // undefined

var car = {
  brand: 'Opel',
  name: 'Astra'
}

car.brand = 'Volvo'
car.name = 'C 90'
car.year = 2011

console.log(car.brand) // Volvo
console.log(car.year) // 2011
console.log(typeof(car.year)) // number
console.log(typeof(car.name)) // string
console.log(car.hasOwnProperty('name')) // true
console.log(car.hasOwnProperty('test')) // false

// Objects are passed around by reference. They are never copied

var newCar = car
newCar.brand = 'Nissan'
console.log(newCar.brand) // Nissan
console.log(car.brand) // Nissan

console.log('===================================================')

/* Every object is linked to a prototype object from which it can inherit properties. All
 * objects created from object literals are linked to Object.prototype, an object that
 * comes standard with JavaScript. */

/* The prototype link has no effect on updating. When we make changes to an object,
 * the object’s prototype is not touched */

/* The prototype link is used only in retrieval. If we try to retrieve a property value from
 * an object, and if the object lacks the property name, then JavaScript attempts to
 * retrieve the property value from the prototype object. And if that object is lacking the
 * property, then it goes to its prototype, and so on until the process finally bottoms out
 * with Object.prototype. If the desired property exists nowhere in the prototype chain,
 * then the result is the undefined value. This is called delegation.
 * The prototype relationship is a dynamic relationship. If we add a new property to a
 * prototype, that property will immediately be visible in all of the objects that are
 * based on that prototype. */

/* The for in statement can loop over all of the property names in an object. The enumeration
 * will include all of the properties—including functions and prototype properties
 * that you might not be interested in—so it is necessary to filter out the values
 * you don’t want. The most common filters are the hasOwnProperty method and using
 * typeof to exclude functions */

for (name in car) {
  console.log(name + ': ' + car[name])
}

delete car.name
console.log(car.name) // undefined

console.log('===================================================')

/* A function encloses a set of statements. Functions are the fundamental modular unit
 * of JavaScript. They are used for code reuse, information hiding, and composition.
 * Functions are used to specify the behavior of objects. Generally, the craft of programming
 * is the factoring of a set of requirements into a set of functions and data
 * structures. */

/* Functions in JavaScript are objects. Objects are collections of name/value pairs having
 * a hidden link to a prototype object. Objects produced from object literals are
 * linked to Object.prototype. Function objects are linked to Function.prototype
 * (which is itself linked to Object.prototype). Every function is also created with two
 * additional hidden properties: the function’s context and the code that implements
 * the function’s behavior.
 * Every function object is also created with a prototype property. Its value is an object
 * with a constructor property whose value is the function. This is distinct from the
 * hidden link to Function.prototype. The meaning of this convoluted construction will
 * be revealed in the next chapter.
 * Since functions are objects, they can be used like any other value. Functions can be
 * stored in variables, objects, and arrays. Functions can be passed as arguments to
 * functions, and functions can be returned from functions. Also, since functions are
 * objects, functions can have methods.
 * The thing that is special about functions is that they can be invoked. */

// anonymous function
var f = function(text) {
  return text.toUpperCase()
}

console.log(f('ula ma psa')) // ULA MA PSA

function l(text) {
  return text.toLowerCase()
}

console.log(l('ULA ma PSA')) // ula ma psa

console.log('===================================================')

/* A function literal can appear anywhere that an expression can appear. Functions can
 * be defined inside of other functions. An inner function of course has access to its
 * parameters and variables. An inner function also enjoys access to the parameters and
 * variables of the functions it is nested within. The function object created by a function
 * literal contains a link to that outer context. This is called closure. This is the
 * source of enormous expressive power. */

/* Invoking a function suspends the execution of the current function, passing control
 * and parameters to the new function. In addition to the declared parameters, every
 * function receives two additional parameters: this and arguments. The this parameter
 * is very important in object oriented programming, and its value is determined by
 * the invocation pattern. There are four patterns of invocation in JavaScript: the
 * method invocation pattern, the function invocation pattern, the constructor invocation
 * pattern, and the apply invocation pattern. The patterns differ in how the bonus
 * parameter this is initialized. */

var f = function(a, b, c) { return arguments }
console.log(f(1, 2, 3)) // [object Arguments]

/* There is no runtime
 * error when the number of arguments and the number of parameters do not
 * match. If there are too many argument values, the extra argument values will be
 * ignored. If there are too few argument values, the undefined value will be substituted
 * for the missing values. There is no type checking on the argument values: any type of
 * value can be passed to any parameter. */

// -----------------------------------------
// The Method Invocation Pattern

var person = {
  name: 'Jan',
  surname: 'Nowak',
  change: function() { this.name = 'Anna' },
  toS: function() { return this.name + ' ' + this.surname }
}
console.log(person.name) // Jan
person.change()
console.log(person.name) // Anna
console.log(person.toS()) // Anna Nowak

console.log('===================================================')

// -----------------------------------------
// The Function Invocation Pattern: function is not the property of object
// this is bound to the global object!

// -----------------------------------------
// The Constructor Invocation Pattern

/* JavaScript is a prototypal inheritance language. That means that objects can inherit
 * properties directly from other objects. The language is class-free. */

// Create a constructor function called Quo.
// It makes an object with a status property.
var Quo = function (string) {
  this.status = string
}
// Give all instances of Quo a public method called get_status.
Quo.prototype.get_status = function ( ) {
  return this.status
}
// Make an instance of Quo.
var myQuo = new Quo("confused");
console.log(myQuo.get_status( )); // confused

/* Use of this style of constructor functions is not recommended. We will see
 * better alternatives in the next chapter. */

console.log('===================================================')

// -----------------------------------------
// The Apply Invocation Pattern

/* Because JavaScript is a functional object-oriented language, functions
 * can have methods. */

var numbers = [10, 20]
var add = function(a, b) { return a + b }
var sum = add.apply(null, numbers)
console.log(sum) // 30

console.log()

console.log('===================================================')

// prototype

var Machine = function () {
  this.type = 'Machine'
}

var Car = function() {
  this.brand = 'Opel';
}
opel = new Car()
console.log(opel.brand) // Opel
console.log(opel.type) // undefined
Car.prototype = new Machine()
opel = new Car()
console.log(opel.brand) // Opel
console.log(opel.type) // Machine

var Computer = function() {
  this.processor = 'Intel';
}
computer = new Computer()
console.log(computer.processor) // Intel
console.log(computer.brand) // undefined
console.log(computer.type) // undefined
Computer.prototype = new Machine()
computer = new Computer()
console.log(computer.processor) // Intel
console.log(computer.brand) // undefined
console.log(computer.type) // Machine
console.log(computer)

console.log('===================================================')

/* A function always returns a value. If the return value is not specified, then undefined
 * is returned.
 *
 * If the function was invoked with the new prefix and the return value is not an object,
 * then this (the new object) is returned instead. */

// Exceptions

function go() {
  throw {
    name: 'MyError',
    message: 'Some message'
  }
}
// go() // throws exception

function ok() {
  try {
    go()
  } catch (e) {
    console.log(e)
  }
} // catch exception
ok()

console.log('===================================================')

String.prototype.sayHello = function() {
  return 'Hello ' + this
}
var name = 'Ala'
console.log(name.sayHello()); // Hello Ala

String.prototype.trim = function() {
  return this.replace(/^\s+|\s+$/g, '')
}
var input = 'Ala      '
console.log(input.trim() + '!') // Ala!


/* In many modern languages, it is recommended that variables be declared as late as
 * possible, at the first point of use. That turns out to be bad advice for JavaScript
 * because it lacks block scope. So instead, it is best to declare all of the variables used
 * in a function at the top of the function body. */

/* The good news about scope is that inner functions get access to the parameters and
 * variables of the functions they are defined within (with the exception of this and
 * arguments). This is a very good thing. */

/* We can use functions and closure to make modules. A module is a function or object
 * that presents an interface but that hides its state and implementation. By using functions
 * to produce modules, we can almost completely eliminate our use of global variables,
 * thereby mitigating one of JavaScript’s worst features. */

/* Cascade:
 *
 * getElement('myBoxDiv')
 * .move(350, 150)
 * .width(100)
 * .height(100)
 * .color('red') */


// =============================================

// 3 lines required to make harry_potter
var harry_potter = new Object();
harry_potter.pages = 350;
harry_potter.author = "J.K. Rowling";

// A custom constructor for book
function Book (pages, author) {
    this.pages = pages;
    this.author = author;
}

// Use our new constructor to make the_hobbit in one line
var the_hobbit = new Book(320, 'J.R.R. Tolkien')

// =============================================

function Circle (radius) {
    this.radius = radius;
    this.area = function () {
        return Math.PI * this.radius * this.radius;
        
    };
    // define a perimeter method here
    this.perimeter = function() {
        return 2 * Math.PI * this.radius;
    }
};

// =============================================

function Dog (breed) {
  this.breed = breed;
};

// here we make buddy and teach him how to bark
var buddy = new Dog("golden Retriever");
Dog.prototype.bark = function() {
  console.log("Woof");
};
buddy.bark();

// here we make snoopy
var snoopy = new Dog("Beagle");
/// this time it works!
snoopy.bark();

// =============================================

// the original Animal class and sayName method
function Animal(name, numLegs) {
    this.name = name;
    this.numLegs = numLegs;
}
Animal.prototype.sayName = function() {
    console.log("Hi my name is " + this.name);
};

// define a Penguin class
function Penguin(name) {
    this.name = name
    this.numLegs = 2
}

// set its prototype to be a new instance of Animal
Penguin.prototype = new Animal()

// =============================================

function Person(first,last,age) {
   this.firstname = first; // public
   this.lastname = last;   // public
   this.age = age;         // public
   var bankBalance = 7500; // private
}

// =============================================
// how to access private variables -- through method

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   this.getBalance = function() {
      // your code should return the bankBalance
      return bankBalance
   };
}

var john = new Person('John','Smith',30);
console.log(john.bankBalance); // undefined

// create a new variable myBalance that calls getBalance()
var myBalance = john.getBalance()
console.log(myBalance) // 7500

// =============================================
// how to access private methods -- through public method

function Person(first,last,age) {
   this.firstname = first;
   this.lastname = last;
   this.age = age;
   var bankBalance = 7500;
  
   var returnBalance = function() {
      return bankBalance;
   };
       
   // create the new function here
   this.askTeller = function() {
       return returnBalance;
   }
   
}

var john = new Person('John','Smith',30);
console.log(john.returnBalance); // undefined
var myBalanceMethod = john.askTeller();
var myBalance = myBalanceMethod();
console.log(myBalance); // 7500

// =============================================
// Building a Cash Register

function StaffMember(name,discountPercent){
    this.name = name;
    this.discountPercent = discountPercent;
}

var sally = new StaffMember("Sally",5);
var bob = new StaffMember("Bob",10);

// Create yourself again as 'me' with a staff discount of 20%
var me = new StaffMember("Peter",20);

var cashRegister = {
    total:0,
    lastTransactionAmount: 0,
    add: function(itemCost){
        this.total += (itemCost || 0);
        this.lastTransactionAmount = itemCost;
    },
    scan: function(item,quantity){
        switch (item){
        case "eggs": this.add(0.98 * quantity); break;
        case "milk": this.add(1.23 * quantity); break;
        case "magazine": this.add(4.99 * quantity); break;
        case "chocolate": this.add(0.45 * quantity); break;
        }
        return true;
    },
    voidLastTransaction : function(){
        this.total -= this.lastTransactionAmount;
        this.lastTransactionAmount = 0;
    },
    // Create a new method applyStaffDiscount here
    applyStaffDiscount: function (employee) {
        this.total -= this.total * employee.discountPercent / 100;
    }
    
    
};

cashRegister.scan('eggs',1);
cashRegister.scan('milk',1);
cashRegister.scan('magazine',3);
// Apply your staff discount by passing the 'me' object 
// to applyStaffDiscount
cashRegister.applyStaffDiscount(me)


// Show the total bill
console.log('Your bill is '+cashRegister.total.toFixed(2));

// =============================================
// http://www.codecademy.com/glossary/javascript
