<<<<<<< HEAD
function testScope() {
    var a = "This is var"; 
    let b = "This is let"; 
    const c = "This is const";

    if (true) {
        var a = "Var changed"; 
        let b = "Let changed"; 
        const c = "Const changed"; 
        console.log("Inside block:", a, b, c);
    }

    console.log("Outside block:", a, b, c);
}
testScope();


const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

function getSecondFruit() {
    return fruits[1]; // Returns "Banana"
}
console.log(getSecondFruit());

function modifyArray(arr) {
    arr.push("New Element"); // Adds a new element at the end
    arr.pop(); // Removes the last element
    return arr;
}
console.log(modifyArray([1, 2, 3])); // Output: [1, 2, 3]


const numbers = [1, 2, 3, 4, 5];

function squareNumbers(arr) {
    return arr.map(num => num * num);
}
console.log(squareNumbers(numbers)); 

function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}
console.log(filterOddNumbers([1, 2, 3, 4, 5, 6]));

const person = {
    name: "Alice",
    age: 30,
    occupation: "Engineer"
};

function greetPerson(obj) {
    console.log(`Hello, my name is ${obj.name}, I am ${obj.age} years old and work as a ${obj.occupation}.`);
}
greetPerson(person);

function calculateArea(rect) {
    return rect.width * rect.height;
}
console.log(calculateArea({ width: 5, height: 10 })); // Output: 50

const sampleObject = { name: "Alice", age: 30, city: "New York" };

function getObjectKeys(obj) {
    return Object.keys(obj);
}
console.log(getObjectKeys(sampleObject)); 

function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}
console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));


const numArray = [1, 2, 3, 4, 5];

function sumNumbers(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumNumbers(numArray));
=======
function testScope() {
    var a = "This is var"; 
    let b = "This is let"; 
    const c = "This is const";

    if (true) {
        var a = "Var changed"; 
        let b = "Let changed"; 
        const c = "Const changed"; 
        console.log("Inside block:", a, b, c);
    }

    console.log("Outside block:", a, b, c);
}
testScope();


const fruits = ["Apple", "Banana", "Cherry", "Date", "Elderberry"];

function getSecondFruit() {
    return fruits[1]; // Returns "Banana"
}
console.log(getSecondFruit());

function modifyArray(arr) {
    arr.push("New Element"); // Adds a new element at the end
    arr.pop(); // Removes the last element
    return arr;
}
console.log(modifyArray([1, 2, 3])); // Output: [1, 2, 3]


const numbers = [1, 2, 3, 4, 5];

function squareNumbers(arr) {
    return arr.map(num => num * num);
}
console.log(squareNumbers(numbers)); 

function filterOddNumbers(arr) {
    return arr.filter(num => num % 2 !== 0);
}
console.log(filterOddNumbers([1, 2, 3, 4, 5, 6]));

const person = {
    name: "Alice",
    age: 30,
    occupation: "Engineer"
};

function greetPerson(obj) {
    console.log(`Hello, my name is ${obj.name}, I am ${obj.age} years old and work as a ${obj.occupation}.`);
}
greetPerson(person);

function calculateArea(rect) {
    return rect.width * rect.height;
}
console.log(calculateArea({ width: 5, height: 10 })); // Output: 50

const sampleObject = { name: "Alice", age: 30, city: "New York" };

function getObjectKeys(obj) {
    return Object.keys(obj);
}
console.log(getObjectKeys(sampleObject)); 

function mergeObjects(obj1, obj2) {
    return Object.assign({}, obj1, obj2);
}
console.log(mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }));


const numArray = [1, 2, 3, 4, 5];

function sumNumbers(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}
console.log(sumNumbers(numArray));
>>>>>>> caee9e8 (Initial commit)
