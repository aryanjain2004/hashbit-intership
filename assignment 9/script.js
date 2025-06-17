// 1. Function showing let, const, and var
function variableScopeDemo() {
  var a = "This is var";     
  let b = "This is let";     
  const c = "This is const"; 

  console.log(a);
  console.log(b);
  console.log(c);
}

variableScopeDemo();


// 2. Create an array of fruits and get the second fruit
let fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];

function getSecondFruit() {
  return fruits[1]; // index starts from 0
}

console.log("Second fruit is:", getSecondFruit());


// 3. Function to add an item using push and remove using pop
function modifyArray(arr) {
  arr.push("NewItem"); // Add at the end
  arr.pop();           // Remove last item
  return arr;          // Return final array
}

console.log("Modified array:", modifyArray([1, 2, 3]));


// 4. Square each number in an array using map
let numbers = [1, 2, 3, 4, 5];

function squareArray(arr) {
  return arr.map(function(num) {
    return num * num;
  });
}

console.log("Squared numbers:", squareArray(numbers));


// 5. Filter out even numbers and keep odd numbers
function getOddNumbers(arr) {
  return arr.filter(function(num) {
    return num % 2 !== 0;
  });
}

console.log("Odd numbers:", getOddNumbers([1, 2, 3, 4, 5, 6]));


// 6. Create object and log greeting
let person = {
  name: "Rahul",
  age: 25,
  occupation: "Engineer"
};

function greetPerson(p) {
  console.log("Hello, my name is " + p.name + ". I am " + p.age + " years old and I work as a " + p.occupation + ".");
}

greetPerson(person);


// 7. Calculate area of a rectangle
function getRectangleArea(rect) {
  return rect.width * rect.height;
}

console.log("Area of rectangle:", getRectangleArea({ width: 10, height: 5 }));


// 8. Get all keys from an object
function getObjectKeys(obj) {
  return Object.keys(obj);
}

console.log("Object keys:", getObjectKeys({ name: "sakshi", age: 22, city: "Jodhpur" }));


// 9. Merge two objects using Object.assign
function mergeTwoObjects(obj1, obj2) {
  return Object.assign({}, obj1, obj2);
}

let objA = { a: 1, b: 2 };
let objB = { c: 3, d: 4 };

console.log("Merged object:", mergeTwoObjects(objA, objB));


// 10. Calculate sum of numbers using reduce
function sumOfArray(arr) {
  return arr.reduce(function(total, num) {
    return total + num;
  }, 0); // 0 is the initial value of total
}

console.log("Sum of array:", sumOfArray([10, 20, 30, 40]));



