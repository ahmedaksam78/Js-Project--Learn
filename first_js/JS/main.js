// output screen
// window.alert("Hello To Sampa Furniture Store");

// to write an element from java script file
// document.write("<h1>Hello To Sampa Furniture Store </h1>")

// console

console.log(
  " %chello to %clog message",
  "color:red;font-size:20px;",
  "color:blue ;font-size:20px;"
);
console.error("hello to error message");
console.table(["ahmed", "samy", "rahim"]);

// ES6 (Eqma Script)
var myName = "ahmed aksam";
console.log("hello " + myName);
// es6
console.log(`hello ${myName}`);

// typeof
console.log(typeof "ahmed");
console.log(typeof 34);
console.log(typeof 34.4);
console.log(typeof [103.2, 43]);
console.log(typeof ["aghd", "fr4fd"]);
console.log(typeof { name: "ahmed", age: 24, country: "cairo" });
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);

/* variables    */
//var
var userName = "samy",
  age = 23;
console.log(userName);
console.log(age);
// btn-saved.innerHTML = "Save";

//let

let cartName = "Cart";
console.log(`${cartName} "" '' \\ ${myName}
  ${userName}`);

let markUp = `
  <div class="header-contianer">
  <input class="inp-search" type="search" placeholder="Search..." name="search">
  <button class="btn-search" type="submit"> Search  <i class="fa fa-search"></i></button>
  <button class="btn-signin">Sign In</button>
  <button class="btn-card">
      ${cartName}  
      <img src="/Svg/icon-card.svg" alt="">
      <span class="notification-indicator-number">1</span>
  </button>
  
  
  </div>
  `;

// numbers

console.log(Number("100"));
//////////////////////////////////
let de = "-100";
let e = "20";
let f = 30;
let g = true;
console.log(-de * +e);
console.log(-de + ++e * ++g + ++f);
///////////////
console.log(1000000);
console.log(1_000_000);
console.log(1e6);
console.log(10 ** 6);
console.log(1000000.0);
console.log(1000000.1);
///////////////////
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE - 33333333);
///////////////
//methods
//to string()
console.log((100).toString());
console.log((100).toString());
//to fixed()
console.log(+(100.5555555555555).toFixed(3));
//to ()
console.log(parseInt("100.5555555555555"));
console.log(parseFloat("100.55555555"));
console.log(Number.isInteger("100.55555555"));
console.log(Number.isInteger(100.55555555));
console.log(Number.isInteger(34));
///////////////////////////////
// Math objects
console.log(Math.round(99.3));
console.log(Math.ceil(99.3));
console.log(Math.floor(99.7));
console.log(Math.min(99.7, 156.56, 1234));
console.log(Math.max(99.7, 156.56, 1234));
console.log(Math.pow(99.7, 2));
console.log(Math.random());
console.log(Math.trunc(56.6789));
//////////////
let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(Math.trunc(Math.min(a, b, c, d)));

// Use Variables a + d One Time To Get The Needed Output
console.log(Math.pow(a, Math.trunc(d))); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.trunc(d));
console.log(Math.round(d));
console.log(Math.floor(d));
console.log(parseInt(d));

// Use Variables b + d To Get This Valus
console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2).toString()); // 66.67 => String
console.log(Math.round(Math.trunc(b) / Math.ceil(d))); // 67 => Number
//////////////////////////
//String methods
let theName = "  Samy ahmed abdelfadil  ";
let theNum = 1234576889;

console.log(theName);
console.log(theName[0]);
console.log(theName.charAt(1));
console.log(theName.length);
theName = theName.trim();
console.log(theName);
console.log(theName.length);
console.log(theName.toLowerCase());
console.log(theName.toUpperCase());
console.log(theName.trim().charAt(2).toUpperCase());

console.log(theName.indexOf("abd"));
console.log(theName.lastIndexOf("a"));
console.log(theName.slice(2, 8));
console.log(theNum.toString().slice(2, 5));
console.log(theName.repeat(3));
console.log(theName.split());
console.log(theName.split(" "));
console.log(theName.split(" ", 2));
console.log(theName.substring(2, 9));
console.log(theName.substring(-2, 9));
console.log(theName.substring(theName.length, 9));

console.log(theName.includes("fadil", 1));
console.log(theName.includes("fadil", 17)); //start index 17

console.log(theName.startsWith("fadil", 1));
console.log(theName.startsWith("fadil", 16)); //start index 16

console.log(theName.endsWith("fadil", 1));
console.log(theName.endsWith("fadil", 21)); //lenth 16

/*
  All Solutions Must Be In One Chain
  You Can Use Concatenate
  */

let ah = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(ah.charAt(2).toUpperCase() + ah.slice(3, 6)); // Zero

// 8 H
console.log(ah.charAt(13).toUpperCase().repeat(8)); // HHHHHHHH

// Return Array
console.log(ah.split(` `, 1)); // ["Elzero"]

// Use Only "substr" Method + Template Literals In Your Solution
console.log(`${ah.substring(0, 7)} ${ah.substring(11)}`); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(
  `${ah.charAt(0).toLowerCase()}${ah
    .substring(1, ah.length - 1)
    .toUpperCase()}${ah.charAt(ah.length - 1).toLowerCase()}`
); // eLZERO WEB SCHOOl
//////////////////////////////////////
//nullish coalescing +any false value
let priceN = 0;
console.log(`The price is ${priceN || 200}`);
console.log(`The price is ${priceN ?? 200}`);
////////////////////\
//switch statement
let grade = 90;
switch (grade <= 100) {
  case grade >= 85:
    console.log(`exellent`);
    break;
  case grade >= 75 && grade < 85:
    console.log(`very good`);
    break;
  case grade >= 65 && grade < 75:
    console.log(`good`);
    break;
  case grade >= 50 && grade < 65:
    console.log(`passed`);
    break;
  case grade < 50:
    console.log(`failed`);
    break;
}
//////////////////
let marks = 90;
switch (marks <= 100) {
  case marks <= 100 && marks >= 80:
    console.log("Very Good");
    break;
  case marks >= 60 && marks <= 79:
    console.log("Good");
    break;
  case marks >= 30 && marks <= 59:
    console.log("Can do better");
    break;
  case marks < 30:
    console.log("Fail");
    break;
}
//////////////////
// switch (new Date().getDay()) {
//   case 0:
//     day = "Sunday";
//     break;
//   case 1:
//     day = "Monday";
//     break;
//   case 2:
//     day = "Tuesday";
//     break;
//   case 3:
//     day = "Wednesday";
//     break;
//   case 4:
//     day = "Thursday";
//     break;
//   case 5:
//     day = "Friday";
//     break;
//   case 6:
//     day = "Saturday";
// }

// Switch challenge

let jop = "Developer";
let salary = 0;

switch (jop) {
  case "manager":
    salary = 8000;
    console.log(`The salary is ${salary}`);
    break;

  case "IT":
  case "support":
    salary = 7000;
    console.log(`The salary is ${salary}`);
    break;

  case "Developer":
  case "Designer":
    salary = 6000;
    console.log(`The salary is ${salary}`);
    break;

  default:
    salary = 4000;
    console.log(`The salary is ${salary}`);
}
//////////////////////////////////
let myFriends = ["ahmed", "samy", "mamdouh", ["ali", "maya"], "ahmed"];
console.log(`hello ${myFriends[1]}`);
console.log(`hello ${myFriends[2][4]}`);
console.log(`hello ${myFriends[3][1]}`);

console.log(myFriends);
myFriends[1] = "yasser";
console.log(myFriends);
console.log(myFriends.length);
myFriends.length = 3;
console.log(myFriends);
//to add elements on start of array ,unshift
myFriends.unshift("mohamed", "karem");
//to add elements on end of array ,push
myFriends.push("ahmed", " rdwan");
console.log(myFriends);
//to remove first element on array,shift
let first = myFriends.shift();
console.log(myFriends);
console.log(`${first}`);
//to remove last element on array,shift
let last = myFriends.pop();
console.log(myFriends);
console.log(`${last}`);
///////////////////////
console.log(myFriends.indexOf("ahmed"));
console.log(myFriends.indexOf("ahmed", 2));

console.log(myFriends.lastIndexOf("ahmed"));
console.log(myFriends.lastIndexOf("ahmed", -2));

console.log(myFriends.includes("ahmed"));
console.log(myFriends.includes("ahmed", 2));

console.log(myFriends.sort());
console.log(myFriends.sort().reverse());

console.log(myFriends.slice(1));
console.log(myFriends.slice(1, 3));
console.log(myFriends.slice(-3));
console.log(myFriends.slice(1, -2));
console.log(myFriends.slice(-4, -1));
// to add elements on first of array 0 mean first array ,0 that we not remove any thing from array
myFriends.splice(0, 0, "samer", "soad");
console.log(myFriends);
//to remove fisrt element of array
myFriends.splice(0, 1, "madiha", "mahdi");
console.log(myFriends);
//to remove fisrt element after first on array
myFriends.splice(1, 1, "reda", "aya");
console.log(myFriends);

////////
let myNewFriends = ["ibrahim", "osama"];
let mySchoolFriends = ["helal", "abdalla"];
let allFriends = myFriends.concat(myNewFriends);
console.log(allFriends);
////
allFriends = myFriends.concat(myNewFriends, mySchoolFriends, "gamil", [
  "shady",
  "amira",
]);
console.log(allFriends);

console.log(allFriends.join());
console.log(allFriends.join("@").toUpperCase());
////////////////////////////////
/*
    Array Challenge
  */

let zero = 0;

let count = 3;

let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// Write Code Here

console.log(my.slice(zero, ++count).reverse()); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(++zero, --count).reverse()); // ["Elham", "Mazero"]
let ad = my.slice(--count, ++count).join();
let as = ad.substring(--zero, --count);
let ab = my.slice(++zero, count).join();
let ac = ab.substring(++zero, ab.length);
console.log(as.concat(ac)); // "Elzero"

console.log(ac[count] + ac[++count].toUpperCase()); // "rO"
/////////////////

let products = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];
let colors = ["Red", "Green", "Blue"];
let showCount = products.length;

document.write(`<h1>Show ${showCount} Products</h1>`);

for (let i = 0; i < showCount; i++) {
  document.write(`<div>`);
  document.write(`<h3>[${i + 1}] ${products[i]}</h3>`);
  for (let j = 0; j < colors.length; j++) {
    document.write(`<p>${colors[j]}</p>`);
  }
  document.write(`<p>${colors.join(" | ")}</p>`);
  document.write(`</div>`);
}

/*
  Products Practice
*/
let Products = [
  "chair",
  "set",
  "classic",
  "decor",
  "indoor",
  "outdoor",
  "Rattan",
  "dobar",
  "mesh",
];
let Colors = ["Red", "Green", "Blue"];
let proConts = Products.length;
document.write(`<h1> Show [${proConts}] Products </h1>`);

for (let i = 0; i < proConts; i++) {
  document.write(`<div>`);
  document.write(`<h3> [${i + 1}] ${Products[i]} </h3>`);
  for (let j = 0; j < Colors.length; j++) {
    document.write(`<p> ${Colors[j]} </p>`);
  }
  document.write(`<p> ${Colors.join(" , ")} </p>`);
  document.write(`</div>`);
}

/*
  Loop
  - While
*/

let proDucts = ["Keyboard", "Mouse", "Pen", "Pad", "Monitor", "iPhone"];

let index = 0;

while (index < proDucts.length) {
  console.log(proDucts[index]);
  index++;
}

/*
  Loop Challenge
*/

let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
let myEmployees = [
  "Amgad",
  "Samah",
  "Ameer",
  "Omar",
  "Othman",
  "Amany",
  "Samia",
  "Anwar",
];
let myAdminsCount = myAdmins.length;
let myEmployeesCont = myEmployees.length;

document.write(`<div>We Have ${myAdminsCount} Admins</div>`);

for (let i = 0; i < myAdminsCount; i++) {
  document.write(`<div>`);
  document.write(`<hr>`);

  let k = 0;
  document.write(`<p> The Admin For Team ${i + 1} Is ${myAdmins[i]} </p>`);
  document.write(`<h2>  Team Members: </h2>`);
  for (let j = 0; j < myEmployeesCont; j++) {
    if (myAdmins[i].charAt(0) === myEmployees[j].charAt(0)) {
      k++;
      document.write(`<p> - ${k}  ${myEmployees[j]} </p>`);
    }
  }

  document.write(`</div>`);
}

/*
  Function Advanced Examples
*/

function sayHello(userName, age) {
  if (age < 20) {
    console.log(`App is Not Suitable For You`);
  } else {
    console.log(`Hello ${userName} Your Age is ${age}`);
  }
}

sayHello("Osama", 38);
sayHello("Sayed", 40);
sayHello("Ali", 18);

function generateYears(start, end, exclude) {
  for (let i = start; i <= end; i++) {
    if (i === exclude) {
      continue;
    }
    console.log(i);
  }
}

generateYears(2000, 2021, 2020);
/*
  Function
  - Return
  - Automatic Semicolon Insertion [No Line Terminator Allowed]
  - Interrupting
*/

function generate(start, end) {
  for (let i = start; i <= end; i++) {
    if (i === 15) {
      return `Interrupting`;
    }
    console.log(i);
  }
}

generate(10, 20);
/*
  Function
  - Default Function Parameters
  - Function Parameters Default [Undefined]
  - Old Strategies [Condition + Logical Or]
  - ES6 Method
*/

function sayhello(username = "Unknown", age = "Unknown") {
  // if (age === undefined) {
  //   age = "Unknown";
  // }
  // age = age || "Unknown";
  return `Hello ${username} Your Age Is ${age}`;
}

console.log(sayhello());
/*
  Function
  - Rest Parameters
  - Only One Allowed
  - Must Be Last Element
*/

function calc(...numbers) {
  // numbers get all argument like all elements of array
  // console.log(Array.isArray(numbers));
  let result = 0;
  for (let i = 0; i < numbers.length; i++) {
    result += numbers[i]; // result = result + numbers[i]
  }
  return `Final Result Is ${result}`;
}

console.log(calc(10, 20, 10, 30, 50, 30));
/*
  Function Advanced Practice
  - Parameters
  - Default
  - Rest
  - Loop
  - Condition
*/

function showInfo(us = "Un", ag = "Un", rt = 0, show = "Yes", ...sk) {
  document.write(`<div>`);
  document.write(`<h2>Welcome, ${us}</h2>`);
  document.write(`<p>Age: ${ag}</p>`);
  document.write(`<p>Hour Rate: $${rt}</p>`);
  if (show === "Yes") {
    if (sk.length > 0) {
      document.write(`<p>Skills: ${sk.join(" | ")}</p>`);
    } else {
      document.write(`<p>Skills: No Skills</p>`);
    }
  } else {
    document.write(`<p>Skills Is Hidden</p>`);
  }
  document.write(`</div>`);
}

showInfo("Osama", 38, 20, "Yes", "Html", "CSS");

/*
  Function - Random Argument Challenge
  ====================================
  Create Function showDetails
  Function Accept 3 Parameters [a, b, c]
  Data Types For Info Is
  - String => Name
  - Number => Age
  - Boolean => Status
  Argument Is Random
  Data Is Not Sorted Output Depend On Data Types
  - Use Ternary Conditional Operator
*/

function showDetails(...argument) {
  let name,
    age = 0,
    flag = false;
  for (let i = 0; i < argument.length; i++) {
    if (typeof argument[i] === "string") name = argument[i];
    if (Number.isInteger(argument[i])) age = argument[i];
    if (typeof argument[i] === "boolean") flag = argument[i];
  }
  flag
    ? console.log(
        `Hello ${name}, Youe Age Is ${age}, You Are Available For Hire`
      )
    : console.log(
        `Hello ${name}, Youe Age Is ${age}, You Are Not Available For Hire`
      );
}
showDetails("Osama", 32, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(24, "ahmed", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(true, 33, "ibrahim"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
showDetails(false, "mostafa", 43); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"

/*
  Function
  - Anonymous Function
  - Calling Named Function vs Anonymous Function
  - Argument To Other Function
  - Task Without Name
  - SetTimeout
*/

let calculator = function (num1, num2) {
  return num1 + num2;
};

console.log(calculator(10, 20));

function sayHelloo() {
  console.log("Hello Osama");
}

document.getElementById("click").onclick = sayHelloo;
document.getElementById("show").onclick = function () {
  console.log("show");
};
setTimeout(function elzero() {
  console.log("Good");
}, 2000);

/*
  Function
  - Function Inside Function
  - Return Function
*/

// Example 1

function sayMesage(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    message = `${message} ${fName} ${lName}`;
  }
  concatMsg();
  return message;
}

console.log(sayMesage("Osama", "Mohamed"));

// Example 2

function sayMessge(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    return `${message} ${fName} ${lName}`;
  }
  return concatMsg();
}

console.log(sayMessge("Osama", "Mohamed"));

// Example 3

function sayMssage(fName, lName) {
  let message = `Hello`;
  // Nested Function
  function concatMsg() {
    function getFullName() {
      return `${fName} ${lName}`;
    }
    return `${message} ${getFullName()}`;
  }
  return concatMsg();
}

console.log(sayMssage("Osama", "Mohamed"));
/*
  Function
  - Arrow Function
  -- Regular vs Arrow [Param + No Param]
  -- Multiple Lines
*/

// let print = function () {
//     return 10;
//   };

//   let print = () => 10;

//   let print = function (num) {
//     return num;
//   };

//   let print = num => num;

//   let print = function (num1, num2) {
//     return num1 + num2;
//   };

let print = (num1, num2) => num1 + num2;

console.log(print(100, 50));
/*
  Scope
  - Global And Local Scope
*/

var ba = 1;
let bb = 2;

function showText() {
  var ba = 10;
  let bb = 20;
  console.log(`Function - From Local ${ba}`);
  console.log(`Function - From Local ${bb}`);
}

console.log(`From Global ${ba}`);
console.log(`From Global ${bb}`);

showText();

/*
  Scope
  - Block Scope [If, Switch, For]
*/

var x = 10;

if (10 === 10) {
  let x = 50;
  console.log(`From If Block ${x}`);
}

console.log(`From Global ${x}`);
/*
  Function Arrow Challenges
*/

// [1] One Statement In Function
// [2] Convert To Arrow Function
// [3] Print The Output [Arguments May Change]

// let names = function (...Parameter) {
//     // Parameter ?
//     return `String [${Parameter.join("], [")}] => Done !`;
//   };

//   console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));
//   // String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

let names = (...Parameter) => `String [${Parameter.join("], [")}] => Done !`;
// Parameter

console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

// String [Osama], [Mohamed], [Ali], [Ibrahim] => Done !

/* ================================= */

// [1] Replace ??? In Return Statement To Get The Output
// [2] Create The Same Function With Regular Syntax
// [3] Use Array Inside The Arguments To Get The Output

let myNumbers = [20, 50, 10, 60];

let cal = (one, two, ...nums) => one + two + nums;

console.log(calc(10, myNumbers[0], myNumbers[0], myNumbers[0])); // 80
/*
  Higher Order Functions
  ---> is a function that accepts functions as parameters and/or returns a function.

  - Map
  --- method creates a new array
  --- populated with the results of calling a provided function on every element
  --- in the calling array.

  Syntax map(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array

  Notes
  - Map Return A New Array

  Examples
  - Anonymous Function
  - Named Function

*/

let myNums = [1, 2, 3, 4, 5, 6];

let newArray = [];

for (let i = 0; i < myNums.length; i++) {
  newArray.push(myNums[i] + myNums[i]);
}

console.log(newArray);

// Same Idea With Map

// let addSelf = myNums.map(function (element, index, arr) {
//   // console.log(`Current Element => ${element}`);
//   // console.log(`Current Index => ${index}`);
//   // console.log(`Array => ${arr}`);
//   // console.log(`This => ${this}`);
//   return element + element;
// }, 10);

let addSelf = myNums.map((a) => a + a);

console.log(addSelf);

function addition(ele) {
  return ele + ele;
}

let add = myNums.map(addition);

console.log(add);

/*
  Map
  - Swap Cases
  - Inverted Numbers
  - Ignore Boolean Value
*/

let swappingCases = "elZERo";
let invertedNumbers = [1, -10, -20, 15, 100, -30];
let ignoreNumbers = "Elz123er4o";

let swa = swappingCases
  .split("")
  .map(function (ele) {
    // Condition ? True : False
    return ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase();
  })
  .join("");
console.log(swa);
//Arrow Function Version

let sw = swappingCases
  .split("")
  .map((ele) =>
    ele === ele.toUpperCase() ? ele.toLowerCase() : ele.toUpperCase()
  )
  .join("");

console.log(sw);

let inv = invertedNumbers.map((ele) => -ele).join(" ");
console.log(inv);
//with map
let ign = ignoreNumbers
  .split("")
  .map((ele) => (isNaN(parseInt(ele)) ? ele : ""))
  .join("");
console.log(ign);
//with fillter
let ig = ignoreNumbers
  .split("")
  .filter((ele) => isNaN(parseInt(ele)))
  .join("");
console.log(ig);

/*
  - Filter
  --- method creates a new array
  --- with all elements that pass the test implemented by the provided function.

  Syntax filter(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array => The Current Array
*/

// Get Friends With Name Starts With A
let friends = ["Ahmed", "Sameh", "Sayed", "Asmaa", "Amgad", "Israa"];

let filterdFriends = friends.filter((el) => el.startsWith("A"));

console.log(filterdFriends);

// Get Even Numbers Only
let numbers = [11, 20, 2, 5, 17, 10];

let evenNumbers = numbers.filter((el) => el % 2 === 0);

console.log(evenNumbers);

// Test Map vs Filter

// let addMap = numbers.map(function (el) {
//   return el + el;
// });

// console.log(addMap);

// let addFilter = numbers.filter(function (el) {
//   return el + el;
// });

// console.log(addFilter);

/*
  Filter
  - Filter Longest Word By Number
*/

// Filter Words More Than 4 Characters
let sentence = "I Love Foood Code Too Playing Much";

let smallWords = sentence
  .split(" ")
  .filter(function (ele) {
    return ele.length <= 4;
  })
  .join(" ");

console.log(smallWords);

// Filter Strings + Multiply
let mix = "A13BS2ZX";

let mixedContent = mix
  .split("")
  .filter((ele) => !isNaN(parseInt(ele)))
  .map((ele) => ele * ele)
  .join(" ");

console.log(mixedContent);

/*
  - Reduce
  --- method executes a reducer function on each element of the array,
  --- resulting in a single output value.

  Syntax
  reduce(callBackFunc(Accumulator, Current Val, Current Index, Source Array) { }, initialValue)
  - Accumulator => the accumulated value previously returned in the last invocation
  - Current Val => The current element being processed in the array
  - Index => The index of the current element being processed in the array.
  ---------- Starts from index 0 if an initialValue is provided.
  ---------- Otherwise, it starts from index 1.
  - Array => The Current Array
*/

let nums = [10, 20, 15, 30];

let adds = nums.reduce(function (acc, current, index, arr) {
  console.log(`Acc => ${acc}`);
  console.log(`Current Element => ${current}`);
  console.log(`Current Element Index => ${index}`);
  console.log(`Array => ${arr}`);
  console.log(acc + current);
  console.log(`#############`);
  return acc + current;
}, 15);

console.log(adds);

/*
  Reduce
  - Longest Word
  - Remove Characters + Use Reduce
*/

let theBiggest = [
  "Bla",
  "Propaganda",
  "Other",
  "AAA",
  "Battery",
  "Test",
  "Propaganda_Two",
];

let check = theBiggest.reduce(function (acc, current) {
  console.log(`Acc => ${acc}`);
  console.log(`Current Element => ${current}`);
  console.log(acc.length > current.length ? acc : current);
  console.log(`#############`);
  return acc.length > current.length ? acc : current;
});

console.log(check);

let removeChars = ["E", "@", "@", "L", "Z", "@", "@", "E", "R", "@", "O"];

let finalString = removeChars
  .filter(function (ele) {
    return ele !== "@";
  })
  .reduce(function (acc, current) {
    return `${acc}${current}`;
  });

console.log(finalString);

/*
  - forEach
  --- method executes a provided function once for each array element.

  Syntax forEach(callBackFunction(Element, Index, Array) { }, thisArg)
  - Element => The current element being processed in the array.
  - Index => The index of the current element being processed in the array.
  - Array - The Current Array

  Note
  - Doesnt Return Anything [Undefined]
  - Break Will Not Break The Loop
*/

let allLis = document.querySelectorAll("ul li");
let allDivs = document.querySelectorAll(".content div");

allLis.forEach(function (ele) {
  ele.onclick = function () {
    // Remove Active Class From All Elements
    allLis.forEach(function (ele) {
      ele.classList.remove("active");
    });
    // Add Active Class To This Element
    this.classList.add("active");
    // Hide All Divs
    allDivs.forEach(function (ele) {
      ele.style.display = "none";
    });
  };
});

/*
  Higher Order Functions Challenges

  You Can Use
  - ,
  - _
  - Space
  - True => 1 => One Time Only In The Code

  You Cannot Use
  - Numbers
  - Letters

  - You Must Use [Filter + Map + Reduce + Your Knowledge]
  - Order Is Not Important
  - All In One Chain

*/

let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";
let zLetter = myString[myString.length - true];
let solution = myString
  .split("")
  .map((ele) => ele.replace("_", " "))
  .filter((ele) => ele !== "," && isNaN(parseInt(ele)) && ele !== zLetter)
  .reduce((acc, cur) => (acc === cur ? `${acc}` : `${acc}${cur}`));
console.log(solution); // Elzero Web School

/*
  Object
  - Intro and What Is Object
  - Testing Window Object
  - Accessing Object
*/

// let user = {
//   // Properties
//   theName: "Osama",
//   'theAge': 38,
//   // Methods
//   sayHello: function () {
//     return `Hello ${this.theName}  The Age ${this['theAge']}`;
//   },
// };

// console.log(user.theName);
// console.log(user['theAge']);
// console.log(user.sayHello());

/*
  Object
  - Dig Deeper
  - Dot Notation vs Bracket Notation
  - Dynamic Property Name
*/

// let myVar = "country";

// let User = {
//   theName: "Osama",
//   country: "Egypt",
// };

// console.log(User.theName);
// console.log(User.country); // user.country
// console.log(User.myVar); // user.country
// console.log(User[myVar]); // user.country

/*
  Object
  - Nested Object And Trainings
*/

let available = true;

let user = {
  //Porperties
  name: "Osama",
  age: 38,
  skills: ["HTML", "CSS", "JS"],
  available: false,
  addresses: {
    ksa: "Riyadh",
    egypt: {
      one: "Cairo",
      two: "Giza",
    },
  },
  //Methods
  checkAv: function () {
    if (user.available === true) {
      return `Free For Work`;
    } else {
      return `Not Free`;
    }
  },
};

console.log(user.name);
console.log(user.age);
console.log(user.skills);
console.log(user.skills.join(" | "));
console.log(user.skills[2]); // Access With Index
console.log(user.addresses.ksa);
console.log(user.addresses.egypt.one);
console.log(user["addresses"].egypt.one);
console.log(user["addresses"]["egypt"]);
console.log(user["addresses"]["egypt"]["one"]);

console.log(user.checkAv());
/*
  Object
  - Create With New Keyword new Object();
*/

let userx = new Object({
  age: 20,
});

console.log(userx);

userx.age = 38;
userx["country"] = "Egypt";

userx.sayHellooo = function () {
  return `Hello`;
};

console.log(userx);
console.log(userx.age);
console.log(userx.country);
console.log(userx.sayHellooo());
/*
  Function this Keyword
  - this Introduction
  - this Inside Object Method
  --- When a function is called as a method of an object,
  --- its this is set to the object the method is called on.
  - Global Object
  - Test Variables With Window And This
  - Global Context
  - Function Context

  Search
  - Strict Mode
*/

console.log(this);
console.log(this === window);

//  myVar = 100;

// console.log(window.myVar);
// console.log(this.myVar);

function sayHllo() {
  console.log(this);
  return this;
}
sayHllo();

console.log(sayHllo() === window);

document.getElementById("cl").onclick = function () {
  console.log(this);
};

let userz = {
  age: 38,
  ageInDays: function () {
    console.log(this);
    return this.age * 365;
  },
};

console.log(userz.age);
console.log(userz.ageInDays());

/*
  Object
  - Create Object With Create Method
*/

let usery = {
  age: 20,
  doubleAge: function () {
    return this.age * 2;
  },
};

console.log(usery);
console.log(usery.age);
console.log(usery.doubleAge());

let obj = Object.create({});

obj.a = 100;

console.log(obj);

let copyObj = Object.create(usery);

copyObj.age = 50;

console.log(copyObj);
console.log(copyObj.age);
console.log(copyObj.doubleAge());

/*
  Object
  - Create Object With Assign Method
*/

let obj1 = {
  prop1: 1,
  meth1: function () {
    return this.prop1;
  },
};

let obj2 = {
  prop2: 2,
  meth2: function () {
    return this.prop2;
  },
};

let targetObject = {
  prop1: 100,
  prop3: 3,
};

let finalObject = Object.assign(targetObject, obj1, obj2);

finalObject.prop1 = 200;
finalObject.prop2 = 4;

console.log(finalObject);

let newObject = Object.assign({}, obj1, { prop5: 5, prop6: 6 });

console.log(newObject);

/*
  DOM
  - What Is DOM
  - DOM Selectors
  --- Find Element By ID
  --- Find Element By Tag Name
  --- Find Element By Class Name
  --- Find Element By CSS Selectors
  --- Find Element By Collection
  ------ title
  ------ body
  ------ images
  ------ forms
  ------ links
*/

let myIdElement = document.getElementById("my-div");
let myTagElements = document.getElementsByTagName("p");
let myClassElement = document.getElementsByClassName("js");
let myQueryElement = document.querySelector(".js");
let myQueryAllElement = document.querySelectorAll(".js");

console.log(myIdElement);
console.log(myTagElements[1]);
console.log(myClassElement[0]);
console.log(myQueryElement);
console.log(myQueryAllElement[0]);

console.log(document.title);
console.log(document.body);
console.log(document.forms[1].username.value);
console.log(document.links[1].href);

/*
  DOM [Get / Set Elements Content And Attributes]
  - innerHTML
  - textContent
  - Change Attributes Directly
  - Change Attributes With Methods
  --- getAttribute
  --- setAttribute

  Search
  - innerText
*/

let myElement = document.querySelector(".js");

console.log(myElement.innerHTML);
console.log(myElement.textContent);

myElement.innerHTML = "Text From <span>Main.js</span> File";
myElement.textContent = "Text From <span>Main.js</span> File";

document.images[0].src = "https://google.com";
document.images[0].alt = "Alternate";
document.images[0].title = "Picture";
document.images[0].id = "pic";
document.images[0].className = "img";

let myLink = document.querySelector(".link");

console.log(myLink.getAttribute("class"));
console.log(myLink.getAttribute("href"));

myLink.setAttribute("href", "https://twitter.com");
myLink.setAttribute("title", "Twitter");
myLink.textContent = "Twitter";

/*
  DOM [Check Attributes]
  - Element.attributes
  - Element.hasAttribute
  - Element.hasAttributes
  - Element.removeAttribute
*/

console.log(document.getElementsByTagName("p")[0].attributes);

let myP = document.getElementsByTagName("p")[0];

if (myP.hasAttribute("data-src")) {
  if (myP.getAttribute("data-src") === "") {
    myP.removeAttribute("data-src");
  } else {
    myP.setAttribute("data-src", "New Value");
  }
} else {
  console.log(`Not Found`);
}

if (myP.hasAttributes()) {
  console.log(`Has Attributes`);
}

if (document.getElementsByTagName("div")[3].hasAttributes()) {
  console.log(`Has Attributes`);
} else {
  console.log(`Div Has No Attributes`);
}

/*
  DOM [Create Elements]
  - createElement
  - createComment
  - createTextNode
  - createAttribute
  - appendChild
*/
// Create Elements
document.write("<hr>");
let myElementt = document.createElement("div");
let myAttr = document.createAttribute("data-custom");
// Create  Text
let myText = document.createTextNode("Product One");
let myComment = document.createComment("This Is Div");
myElementt.style = "font-size:20px; font-weight:bold;";

myElementt.className = "product";
myElementt.setAttributeNode(myAttr);
myElementt.setAttribute("data-test", "Testing");

// Append Comment To Element
myElementt.appendChild(myComment);

// Append Text To Element
myElementt.appendChild(myText);

// Append Element To Body
document.body.appendChild(myElementt);

/*
  DOM [Create Elements]
  - Practice Product With Heading And Paragraph
*/
for (let i = 0; i < 20; ++i) {
  // Create Elements
  document.write("<hr>");
  let myMainElement = document.createElement("div");
  let myHeading = document.createElement("h2");
  let myParagraph = document.createElement("p");
  // Create  Text
  let myHeadingText = document.createTextNode(`Product ${++i} `);
  let myParagraphText = document.createTextNode(`Product Description ${i} `);

  // Add Heading Text
  myHeading.appendChild(myHeadingText);
  // Add Heading To Main Element
  myMainElement.appendChild(myHeading);

  // Add Heading Text
  myParagraph.appendChild(myParagraphText);
  // Add Heading To Main Element
  myMainElement.appendChild(myParagraph);

  // Append Element To Body
  document.body.appendChild(myMainElement);
}

/*
  DOM [Deal With Childrens]
  - children
  - childNodes
  - firstChild
  - lastChild
  - firstElementChild
  - lastElementChild
*/

let myElementttt = document.getElementById("Osama");

console.log(myElementttt);
console.log(myElementttt.children);
console.log(myElementttt.children[1]);
console.log(myElementttt.childNodes);
console.log(myElementttt.childNodes[4]);
console.log(myElementttt.firstChild);
console.log(myElementttt.lastChild);

console.log(myElementttt.firstElementChild);
console.log(myElementttt.lastElementChild);
/*
  DOM [Events]
  - Use Events On HTML
  - Use Events On JS
  --- onclick
  --- oncontextmenu
  --- onmouseenter
  --- onmouseleave

  --- onload
  --- onscroll
  --- onresize

  --- onfocus
  --- onblur
  --- onsubmit
*/

let myBtn = document.getElementById("btn");

myBtn.onmouseleave = function () {
  console.log("Clicked");
};

window.onresize = function () {
  console.log("Scroll");
};

/*
  DOM [Events]
  - Validate Form Practice
  - Prevent Default
*/

// let userInput = document.querySelector("[name='username']");
// let ageInput = document.querySelector("[name='userage']");

// document.forms[0].onsubmit = function (e) {
//   let userValid = false;
//   let ageValid = false;

//   if (userInput.value !== "" && userInput.value.length <= 10) {
//     userValid = true;
//   }
// console.log(userInput);
//   if (ageInput.value !== "") {
//     ageValid = true;
//   }

//   if (userValid === false || ageValid === false) {
//     e.preventDefault();
//   }
// };

// document.links[1].onclick = function (event) {
//   console.log(event);
//   event.preventDefault();
// };

let userInput = document.querySelector("[name='username']");
let userAge = document.querySelector("[name='userage']");
document.forms[0].onsubmit = function (e) {
  let nameVaild = false;
  let ageVaild = false;

  nameVaild =
    userInput.value !== "" && userInput.value.length <= 10 ? true : false;
  ageVaild = userAge.value !== "" ? true : false;
  if (nameVaild === false || ageVaild === false) e.preventDefault();
};

/*
  DOM [Events Simulation]
  - click
  - focus
  - blur
*/

window.onload = function () {
  // userAge.focus();
};
// userInput.onblur=function (){
//   document.links[0].click();
// }
/*
  DOM [Class List]
  - classList
  --- length
  --- contains
  --- item(index)
  --- add
  --- remove
  --- toggle
*/

let element = document.getElementById("my-div");

// console.log(element.classList);
// console.log(typeof element.classList);
// console.log(element.classList.contains("osama"));
// console.log(element.classList.contains("show"));
// console.log(element.classList.item("3"));
console.log(element.classList);
console.log(typeof element.classList);
console.log(element.classList.contains("ahmed"));
console.log(element.classList.contains("one"));
console.log(element.classList.item("3"));

element.onclick = function () {
  element.classList.toggle("show");
  console.log(element.classList);
  element.classList.add("ahmed", "samy");
  console.log(element.classList);
  element.classList.remove("ahmed");
  console.log(element.classList);
};
/*
	DOM [CSS]
	- style
	- css text
	- remove ( propertyName )[ Inline,Stylesheet ]
	- setProperty ( propertyName , value , properity )
*/

// style :
element.style.color = "red";
// CSS text :
element.style.cssText = "font-whight:bold; color:red;";
// remove property :
element.style.removeProperty("background-color");
// set property :
element.style.setProperty("font-size", "40px", "important");

// to print the css codes of an element
/*
  DOM [Deal With Elements]
  - before [Element || String]
  - after [Element || String]
  - append [Element || String]
  - prepend [Element || String]
  - remove
*/

let createdP = document.createElement("p");

// element.remove();
element.append(createdP);
// element.prepend(createdP);
// element.add(createdP);
//element.before(createdP);
//element.after(createdP);

/*
  DOM [Traversing]
  - nextSibling
  - previousSibling
  - nextElementSibling
  - previousElementSibling
  - parentElement
*/

let span = document.querySelector(".two");

console.log(span.parentElement);
console.log(span.nextSibling);
console.log(span.nextElementSibling);

span.onclick = function () {
  span.parentElement.remove();
};

/*
  DOM [Cloning]
  - cloneNode(Deep)
*/
console.log(document.querySelector("p"));
let myPa = document.querySelector("p").cloneNode(true);
console.log(myPa);
let myDiv = document.querySelector("div");

myPa.id = `${myPa.id}-clone`;

myDiv.appendChild(myPa);
console.log(myDiv);

/*
  DOM [Add Event Listener]
  - addEventListener
  - Use Without On
  - Attach Multiple Events
  - Error Test

  Search
  - Capture & Bubbling JavaScript
  - removeEventListener
*/

// myP.onclick = one;
// myP.onclick = two;

// function one() {
//   console.log("Message From OnClick 1");
// }
// function two() {
//   console.log("Message From OnClick 2");
// }

// window.onload = "Osama";

// myP.addEventListener("click", function () {
//   console.log("Message From OnClick 1 Event");
// });

// myP.addEventListener("click", one);
// myP.addEventListener("click", two);

// myP.addEventListener("click", "String"); // Error

myPa.onclick = function () {
  let newPa = myPa.cloneNode(true);
  newPa.className = "clone";
  document.body.appendChild(newPa);
};

// let cloned = document.querySelector(".clone"); // Error

// cloned.onclick = function () {
//   console.log("Iam Cloned");
// };

document.addEventListener("click", function (e) {
  if (e.target.className === "clone") {
    console.log("Iam Cloned");
  }
});

// // body styling
// document.body.style.cssText =
//   "margin: 0px; background-color: rgb(236, 236, 236); font-family:Tahoma,Arial;";

// /* header */

// // create header
// let head = document.createElement("header");
// head.style.cssText = "display:flex; padding: 20px; background-color: rgb(255,255,255); justify-content: space-between; align-items : center;";
// head.classList.add("website-head");
// document.body.appendChild(head);

// // create logo
// let logo = document.createElement("div");
// logo.classList.add("logo");
// logo.title = "website logo";
// logo.style.cssText = "font-weight: bold; color:rgb(35, 169, 110); font- size: 26px;";
// logo.innerHTML = "Elzero";
// head.appendChild(logo);

// // ul elements
// let ul = document.createElement("ul");
// let headEle = ["Home", "About", "Service", "Contact"];
// for (i= 0;i< headEle.length;i++ ){
//     let li = document.createElement("li");
//     li.style.margin = "5px";
//     li.style.color = "rgb(234 200 133)";
//     li.innerHTML = headEle[i];
//     ul.appendChild(li);
// }
// ul.classList.add("content");
// ul.style.cssText = "paddig: 0px; margin: 0px; display: flex; list-style: none;";
// head.appendChild(ul);

// /* body */

// // create content
// let content = document.createElement("div");
// document.body.appendChild(content);
// content.classList.add("content");
// content.style.cssText = "display: flex;  flex-wrap: wrap; justify-content: center; gap: 20px;  padding: 20px; min-height:calc(100vh - 142px); box-sizing: border-box;";

// // create product
// for(i= 0;i< 15;i++){
//     let product = document.createElement("div");
//     product.classList.add("product");
//     product.style.cssText = "padding: 20px; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221); width: calc((100% - 40px) / 3); box-sizing: border-box; text-align: center; color: rgb(136, 136, 136); border-radius: 6px";
//     let span = document.createElement("span");
//     span.style.cssText = "font-size: 40px; color: black; font-weight:normal; display: block; margin-bottom: 10px; margin-top: 10px;";
//     span.textContent = i+1;
//     product.appendChild(span);
//     product.append("Product");
//     content.appendChild(product);
// }

// /* footer */

// // create footer
// let foot = document.createElement('footer');
// foot.classList.add("footer");
// foot.style.cssText = "background-color: rgb(35,169,110); font-size: 26px; text-align: center; padding: 20px; color: rgb(255,255,255);";
// foot.append("Copyright 2021");
// document.body.appendChild(foot);

//body style
document.body.style.cssText =
  "margin:0; padding:0; font-family:Tahoma,Arial;  background-color:#aaaaaa ";

// create the header
let head = document.createElement("header");
head.classList.add("ws-header");
head.style.cssText =
  "padding:10px;  background-color:white; display:flex; justify-content:space-between; align-items: center;";
document.body.appendChild(head);

// create logo
let logo = document.createElement("div");
logo.classList.add("hd-logo");
let logoText = document.createTextNode("Elzero");
logo.appendChild(logoText);
logo.style.cssText =
  "padding:10px; font-size:20px; font-weight:bold; color:rgb(35, 169, 110);";
head.appendChild(logo);

//create ul elements
let ul = document.createElement("ul");
let liArray = ["Home", "About", "Service", "Contact"];
for (let i = 0; i < liArray.length; ++i) {
  let li = document.createElement("li");
  li.innerHTML = liArray[i];
  li.style.padding = "5px";
  li.style.margin = "5px";
  ul.appendChild(li);
}
head.appendChild(ul);
ul.style.cssText = "paddig: 0px; margin: 0px; display: flex; list-style: none;";

//create content
let content = document.createElement("div");
content.classList.add("content");
content.style.csstext =
  "display: flex;  flex-wrap: wrap; justify-content: center; gap: 20px;  padding: 20px; min-height:calc(100vh - 142px); box-sizing: border-box; ";
content.style.cssText =
  "display: flex;  flex-wrap: wrap; justify-content: center; gap: 20px;  padding: 20px; min-height:calc(100vh - 142px); box-sizing: border-box;";
content.style.boxsizing = "border-box";
document.body.appendChild(content);

// create product
for (let i = 1; i < 16; ++i) {
  let product = document.createElement("div");
  product.classList.add("product");

  product.style.cssText =
    " padding: 20px; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221); width: calc((100% - 40px) / 3); box-sizing: border-box; text-align: center; color: rgb(136, 136, 136); border-radius: 6px ";
  let span = document.createElement("span");
  span.style.cssText =
    "font-size: 40px; color: black; font-weight:normal; display: block; margin-bottom: 10px; margin-top: 10px;";

  span.textContent = `${i}`;
  product.appendChild(span);
  product.append("product");
  content.appendChild(product);
}

// creating footer

let footer = document.createElement("footer");
let ftText = "Copyright 2021";
footer.textContent = ftText;
footer.style.cssText =
  "background-color: rgb(35,169,110); font-size: 26px; text-align: center; padding: 20px; color: rgb(255,255,255);";
document.body.appendChild(footer);
/*
  BOM [Browser Object Model]
  - Introduction
  --- Window Object Is The Browser Window
  --- Window Contain The Document Object
  --- All Global Variables And Objects And Functions Are Members Of Window Object
  ------ Test Document And Console
  - What Can We Do With Window Object ?
  --- Open Window
  --- Close Window
  --- Move Window
  --- Resize Window
  --- Print Document
  --- Run Code After Period Of Time Once Or More
  --- Fully Control The URL
  --- Save Data Inside Browser To Use Later
*/

window.document.title = "Hello JS";

/*
  BOM [Browser Object Model]
  - alert(Message) => Need No Response Only Ok Available
  - confirm(Message) => Need Response And Return A Boolean
  - prompt(Message, Default Message) => Collect Data
*/

// alert("Test");
// console.log("Test");

// let confirmMsg = confirm("Are You Sure?");

// console.log(confirmMsg);

// if (confirmMsg === true) {
//   console.log("Item Deleted");
// } else {
//   console.log("Item Not Deleted");
// }

// let promptMsg = prompt("Good Day To You?", "Write Day With 3 Characters");

// console.log(promptMsg);

/*
  BOM [Browser Object Model]
  - setTimeout(Function, Timeout, Additional Params)
  - clearTimeout(Identifier)
*/

// setTimeout(function () {
//   console.log("Msg");
// }, 3000);

// setTimeout(sayMsg, 3000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }

// setTimeout(sayMsg, 3000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} Age Is : ${age}`);
// }

let btn = document.querySelector("button");

btn.onclick = function () {
  clearTimeout(Counter);
};

function sayMsg(user, age) {
  console.log(`Iam Message For ${user} Age Is : ${age}`);
}

let Counter = setTimeout(sayMsg, 3000, "Osama", 38);

/*
  BOM [Browser Object Model]
  - setInterval(Function, Millseconds, Additional Params)
  - clearInterval(Identifier)
*/

// setInterval(function () {
//   console.log(`Msg`);
// }, 1000);

// setInterval(sayMsg, 1000);

// function sayMsg() {
//   console.log(`Iam Message`);
// }

// setInterval(sayMsg, 1000, "Osama", 38);

// function sayMsg(user, age) {
//   console.log(`Iam Message For ${user} His Age Is: ${age}`);
// }

let div = document.querySelector("div");

function countdown() {
  div.innerHTML -= 1;
  if (div.innerHTML === "0") {
    clearInterval(Counteer);
  }
}

let Counteer = setInterval(countdown, 1000);

/*
  BOM [Browser Object Model]
  - location Object
  --- href Get / Set [URL || Hash || File || Mail]
  --- host
  --- hash
  --- protocol
  --- reload()
  --- replace()
  --- assign()
*/

console.log(location);
console.log(location.href);

// location.href = "https://google.com";
// location.href = "/#sec02";
// location.href = "https://developer.mozilla.org/en-US/docs/Web/JavaScript#reference";

// console.log(location.host);
// console.log(location.hostname);

// console.log(location.protocol);

// console.log(location.hash);

/*
  BOM [Browser Object Model]
  - open(URL [Opt], Window Name Or Target Attr [Opt], Win Features [Opt], History Replace [Opt])
  - close()
  - Window Features
  --- left [Num]
  --- top [Num]
  --- width [Num]
  --- height [Num]
  --- menubar [yes || no]

  Search
  - Window.Open Window Features
*/

// setTimeout(function () {
//   window.open("", "_self", "", false);
// }, 2000);

// setTimeout(function () {
//   window.open("https://google.com", "_blank", "width=1000,height=1000,left=200,top=10");
// }, 2000);

/*
  BOM [Browser Object Model]
  - History API
  --- Properties
  ------ length
  --- Methods
  ------ back()
  ------ forward()
  ------ go(Delta) => Position In History

  Search [For Advanced Knowledge]
  - pushState() + replaceState()
*/

console.log(history);

/*
  BOM [Browser Object Model]
  - stop()
  - print()
  - focus()
  - scrollTo(x, y || Options)
  - scroll(x, y || Options)
  - scrollBy(x, y || Options)
*/

// let myNewWindow = window.open("https://google.com", "", "width=500,height=500");

// window.scrollTo({
//   left: 500,
//   top: 200,
//   behavior: "smooth"
// });

/*
  BOM [Browser Object Model]
  - Practice => Scroll To Top
  - scrollX [Alias => PageXOffset]
  - scrollY [Alias => PageYOffset]
*/

// console.log(window.scrollX === window.pageXOffset);

let bttn = document.getElementsByClassName("btn-scroll");
console.log(bttn);
window.onscroll = function () {
  if (window.scrollY >= 600) {
    bttn[0].style.display = "block";
  } else {
    bttn[0].style.display = "none";
  }
};

bttn.onclick = function () {
  window.scrollTo({
    left: 0,
    top: 0,
    behavior: "smooth",
  });
};
/*
  BOM [Browser Object Model]
  Local Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - No Expiration Time
  - HTTP And HTTPS
  - Private Tab
*/

// Set
window.localStorage.setItem("color", "#aaaaaa");
window.localStorage.fontWeight = "bold";
window.localStorage["fontSize"] = "20px";

// Get
console.log(window.localStorage.getItem("color"));
console.log(window.localStorage.color);
console.log(window.localStorage["color"]);

// Remove One
// window.localStorage.removeItem("color");

// Remove All
// window.localStorage.clear();

// Get Key
console.log(window.localStorage.key(0));

// Set Color In Page
document.body.style.backgroundColor = window.localStorage.getItem("color");

console.log(window.localStorage);
console.log(typeof window.localStorage);

/*
  BOM [Browser Object Model]
  Local Storage Practice
*/

// let lis = document.querySelectorAll(".color-ul li");
// let exp = document.querySelector(".experiment");

// if (window.localStorage.getItem("color")) {
//   // If There Is Color In Local Storage
//   // [1] Add Color To Div
//   exp.style.backgroundColor = window.localStorage.getItem("color");
//   // [2] Remove Active Class From All Lis
//   lis.forEach((li) => {
//     li.classList.remove("active");
//   });
//   // [3] Add Active Class To Current Color
//   document.querySelector(`[data-color="${window.localStorage.getItem("color")}"]`).classList.add("active");
// }else{

// }

// lis.forEach((li) => {
//   li.addEventListener("click", (e) => {
//     // console.log(e.currentTarget.dataset.color);
//     // Remove Active Class From all Lis
//     lis.forEach((li) => {
//       li.classList.remove("active");
//     });
//     // Add Active Class To Current Element
//     e.currentTarget.classList.add("active");
//     // Add Current Color To Local Storage
//     window.localStorage.setItem("color", e.currentTarget.dataset.color);
//     // Change Div Background Color
//     exp.style.backgroundColor = e.currentTarget.dataset.color;
//   });
// });

let lis = document.querySelectorAll(".color-ul li");
let exp = document.querySelector(".experiment");

if (window.localStorage.getItem("Color")) {
  // If There Is Color In Local Storage
  // [1] Add Color To Div
  exp.style.backgroundColor = window.localStorage.getItem("Color");
  // [2] Remove Active Class From All Lis
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  // [3] Add Active Class To Current Color
  // Add Active Class To This Element
  document
    .querySelector(`[data-color="${window.localStorage.getItem("Color")}"]`)
    .classList.add("active");
}
lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    console.log(e.currentTarget.dataset.color);
    // Remove Active Class From all Lis
    lis.forEach((li) => {
      li.classList.remove("active");
    });

    // Add Active Class To Current Element
    e.currentTarget.classList.add("active");
    // Add Current Color To Local Storage
    window.localStorage.setItem("Color", e.currentTarget.dataset.color);
    // Change Div Background Color
    exp.style.backgroundColor = e.currentTarget.dataset.color;
  });
});

/*
  BOM [Browser Object Model]
  Session Storage
  - setItem
  - getItem
  - removeItem
  - clear
  - key

  Info
  - New Tab = New Session
  - Duplicate Tab = Copy Session
  - New Tab With Same Url = New Session
*/

// window.localStorage.setItem("color", "red");
// window.sessionStorage.setItem("color", "blue");

document.querySelector("[name='username']").onblur = function () {
  // console.log(this.value);
  window.localStorage.setItem("input-name", this.value);
};

/*BOM CHALEEGE*/
// create btn,input,ul
let taskName = document.querySelector("[name='task-name']");
let taskUl = document.querySelector("[class='tasks']");
let btnAddTask = document.querySelector("[id='btn-submit-task']");
let addArray = [];

//create the function that we will store in it on local Storage
function setArrayToLocalSto(retrivedArray) {
  let taskStringified = JSON.stringify(retrivedArray);
  localStorage.setItem("tasks", taskStringified);
}
//create the function that we will get array from local Storage
function getArrayFromLocalSto() {
  //retrieving our data and converting it back into an array
  let retrievedData = localStorage.getItem("tasks");
  let storedTasks = JSON.parse(retrievedData);
  return storedTasks;
}

function setLItemsOnDiv(currentListIem, retrivedArray) {
  currentListIem.innerHTML = "";

  for (let i = 0; i < retrivedArray.length; ++i) {
    let task = document.createElement("li");
    task.classList.add(`${i}`);
    task.style.cssText =
      " margin:20px; padding: 20px; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221);  box-sizing: border-box;   border-radius: 6px ; display: flex; justify-content: space-between;  width:80%; ";

    let span = document.createElement("span");
    span.textContent = retrivedArray[i];

    let btnDelete = document.createElement("button");
    btnDelete.classList.add("btn-delete");
    btnDelete.innerText = "Delete";
    btnDelete.style.cssText =
      "background-color: red;  border: none; color: azure; padding: 10px;border-radius: 5px ";
    btnDelete.onclick = function () {
      let cas = this.parentElement.className;
      let index = parseInt(cas);
      console.log(index);
      RemoveItemFromDiv(index);
    };

    task.appendChild(span);
    task.appendChild(btnDelete);
    currentListIem.appendChild(task);
  }
  return currentListIem;
}

function RemoveItemFromDiv(index) {
  let removeArray = getArrayFromLocalSto();
  console.log(removeArray);
  removeArray.splice(index, 1);
  console.log(removeArray);
  setArrayToLocalSto(removeArray);
  setLItemsOnDiv(taskUl, removeArray);
}

//create the array that we will store in it on local Storage
if (localStorage.getItem("tasks") === null) {
  let taskStringified = JSON.stringify(addArray);
  localStorage.setItem("tasks", taskStringified);
}

btnAddTask.onclick = function () {
  addArray = getArrayFromLocalSto();

  if (taskName.value !== "") {
    addArray.push(taskName.value);
    taskName.value = "";
    setArrayToLocalSto(addArray);

    setLItemsOnDiv(taskUl, addArray);
  }
};
window.onload = function () {
  addArray = getArrayFromLocalSto();
  setLItemsOnDiv(taskUl, addArray);
};

// /*BOM CHALEEGE*/

// let taskName = document.querySelector("[name='task-name']");
// let taskUl = document.querySelector("[class='tasks']");
// let btnAddTask = document.querySelector("[id='btn-submit-task']");

// let storedTasks = [];
// let retrievedData =[];
// let retrivedLoad=[];

// if (localStorage.getItem('tasks') === null) {
//   let taskStringified = JSON.stringify(storedTasks);
//   localStorage.setItem('tasks', taskStringified);
// }

// function addNewTask( name) {
//   getAllTasks()
//   storedTasks.push(name)
//   let taskStringified = JSON.stringify(storedTasks);
//   localStorage.setItem('tasks', taskStringified);

// }
// function getAllTasks(){
//  // retrieving our data and converting it back into an array
//   retrievedData = localStorage.getItem("tasks");
//   storedTasks = JSON.parse(retrievedData);
//   return storedTasks;

// }
// btnAddTask.onclick = function () {
//   if(taskName.value!==""){
//   addNewTask(taskName.value);
//   storedTasks=getAllTasks();
//   console.log(storedTasks)
//   }
// //adding element
// let task = document.createElement("li");
// task.classList.add(`task_${storedTasks.length-1}`)
// task.style.cssText= " margin:20px; padding: 20px; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221);  box-sizing: border-box;   border-radius: 6px ; display: flex; justify-content: space-between;  width:80%; "
// let span = document.createElement("span");
// span.textContent = taskName.value;
//  btnDelete= document.createElement("button")
//  btnDelete.onclick = function Remove(){
//   let cas=this.parentElement.className
//   let idex =parseInt( cas.substring(5))
//     let pr=this.parentElement
//     console.log(pr)
//     console.log(cas)
//     console.log(idex)

//     storedTasks=getAllTasks();
//     retrivedLoad.splice(idex,1)
//     console.log(retrivedLoad)
//     let taskStringified = JSON.stringify(retrivedLoad);
//     localStorage.setItem('tasks', taskStringified);
//     pr.remove();

// }

// btnDelete.classList.add("btn-delete")
// btnDelete.innerText="Delete"
// btnDelete.style.cssText="background-color: red;  border: none; color: azure; padding: 10px;border-radius: 5px "
// task.appendChild(span)
// task.appendChild(btnDelete)
// taskUl.appendChild(task)
// }

//   window.onload =function(){
// // فى الريلود هنعمل فور ونجيبهم من الاستور
//  retrivedLoad = getAllTasks()
//  for(let i=0; i<retrivedLoad.length;++i){
// let task = document.createElement("li");
// task.classList.add(`task_${i}`)
// task.style.cssText= " margin:20px; padding: 20px; background-color: rgb(255, 255, 255); border: 1px solid rgb(221, 221, 221);  box-sizing: border-box;   border-radius: 6px ; display: flex; justify-content: space-between;  width:80%; "
// let span = document.createElement("span");
// span.textContent = retrivedLoad[i];
//  btnDelete= document.createElement("button")
// btnDelete.classList.add("btn-delete")
// btnDelete.onclick = function Remove(){
//   let cas=this.parentElement.className
//   let idex =parseInt( cas.substring(5))
//     let pr=this.parentElement
//     console.log(pr)
//     console.log(cas)
//     console.log(idex)

//     storedTasks=getAllTasks();
//     console.log(retrivedLoad)
//     retrivedLoad.splice(idex,1)
//     console.log(retrivedLoad)

//     let taskStringified = JSON.stringify(retrivedLoad);
//     localStorage.setItem('tasks', taskStringified);

//     pr.remove();

// }

// btnDelete.innerText="Delete"
// btnDelete.style.cssText="background-color: red;  border: none; color: azure; padding: 10px;border-radius: 5px "
// task.appendChild(span)
// task.appendChild(btnDelete)
// taskUl.appendChild(task)
//   }
// }

/*
  Destructuring
  " is a JavaScript expression that allows us to extract data from arrays,
    objects, and maps and set them into new, distinct variables. "
  - Destructuring Array
*/

let aw = 1;
let bw = 2;
let cw = 3;
let dw = 4;
let ew;
let myFriiends = ["Ahmed", "Sayed", "Ali", "Maysa"];

[aw = "A", bw, cw, dw, ew = "Osama"] = myFriiends;

console.log(aw);
console.log(bw);
console.log(cw);
console.log(dw);
console.log(ew);

// console.log(myFriends[4]);

let [, y, , z] = myFriends;

console.log(y);
console.log(z);
/*
  Destructuring
  - Destructuring Array Advanced Examples
*/

let yFriends = [
  "Ahmed",
  "Sayed",
  "Ali",
  ["Shady", "Amr", ["Mohamed", "Gamal"]],
];

// console.log(myFriends[3][2][1]);

// let [, , , [az, , [, bz]]] = myFriends;

let [, , , [az, , [, bz]]] = myFriends;

console.log(az); // Shady
console.log(bz); // Gamal

/*
  Destructuring
  - Destructuring Array => Swapping Variables
*/

let book = "Video";
let video = "Book";

// // Save Book Value In Stash
// let stash = book; // Video

// // Change Book Value
// book = video; // Book

// // Change Video Value
// video = stash; // Video

[book, video] = [video, book];

console.log(book);
console.log(video);
/*
  Destructuring
  - Destructuring Object
*/

const ueser = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
};

// console.log(user.theName);
// console.log(user.theAge);
// console.log(user.theTitle);
// console.log(user.theCountry);

// let theName = user.theName;
// let theAge = user.theAge;
// let theTitle = user.theTitle;
// let theCountry = user.theCountry;

// console.log(theName);
// console.log(theAge);
// console.log(theTitle);
// console.log(theCountry);

// ({ theName, theAge, theTitle, theCountry } = user);
const { theeName, theAge, theCountry } = ueser;

console.log(theeName);
console.log(theAge);
console.log(theCountry);

/*
  Destructuring
  - Destructuring Object
  --- Naming The Variables
  --- Add New Property
  --- Nested Object
  --- Destructuring The Nested Object Only
*/

const usere = {
  theName: "Osama",
  theAge: 39,
  theTitle: "Developer",
  theCountry: "Egypt",
  theColor: "Black",
  skills: {
    html: 70,
    css: 80,
  },
};

const {
  theName: n,
  theAge: q,
  theContry,
  theColor: co = "Red",
  skills: { html: h, css },
} = usere;

console.log(n);
console.log(q);
console.log(theCountry);
console.log(co);
console.log(`My HTML Skill Progress Is ${h}`);
console.log(`My CSS Skill Progress Is ${css}`);

const { html: skillOne, css: skillTwo } = usere.skills;

console.log(`My HTML Skill Progress Is ${skillOne}`);
console.log(`My CSS Skill Progress Is ${skillTwo}`);

/*
  Destructuring
  - Destructuring Function Parameters
*/

const User = {
  theName: "Osama",
  theAge: 39,
  skills: {
    html: 70,
    css: 80,
  },
};

showdetails(User);

// function showDetails(obj) {
//   console.log(`Your Name Is ${obj.theName}`);
//   console.log(`Your Age Is ${obj.theAge}`);
//   console.log(`Your CSS Skill Progress Is ${obj.skills.css}`);
// }

function showdetails({ theName: n, theAge: a, skills: { css: s } } = User) {
  console.log(`Your Name Is ${n}`);
  console.log(`Your Age Is ${a}`);
  console.log(`Your CSS Skill Progress Is ${s}`);
}

/*
  Destructuring
  - Destructuring Mixed Content
*/

const useer = {
  theName: "Osama",
  theAge: 39,
  skills: ["HTML", "CSS", "JavaScript"],
  addresses: {
    egypt: "Cairo",
    ksa: "Riyadh",
  },
};

const {
  theName: na,
  theAge: aa,
  skills: [, , three],
  addresses: { egypt: ea },
} = user;

console.log(`Your Name Is: ${na}`);
console.log(`Your Age Is: ${aa}`);
console.log(`Your Last Skill Is: ${three}`);
console.log(`Your Live In: ${ea}`);

/*
  Destructuring
  - Challenge
*/

let chosen = 1;

let myFrienDs = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

let [one, two, thre] = myFrienDs;
let {
  title: t1,
  age: a1,
  available: v1,
  skills: [, s12],
} = one;
let {
  title: t2,
  age: a2,
  available: v2,
  skills: [, s22],
} = two;
let {
  title: t3,
  age: a3,
  available: v3,
  skills: [, s32],
} = thre;

switch (chosen) {
  case 1:
    console.log(t1);
    console.log(a1);
    console.log(v1 === true ? "available" : " not avaiable");
    console.log(s12);
    break;
  case 2:
    console.log(`${t2}`);
    console.log(`${a2}`);
    console.log(v2 === true ? "available" : " not avaiable");
    console.log(`${s22}`);
    break;
  case 3:
    console.log(`${t3}`);
    console.log(`${a3}`);
    console.log(v3 === true ? "available" : " not avaiable");
    console.log(`${s32}`);
    break;
  default:
    console.log(`there is no choice`);
}

/*
  - Set Data Type
  Syntax: new Set(Iterable)
  -- Object To Store Unique Values
  -- Cannot Access Elements By Index

  Properties:
  - size

  Methods:
  - add
  - delete
  - clear
  - has
*/

let myData = [1, 1, 1, 2, 3, "A"];
// let myUniqueData = new Set([1, 1, 1, 2, 3]);
// let myUniqueData = new Set(myData);
// let myUniqueData = new Set().add(1).add(1).add(1).add(2).add(3);
let myUniqueData = new Set();

myUniqueData.add(1).add(1).add(1);
myUniqueData.add(2).add(3).add("A");

console.log(`Is Set Has => A ${myUniqueData.has("a".toUpperCase())}`);

console.log(myData);
console.log(myUniqueData);

console.log(myUniqueData.size);

console.log(myData[0]);
console.log(myUniqueData[0]);

// myUniqueData.delete(2);
console.log(myUniqueData.delete(2));

console.log(myUniqueData);
console.log(myUniqueData.size);

myUniqueData.clear();

console.log(myUniqueData);
console.log(myUniqueData.size);

/*
  - Set vs WeakSet
  "
    The WeakSet is weak,
    meaning references to objects in a WeakSet are held weakly.
    If no other references to an object stored in the WeakSet exist,
    those objects can be garbage collected.
  "
  --
  Set     => Can Store Any Data Values
  WeakSet => Collection Of Objects Only
  --
  Set     => Have Size Property
  WeakSet => Does Not Have Size Property
  --
  Set     => Have Keys, Values, Entries
  WeakSet => Does Not Have clear, Keys, Values And Entries
  --
  Set     => Can Use forEach
  WeakSet => Cannot Use forEach

  Usage: Store objects and removes them once they become inaccessible
*/

// Type Of Data

let mySet = new Set([1, 1, 1, 2, 3, "A", "A"]);

console.log(mySet);

// Size
console.log(`Size Of Elements Inside Set Is: ${mySet.size}`);

// Values + Keys [Alias For Values]
let iterator = mySet.keys();

console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next().value);
console.log(iterator.next());

// forEach

mySet.forEach((el) => console.log(el));

console.log("#".repeat(20));

// Type Of Data

let myws = new WeakSet([{ A: 1, B: 2 }]);

console.log(myws);

/*
  - Map Data Type
  Syntax: new Map(Iterable With Key/Value)
  -- Map vs Object
  --
  ------ Map => Does Not Contain Key By Default
  ------ Object => Has Default Keys
  --
  ------ Map => Key Can Be Anything [Function, Object, Any Primitive Data Types]
  ------ Object => String Or Symbol
  --
  ------ Map => Ordered By Insertion
  ------ Object => Not 100% Till Now
  --
  ------ Map => Get Items By Size
  ------ Object => Need To Do Manually
  --
  ------ Map => Can Be Directly Iterated
  ------ Object => Not Directly And Need To Use Object.keys() And So On
  --
  ------ Map => Better Performance When Add Or Remove Data
  ------ Object => Low Performance When Comparing To Map
*/

let myObject = {};
let myEmptyObject = Object.create(null);
let myMap = new Map();

console.log(myObject);
console.log(myEmptyObject);
console.log(myMap);

let myNewObject = {
  10: "Number",
  10: "String",
};

console.log(myNewObject[10]);

let myNewMap = new Map();
myNewMap.set(10, "Number");
myNewMap.set("10", "String");
myNewMap.set(true, "Boolean");
myNewMap.set({ a: 1, b: 2 }, "Object");
myNewMap.set(function doSomething() {}, "Function");

console.log(myNewMap.get(10));
console.log(myNewMap.get("10"));

console.log("####");

console.log(myNewObject);
console.log(myNewMap);

/*
  - Map Data Type
  Methods
  --- set
  --- get
  --- delete
  --- clear
  --- has

  Properties
  --- size
*/

let myMapp = new Map([
  [10, "Number"],
  ["Name", "String"],
  [false, "Boolean"],
]);

// myMap.set(10, "Number");
// myMap.set("Name", "String");

console.log(myMapp);

console.log(myMapp.get(10));
console.log(myMapp.get("Name"));
console.log(myMapp.get(false));

console.log("####");

console.log(myMapp.has("Name"));

console.log("####");

console.log(myMapp.size);

console.log(myMapp.delete("Name"));

console.log(myMapp.size);

myMapp.clear();

console.log(myMapp.size);

/*
  - Map vs WeakMap
  "
    WeakMap Allows Garbage Collector To Do Its Task But Not Map.
  "
  --
  Map     => Key Can Be Anything
  WeakMap => Key Can Be Object Only
  --
*/

let mapUser = { theName: "Elzero" };

let myyMap = new Map();

myyMap.set(mapUser, "Object Value");

mapUser = null; // Override The Reference

console.log(myyMap);

console.log("#".repeat(20));

//////////////

let wMapUser = { theName: "Elzero" };

let myWeakMap = new WeakMap();

myWeakMap.set(wMapUser, "Object Value");

wMapUser = null; // Override The Reference

console.log(myWeakMap);

/*
  Array Methods
  - Array.from(Iterable, MapFunc, This)
  --- Variable
  --- String Numbers
  --- Set
  --- Using The Map Function
  --- Arrow Function
  --- Shorten The Method + Use arguments
*/

console.log(Array.from("Osama"));
console.log(
  Array.from("12345", function (n) {
    return +n + +n;
  })
);
console.log(Array.from("12345", (n) => +n + +n));

let myArray = [1, 1, 1, 2, 3, 4];

let mysset = new Set(myArray);

console.log(Array.from(mysset));

// console.log([...new Set(myArray)]); // Future

function af() {
  return Array.from(arguments);
}

console.log(af("Osama", "Ahmed", "sayed", 1, 2, 3));

/*
  Array Methods
  - Array.copyWithin(Target, Start => Optional, End => Optional)
  "Copy Part Of An Array To Another Location in The Same Array"
  -- Any Negative Value Will Count From The End
  -- Target
  ---- Index To Copy Part To
  ---- If At Or Greater Than Array Length Nothing Will Be Copied
  -- Start
  ---- Index To Start Copying From
  ---- If Ommited = Start From Index 0
  -- End
  ---- Index To End Copying From
  ---- Not Including End
  ---- If Ommited = Reach The End
*/

let myarray = [10, 20, 30, 40, 50, "A", "B"];

// myarray.copyWithin(3); // [10, 20, 30, 10, 20, 30, 40]

// myarray.copyWithin(4, 6); // [10, 20, 30, 40, "B", "A", "B"]

// myarray.copyWithin(4, -1); // [10, 20, 30, 40, "B", "A", "B"]

// myarray.copyWithin(1, -2); // [10, "A", "B", 40, 50, "A", "B"]

myarray.copyWithin(1, -2, -1); // [10, "A", 30, 40, 50, "A", "B"]

console.log(myarray);

/*
  Array Methods
  - Array.some(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
  Using
  - Check if Element Exists In Array
  - Check If Number In Range
*/

let numss = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let myNumber = 10;

// let check = nums.some(function (e) {
//   console.log("Test");
//   return e > 5;
// });

let cheeck = numss.some(function (e) {
  return e > this;
}, myNumber);

// let check = nums.some((e) => e > 5);

console.log(cheeck);

function checkValues(arr, val) {
  return arr.some(function (e) {
    return e === val;
  });
}

console.log(checkValues(numss, 20));
console.log(checkValues(numss, 5));

let range = {
  min: 10,
  max: 20,
};

let checkNumberInRange = numss.some(function (e) {
  //  console.log(this.min);
  //  console.log(this.max);
  return e >= this.min && e <= this.max;
}, range);

console.log(checkNumberInRange);

/*
  Array Methods
  - Array.every(CallbackFunc(Element, Index, Array), This Argument)
  --- CallbackFunc => Function To Run On Every Element On The Given Array
  ------ Element => The Current Element To Process
  ------ Index => Index Of Current Element
  ------ Array => The Current Array Working With
  --- This Argument => Value To Use As This When Executing CallbackFunc
  --
*/

const locations = {
  20: "Place 1",
  30: "Place 2",
  50: "Place 3",
  40: "Place 4",
};

let mainLocation = 15;

let locationsArray = Object.keys(locations);

console.log(locationsArray);

let locationArrayNumbers = locationsArray.map((n) => +n);

console.log(locationArrayNumbers);

let checkk = locationArrayNumbers.every(function (e) {
  return e > this;
}, mainLocation);

console.log(checkk);

/*
  Spread Operator => ...Iterable
  "Allow Iterable To Expand In Place"
*/

// Spread With String => Expand String

console.log("Osama");
console.log(..."Osama");
console.log([..."Osama"]);

// Concatenate Arrays

let myArray1 = [1, 2, 3];
let myArray2 = [4, 5, 6];

let allArrays = [...myArray1, ...myArray2];
console.log(allArrays);

// Copy Array

let copiedArray = [...myArray1];
console.log(copiedArray);

// Push Inside Array

let AllFriends = ["Osama", "Ahmed", "Sayed"];
let thisYearFriends = ["Sameh", "Mahmoud"];

AllFriends.push(...thisYearFriends);

console.log(AllFriends);

// Use With Math Object

let mMyNums = [10, 20, -100, 100, 1000, 500];
console.log(Math.max(...mMyNums));

// Spread With Objects => Merge Objects

let objOne = {
  a: 1,
  b: 2,
};
let objTwo = {
  c: 3,
  d: 4,
};

console.log({ ...objOne, ...objTwo, e: 5 });

/*
  Map And Set + What You Learn => Challenge
  Requirements
  - You Cant Use Numbers Or True Or False
  - Don't Use Array Indexes
  - You Cant Use Loop
  - You Cant Use Any Higher Order Function
  - Only One Line Solution Inside Console
  - If You Use Length => Then Only Time Only
  Hints
  - You Can Use * Operator Only In Calculation
  - Set
  - Spread Operator
  - Math Object Methods
*/

let n1 = [10, 30, 10, 20];
let n2 = [30, 20, 10];

console.log([...n1, ...n2].length * Math.max(...n2)); // 210

/*
  Regular Expression
  - Email
  - IP
  - Phone
  - URL
*/

let str1 = "10 20 100 1000 5000";
let str2 = "Os1 Os12 Os123 Os123Os Os12312Os123";

let invalidEmail = "Osama@@@gmail....com";
let validEmail = "o@nn.sa";

let ip = "192.168.2.1"; // IPv4

let url = "elzero.org";
let urrl = "elzero.org/";
let urrrl = "http://elzero.org/";
let urrrrl = "http://www.elzero.org/";
let urrrrrl = "https://.elzero.org/";
let urrrrrrl = "https://www.elzero.org/";
let urrrrrrrl = "https://www.elzero.org/?facebookid=asdasdasd";

/*
  Regular Expression

  Syntax
  /pattern/modifier(s);
  new RegExp("pattern", "modifier(s)")

  Modifiers => Flags
  i => case-insensitive
  g => global
  m => Multilines

  Search Methods
  - match(Pattern)

  Match
  -- Matches A String Against a Regular Expression Pattern
  -- Returns An Array With The Matches
  -- Returns null If No Match Is Found.
*/

let mystring = "Hello Elzero Web School I Love elzero";

let regex = /elzero/gi;

console.log(mystring.match(regex));

/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/

let tld = "Com Net Org Info Code Io";
let tldRe = /(info|org|io)/gi;
console.log(tld.match(tldRe));

let numsx = "12345678910";
let numsRe = /[0-2]/g;
console.log(numsx.match(numsRe));

let notNums = "12345678910";
let notNsRe = /[^0-2]/g;
console.log(notNums.match(notNsRe));

let specialNums = "1!2@3#4$5%678910";
let specialNumsRe = /[^0-9]/g;
console.log(specialNums.match(specialNumsRe));

let practice = "Os1 Os1Os Os2 Os8 Os8Os";
let practiceRe = /Os[5-9]Os/g;
console.log(practice.match(practiceRe));

/*
  Regular Expression

  Ranges

  - Part 1
  (X|Y) => X Or Y
  [0-9] => 0 To 9
  [^0-9] => Any Character Not 0 To 9
  Practice

  - Part 2
  [a-z]
  [^a-z]
  [A-Z]
  [^A-Z]
  [abc]
  [^abc]

*/

let MyString = "AaBbcdefG123!234%^&*";
let atozSmall = /[a-z]/g;
let NotAtozSmall = /[^a-z]/g;
let atozCapital = /[A-Z]/g;
let NotAtozCapital = /[^A-Z]/g;
let aAndcAnde = /[ace]/g;
let NotaAndcAnde = /[^ace]/g;
let lettersCapsAndSmall = /[a-zA-Z]/g;
let numsAndSpecials = /[^a-zA-Z]/g;
let specials = /[^a-z^A-Z0-9]/g;
console.log(MyString.match(atozSmall));
console.log(MyString.match(NotAtozSmall));
console.log(MyString.match(atozCapital));
console.log(MyString.match(NotAtozCapital));
console.log(MyString.match(aAndcAnde));
console.log(MyString.match(NotaAndcAnde));
console.log(MyString.match(lettersCapsAndSmall));
console.log(MyString.match(numsAndSpecials));
console.log(MyString.match(specials));

/*
  Regular Expression
  Character Classes
  . => matches any character, except newline or other line terminators.
  \w => matches word characters. [a-z, A-Z, 0-9 And Underscore]
  \W => matches Non word characters
  \d => matches digits from 0 to 9.
  \D => matches non-digit characters.
  \s => matches whitespace character.
  \S => matches non whitespace character.
*/

let email = "O@@@g...com O@g.com O@g.net A@Y.com O-g.com o@s.org 1@1.com";
let dot = /./g;
let word = /\W/g;
let valid = /\w@\w.(com|net)/g;
console.log(email.match(dot));
console.log(email.match(word));
console.log(email.match(valid));

/*
  Regular Expression
  Character Classes
  \b => matches at the beginning or end of a word.
  \B => matches NOT at the beginning/end of a word.

  Test Method
  pattern.test(input)
*/

let nAmes = "Sayed 1Spam 2Spam 3Spam Spam4 Spam5 Osama Ahmed Aspamo";
let re = /(\bspam|spam\b)/gi;
console.log(nAmes.match(re));

console.log(re.test(nAmes));
console.log(/(\bspam|spam\b)/gi.test("Osama"));
console.log(/(\bspam|spam\b)/gi.test("1Spam"));
console.log(/(\bspam|spam\b)/gi.test("Spam1"));

/*
  Regular Expression

  Quantifiers
  n+    => One Or More
  n*    => zero or more
  n?    => zero or one
*/

let mails = "o@nn.sa osama@gmail.com elzero@gmail.net osama@mail.ru"; // All Emails
// let mailsRe = /\w+@\w+.(com|net)/ig;
let mailsRe = /\w+@\w+.\w+/gi;
console.log(mails.match(mailsRe));

let numSs = "0110 10 150 05120 0560 350 00"; // 0 Numbers Or No 0
let numSRe = /0\d*0/gi;
console.log(numSs.match(numSRe));

let urls = "https://google.com http://www.website.net web.com"; // http + https
let urlsRe = /(https?:\/\/)?(www.)?\w+.\w+/gi;
console.log(urls.match(urlsRe));

/*
  Regular Expression

  Quantifiers
  n{x}   => Number of
  n{x,y} => Range
  n{x,}  => At Least x
*/

let serials = "S100S S3000S S50000S S950000S";

console.log(serials.match(/s\d{3}s/gi)); // S[Three Number]S
console.log(serials.match(/s\d{4,5}s/gi)); // S[Four Or Five Number]S
console.log(serials.match(/s\d{4,}s/gi)); // S[At Least Four]S

/*
  Regular Expression

  Quantifiers
  $  => End With Something
  ^  => Start With Something
  ?= => Followed By Something
  ?! => Not Followed By Something
*/

let myStrring = "We Love Programming";
let namees = "1OsamaZ 2AhmedZ 3Mohammed 4MoustafaZ 5GamalZ";

console.log(/ing$/gi.test(myStrring));
console.log(/^we/gi.test(myStrring));
console.log(/lz$/gi.test(namees));
console.log(/^\d/gi.test(namees));

console.log(namees.match(/\d\w{5}(?=Z)/gi));
console.log(namees.match(/\d\w{8}(?!Z)/gi));

/*
  Regular Expression

  - replace
  - replaceAll
*/

let txt = "We Love Programming And @ Because @ Is Amazing";
console.log(txt.replace("@", "JavaScript"));
console.log(txt.replaceAll("@", "JavaScript"));
let reg = /@/gi;
console.log(txt.replaceAll(reg, "JavaScript"));
console.log(txt.replaceAll(/@/gi, "JavaScript"));

/*
  Regular Expression
  - Input Form Validation Practice
*/

document.getElementById("register").onsubmit = function () {
  let phoneInput = document.getElementById("phone").value;
  let phoneRe = /\(\d{4}\)\s\d{3}-\d{4}/; // (1234) 567-8910
  let validationResult = phoneRe.test(phoneInput);
  if (validationResult === false) {
    return false;
  }
  return true;
};

/*
  Regular Expression
  - Challenge
*/

let url1 = "elzero.org";
let url2 = "http://elzero.org";
let url3 = "https://elzero.org";
let url4 = "https://www.elzero.org";
let url5 = "https://www.elzero.org:8080/articles.php?id=100&cat=topics";

let ree =
  /(https?:\/\/)?(www.)?\w+.org((:?(\d{4})?\/\w{8}.\w{3}\?\w{2}\=\d{3}\&\w{3}\=\w{6})?)?/;

console.log(url1.match(ree));
console.log(url2.match(ree));
console.log(url3.match(ree));
console.log(url4.match(ree));
console.log(url5.match(ree));
/*
  Constructor Function
*/

class Usseer {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary + 1000;
  }
}

let userOne = new Usseer(100, "Elzero", 5000);
let userTwo = new Usseer(101, "Hassan", 6000);
let userThree = new Usseer(102, "Sayed", 7000);

console.log(userOne.i);
console.log(userOne.u);
console.log(userOne.s);

console.log(userTwo.i);
console.log(userTwo.u);
console.log(userTwo.s);

console.log(userThree.i);
console.log(userThree.u);
console.log(userThree.s);

console.log(userOne instanceof Usseer);
console.log(userOne.constructor === Usseer);

// const userOne = {
//   id: 100,
//   username: "Elzero",
//   salary: 5000,
// };

// const userTwo = {
//   id: 101,
//   username: "Hassan",
//   salary: 6000,
// };

// const userThree = {
//   id: 102,
//   username: "Sayed",
//   salary: 7000,
// };

/*
  Constructor Function
  - Deal With Properties And Methods
*/

class Usser {
  constructor(id, username, salary) {
    // Properties
    this.i = id;
    this.u = username || "Unknown";
    this.s = salary < 6000 ? salary + 500 : salary;
    this.msg = function () {
      return `Hello ${this.u} Your Salary Is ${this.s}`;
    };
  }
  // Methods
  writeMsg() {
    return `Hello ${this.u} Your Salary Is ${this.s}`;
  }
}

let userOnee = new Usser(100, "Elzero", 5000);
let userTwoo = new Usser(101, "", 6000);

console.log(userOnee.u);
console.log(userOnee.s);
console.log(userOnee.msg());
console.log(userOnee.writeMsg());

console.log(userTwoo.u);
console.log(userTwoo.s);
console.log(userTwoo.msg); // Native Code
console.log(userTwoo.writeMsg); // Native Code

/*
  Constructor Function
  - Update Properties
  - Built In Constructors
*/

class Useer {
  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
  }
  updateName(newName) {
    this.u = newName;
  }
}

let useerOne = new Useer(100, "Elzero", 5000);

console.log(useerOne.u);
useerOne.updateName("Osama");
console.log(userOne.u);

let strOne = "Elzero";
let strTwo = new String("Elzero");

console.log(typeof strOne);
console.log(typeof strTwo);

console.log(strOne instanceof String);
console.log(strTwo instanceof String);

console.log(strOne.constructor === String);
console.log(strTwo.constructor === String);

/*
  Class
  - Static Properties And Methods
*/

class Userr {
  // Static Property
  static count = 0;

  constructor(id, username, salary) {
    this.i = id;
    this.u = username;
    this.s = salary;
    Userr.count++;
  }

  // Static Methods
  static sayHello() {
    return `Hello From Class`;
  }
  static countMembers() {
    return `${this.count} Members Created`;
  }
}

let userOnne = new Userr(100, "Elzero", 5000);
let userTwwo = new Userr(101, "Ahmed", 5000);
let userThrree = new Userr(102, "Sayed", 5000);

console.log(userOnne.u);
console.log(userTwwo.u);
console.log(userOnne.count);
console.log(Userr.count);
console.log(Userr.sayHello());
console.log(Userr.countMembers());

/*
  Class
  - Inheritance
*/

// Parent Class
class Uuser {
  constructor(id, username) {
    this.i = id;
    this.u = username;
  }
  sayHello() {
    return `Hello ${this.u}`;
  }
}

// Derived Class
class Admin extends Uuser {
  constructor(id, username, permissions) {
    super(id, username);
    this.p = permissions;
  }
}

class Superman extends Admin {
  constructor(id, username, permissions, ability) {
    super(id, username, permissions);
    this.a = ability;
  }
}

let userone = new Uuser(100, "Elzero");
let adminOne = new Admin(110, "Mahmoud", 1);

console.log(userone.u);
console.log(userone.sayHello());
console.log("####");
console.log(adminOne.i);
console.log(adminOne.u);
console.log(adminOne.p);
console.log(adminOne.sayHello());
////////////////////////////////////////////////////////
class Person {
  //private propertiy
  #firstName;
  #secondName;
  #gender;
  #email;
  constructor(fName, sName, gender, email) {
    this.#firstName = fName;
    this.#secondName = sName;
    this.#gender = gender;
    this.#email = email;
  }
  // set and get  for firstName
  setFirstName(fName) {
    this.#firstName = fName;
  }
  getFirstName() {
    return this.#firstName;
  }

  // set and get  for secondName
  setSecondName(sName) {
    this.#secondName = sName;
  }
  getSecondName() {
    return this.#secondName;
  }
  // get  for fullName
  getFullName() {
    return this.#firstName + " " + this.#secondName;
  }

  // set and get  for Gender
  setGender(gender) {
    this.#gender = gender;
  }
  getGender() {
    return this.#gender;
  }

  // set and get  for email
  setEmail(email) {
    this.#email = email;
  }
  getEmail() {
    return this.#email;
  }
}

class Employee extends Person {
  #id;
  #dep;
  #phone;
  constructor(id, fName, sName, gender, email, dep, phone) {
    super(fName, sName, gender, email);
    this.#id = id;
    this.#dep = dep;
    this.#phone = phone;
  }

  // set and get  for dep
  setDepartment(dep) {
    this.#dep = dep;
  }
  getDepartment() {
    return this.#dep;
  }

  // set and get  for phone
  setPhone(phone) {
    this.#phone = phone;
  }
  getphone() {
    return this.#phone;
  }
}
let employee1 = new Employee(
  1001,
  "Ahmed",
  "Aksam",
  "male",
  "ahmed@madkour.com",
  "IT",
  "01020133975"
);
console.log(`Hello ${employee1.getFullName()}`);
console.log(Employee.prototype);
console.log(employee1);
Employee.prototype.getId = function () {
  return this.id;
};

console.log(Employee.prototype);
/*
  Object Meta Data And Descriptor
  - writable
  - enumerable
  - configurable [Cannot Delete Or Reconfigure]
*/

const myobject = {
  a: 1,
  b: 2,
};

Object.defineProperty(myobject, "c", {
  writable: true, // for  enable to update value of property
  enumerable: true, // for enable loop
  configurable: true, //to avoid Cannot redefine property
  value: 3,
});

// Object.defineProperty(myobject, "c", {
//   writable: false,
//   enumerable: true,
//   configurable: true, <= Cannot redefine property
//   value: 3,
// });

myobject.c = 100;

console.log(delete myobject.c);

for (let prop in myobject) {
  console.log(prop, myobject[prop]);
}

console.log(myobject);
/*
  Object Meta Data And Descriptor
  - Define Multiple Properties
  - Check Descriptors
*/

Object.defineProperties(myobject, {
  f: {
    configurable: true,
    value: 3,
  },
  d: {
    configurable: true,
    value: 4,
  },
  e: {
    configurable: true,
    value: 5,
  },
});

console.log(myobject);

console.log(Object.getOwnPropertyDescriptor(myobject, "d"));
console.log(Object.getOwnPropertyDescriptors(myobject));

/*
  Date And Time
  - Date Constructor

  Static Methods
  - Date.now()

  - To Track Time You Need Starting Point
  - Epoch Time Or Unix Time In Computer Science Is The Number of Seconds Since January 1, 1970.
  - Why 1970 [829 Days To 136 Years]

  Search For
  - Year 2038 Problem in Computer Science.
*/

let dateNow = new Date();

console.log(dateNow);

console.log(Date.now()); // 1000 Mill = 1 Second

let seconds = Date.now() / 1000; // Number Of Seconds
console.log(`Seconds ${seconds}`);

let minutes = seconds / 60; // Number Of Minutes
console.log(`Minutes ${minutes}`);

let hours = minutes / 60; // Number Of Hours
console.log(`Hours ${hours}`);

let days = hours / 24; // Number Of Days
console.log(`Days ${days}`);

let years = days / 365; // Number Of Years
console.log(`Years ${years}`);

/*
  Date And Time
  - getTime() => Number Of Milliseconds
  - getDate() => Day Of The Month
  - getFullYear()
  - getMonth() => Zero Based
  - getDay() => Day Of The Week
  - getHours()
  - getMinutes()
  - getSeconds()
*/

let birthday = new Date("Aug 17, 99");
let dateDiff = dateNow - birthday;

console.log(dateDiff);
console.log(dateDiff / 1000 / 60 / 60 / 24 / 365);

console.log(dateNow);
console.log(dateNow.getTime());
console.log(dateNow.getDate());
console.log(dateNow.getFullYear());
console.log(dateNow.getMonth());
console.log(dateNow.getDay());
console.log(dateNow.getHours());
console.log(dateNow.getMinutes());
console.log(dateNow.getSeconds());
console.log(
  `${dateNow.getHours()}:${dateNow.getMinutes()}:${dateNow.getSeconds()}`
);
/*
  Date And Time
  - setTime(Milliseconds)
  - setDate() => Day Of The Month [Negative And Positive]
  - setFullYear(year, month => Optional [0-11], day => Optional [1-31])
  - setMonth(Month [0-11], Day => Optional [1-31]) [Negative And Positive]
  - setHours(Hours [0-23], Minutes => Optional [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setMinutes(Minutes [0-59], Seconds => Optional [0-59], MS => Optional [0-999])
  - setSeconds(Seconds => [0-59], MS => Optional [0-999])
*/

console.log(dateNow);

console.log("#".repeat(66));

// dateNow.setTime(0);
// console.log(dateNow);

// console.log("#".repeat(66));

// dateNow.setTime(10000);
// console.log(dateNow);

// console.log("#".repeat(66));

// dateNow.setDate(35);
// console.log(dateNow);

// dateNow.setFullYear(2020, 13);
// console.log(dateNow);

dateNow.setMonth(17);
console.log(dateNow);

/*
  Date And Time

  new Date(timestamp)
  new Date(Date String)
  new Date(Numeric Values)

  Format
  - "Oct 25 1982"
  - "10/25/1982"
  - "1982-10-25" => ISO International Standard
  - "1982 10"
  - "1982"
  - "82"
  - 1982, 9, 25, 2, 10, 0
  - 1982, 9, 25
  - "1982-10-25T06:10:00Z"

  Date.parse("String") // Read Date From A String
*/

console.log(Date.parse("Oct 25 1982"));

let date1 = new Date(0);
console.log(date1);

let date2 = new Date(404344800000);
console.log(date2);

let date3 = new Date("10-25-1982");
console.log(date3);

let date4 = new Date("1982-10-25");
console.log(date4);

let date5 = new Date("1982-10");
console.log(date5);

let date6 = new Date("82");
console.log(date6);

let date7 = new Date(1982, 9, 25, 2, 10, 0);
console.log(date7);

let date8 = new Date(1982, 9, 25);
console.log(date8);

let date9 = new Date("1982-10-25T06:10:00Z");
console.log(date9);
/*
  Date And Time
  - Track Operations Time

  Search
  - performance.now()
  - performance.mark()
*/

// Start Time
let start = new Date();

// Operation
// for (let i = 0; i < 100000; i++) {
//   // document.write(`<div>${i}</div>`);
//   let div = document.createElement("div");
//   div.appendChild(document.createTextNode(i));
//   document.body.appendChild(div);
// }

// Time End
let end = new Date();

// Operation Duration
let duration = end - start;

console.log(duration);

/*
  Generators
  - Generator Function Run Its Code When Required.
  - Generator Function Return Special Object [Generator Object]
  - Generators Are Iterable
*/

function* generateNumbers() {
  yield 1;
  console.log("Hello After Yield 1");
  yield 2;
  yield 3;
  yield 4;
}

let generator = generateNumbers();

console.log(typeof generator);
console.log(generator);

console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());
console.log(generator.next());

for (let value of generateNumbers()) {
  console.log(value);
}

for (let value of generator) {
  console.log(value);
}

/*
  Generators
  - Delegate Generator
*/

function* generateNums() {
  yield 1;
  yield 2;
  // return("Ahmed")
  yield 3;
}

function* generateLetters() {
  yield "A";
  yield "B";
  yield "C";
}

function* generateAll() {
  yield* generateNums();
  yield* generateLetters();
  yield* [4, 5, 6];
}

let geNerator = generateAll();

console.log(geNerator.next());
console.log(geNerator.next());
console.log(geNerator.next());
console.log(geNerator.next());
console.log(geNerator.next());
console.log(geNerator.next());
console.log(geNerator.return("Zar"));
console.log(geNerator.next());
console.log(geNerator.next());
console.log(geNerator.next());
/*
  Modules
  - Import And Export
*/

let ar = 10;
let arr = [1, 2, 3, 4];

function saySomething() {
  return `Something`;
}

export { ar, arr, saySomething };

/*
  What Is JSON ?
  - JavaScript Object Notation
  - Format For Sharing Data Between Server And Client
  - JSON Derived From JavaScript
  - Alternative To XML
  - File Extension Is .json

  Why JSON ?
  - Easy To Use And Read
  - Used By Most Programming Languages And Its Frameworks
  - You Can Convert JSON Object To JS Object And Vice Versa

  JSON vs XML
  ===================================================
  = Text Based Format      = Markup Language        =
  = Lightweight            = Heavier                =
  = Does Not Use Tags      = Using Tags             =
  = Shorter                = Not Short              =
  = Can Use Arrays         = Cannot Use Arrays      =
  = Not Support Comments   = Support Comments       =
  ===================================================
*/

/*
  JSON
  - JSON.parse => Convert Text Data To JS Object
  - JSON.stringify => Convert JS Object To JSON
*/

// Get From Server
const myJsonObjectFromServer = '{"Username": "Osama", "Age": 39}';
console.log(typeof myJsonObjectFromServer);
console.log(myJsonObjectFromServer);

// Convert To JS Object
const myJsObject = JSON.parse(myJsonObjectFromServer);
console.log(typeof myJsObject);
console.log(myJsObject);

// Update Data
myJsObject["Username"] = "Elzero";
myJsObject["Age"] = 40;

// Send To Server
const myJsonObjectToServer = JSON.stringify(myJsObject);
console.log(typeof myJsonObjectToServer);
console.log(myJsonObjectToServer);

/*
  To Understand Ajax, Fetch, Promises

  Asynchronous vs Synchronous Programming
  - Meaning

  Synchronous
  - Operations Runs in Sequence
  - Each Operation Must Wait For The Previous One To Complete
  - Story From Real Life

  Asynchronous
  - Operations Runs In Parallel
  - This Means That An Operation Can Occur while Another One Is Still Being Processed
  - Story From Real Life

  - Facebook As Example
  - Simulation

  Search
  - JavaScript Is A Single-Threaded
  - Multi Threaded Languages
*/

// Synchronous

// console.log("1");
// console.log("2");
// window.alert("Operation");
// console.log("3");

// Asynchronous
console.log("1");
console.log("2");
setTimeout(() => console.log("Operation"), 500);
console.log("3");

/*
  To Understand Ajax, Fetch, Promises

  Call Stack || Stack Trace
  -- JavaScript Engine Uses A Call Stack To Manage Execution Contexts
  -- Mechanism To Make The Interpreter Track Your Calls
  -- When Function Called It Added To The Stack
  -- When Function Executed It Removed From The Stack
  -- After Function Is Finished Executing The Interpreter Continue From The Last Point
  -- Work Using LIFO Principle => Last In First Out
  -- Code Execution Is Synchronous.
  -- Call Stack Detect Web API Methods And Leave It To The Browser To Handle It

  Web API
  -- Methods Available From The Environment => Browser
*/

setTimeout(() => {
  console.log("Web API");
}, 0);

function One() {
  console.log("One");
}
function Two() {
  One();
  console.log("Two");
}
function Three() {
  Two();
  console.log("Three");
}

Three();

/*
=================================
console.log("One");
=================================
function one() {
  console.log("One");
}
=================================
function two() {
  one();
  console.log("Two");
}
=================================
function three() {
  two();
  console.log("Three");
}
=================================
*/

console.log("#####");
console.log("One");
console.log("Two");
console.log("Three");

/*
  Ajax
  - Ready State => Status Of The Request
  [0] Request Not Initialized
  [1] Server Connection Established
  [2] Request Received
  [3] Processing Request
  [4] Request Is Finished And Response Is Ready
  - Status
  [200] Response Is Successful
  [404] Not Found
*/

let myRequest = new XMLHttpRequest();
myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
myRequest.send();
console.log(myRequest);

myRequest.onreadystatechange = function () {
  // console.log(myRequest.readyState);
  // console.log(myRequest.status);
  if (this.readyState === 4 && this.status === 200) {
    console.log(this.responseText);
  }
};
/*
  Ajax
  Loop On Data

  Search
  - Cross Origin API [CORS]
  - API Authentication
*/

myRequest.open("GET", "https://api.github.com/users/elzerowebschool/repos");
myRequest.send();
myRequest.onreadystatechange = function () {
  if (this.readyState === 4 && this.status === 200) {
    // console.log(this.responseText);
    let jsData = JSON.parse(this.responseText);
    // console.log(jsData);
    for (let i = 0; i < jsData.length; i++) {
      let div = document.createElement("div");
      let repoName = document.createTextNode(jsData[i].full_name);
      div.appendChild(repoName);
      document.body.appendChild(div);
    }
  }
};

/*
  To Understand Ajax, Fetch, Promises

  Pyramid Of Doom || Callback Hell

  - What Is Callback
  - Callback Hell Example

  What Is Callback
  - A Function That Is Passed Into Another One As An Argument To Be Executed Later
  - Function To Handle Photos
  --- [1] Download Photo From URL
  --- [2] Resize Photo
  --- [3] Add Logo To The Photo
  --- [4] Show The Photo In Website
*/

function makeItRed(e) {
  e.target.style.color = "red";
}

let p = document.querySelector(".test");
p.addEventListener("click", makeItRed);

function iamACallback() {
  console.log("Iam A Callback Function");
}

setTimeout(iamACallback, 2000);

setTimeout(() => {
  console.log("Download Photo From URL");
  setTimeout(() => {
    console.log("Resize Photo");
    setTimeout(() => {
      console.log("Add Logo To The Photo");
      setTimeout(() => {
        console.log("Show The Photo In Website");
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);

/*
  Promise Intro And Syntax
  - Promise In JavaScript Is Like Promise In Real Life
  - Promise Is Something That Will Happen In The Future
  - Promise Avoid Callback Hell
  - Promise Is The Object That Represent The Status Of An Asynchronous Operation And Its Resulting Value

  - Promise Status
  --- Pending: Initial State
  --- Fulfilled: Completed Successfully
  --- Rejected: Failed

  Story
  - Once A Promise Has Been Called, It Will Start In A Pending State
  - The Created Promise Will Eventually End In A Resolved State Or In A Rejected State
  - Calling The Callback Functions (Passed To Then And Catch) Upon Finishing.

  - Then
  --- Takes 2 Optional Arguments [Callback For Success Or Failure]
*/

// const myPromise = new Promise((resolveFunction, rejectFunction) => {
//   let connect = false;
//   if (connect) {
//     resolveFunction("Connection Established");
//   } else {
//     rejectFunction(Error("Connection Failed"));
//   }
// }).then(
//   (resolveValue) => console.log(`Good ${resolveValue}`),
//   (rejectValue) => console.log(`Bad ${rejectValue}`)
// );

const myPromise = new Promise((resolve, reject) => {
  let connect = true;
  if (connect) {
    resolve("Connection Established");
  } else { 
    reject(Error("Connection Failed"));
  }
});

console.log(myPromise);

let resolver = (resolveValue) => console.log(`Good ${resolveValue} t1`)
let rejecter = (rejectValue) => console.log(Error(`Bad ${rejectValue} f1`))

myPromise.then(resolver, rejecter);

myPromise.then(
  (resolveValue) => console.log(`Good ${resolveValue} t2`),
  (rejectValue) => console.log(Error(`Bad ${rejectValue} f2`))
);

myPromise.then(
  (resolveValue) => console.log(`Good ${resolveValue} t3`),
  (rejectValue) => console.log(Error(`Bad ${rejectValue} f3`))
);

/*
  Promise Training

  We Will Go To The Meeting, Promise Me That We Will Find The 4 Employees
  .then(We Will Choose Two People)
  .then(We Will Test Them Then Get One Of Them)
  .catch(No One Came)

  Then    => Promise Is Successfull Use The Resolved Data
  Catch   => Promise Is Failed, Catch The Error
  Finally => Promise Successfull Or Failed Finally Do Something
*/

const myPromisee = new Promise((resolveFunction, rejectFunction) => {
  let employees = ["ahmed","samy","mahmoud","rawda"];
  if (employees.length === 4) {
    resolveFunction(employees);
  } else {
    rejectFunction(Error("Number Of Employees Is Not 4"));
  }
});

myPromisee
  .then((resolveValue) => {
    resolveValue.length = 2;
    return resolveValue;
  })
  .then((resolveValue) => {
    resolveValue.length = 1;
    return resolveValue;
  })
  .then((resolveValue) => {
    console.log(`The Choosen Emplyee Is ${resolveValue}`);
  })
  .catch((rejectedReason) => console.log(rejectedReason))
  .finally(console.log("The Operation Is Done"));

  /*
  Promise And XHR
*/

const getData = (apiLink) => {
  return new Promise((resolve, reject) => {
    let myRequest = new XMLHttpRequest();
    myRequest.onload = function () {
      if (this.readyState === 4 && this.status === 200) {
        console.log("this.status === 200")
        resolve(JSON.parse(this.responseText));
      } else {
        reject(Error("No Data Found"));
      }
    };

    myRequest.open("GET", apiLink);
    myRequest.send();
  });
};

getData("https://api.github.com/users/elzerowebschool/repos")
  .then((result) => {
    result.length = 10;
    return result;
  })
  .then((result) => console.log(result[9].name))
  .catch((rej) => console.log(rej));

  console.log('########################################')

  /*
  Fetch API
  - Return A Representation Of the Entire HTTP Response
*/

fetch("https://api.github.com/users/elzerowebschool/repos")
.then((result) => {
  console.log("successfull fetch");
  console.log(`MY FETCH DATA IS ${result}`);
  console.log(result);
 
  let myData = result.json();
  console.log(`MY JASON DATA IS ${myData}`);
  console.log(myData);
  return myData;
})
.then((full) => {
  full.length = 10;
  return full;
})
.then((ten) => {
  console.log(ten[0].name);
}
)
.catch(() => console.log(Error("No Data Found 4ROM FETCH")));

// const getData = (apiLink) => {
//   return new Promise((resolve, reject) => {
//     let myRequest = new XMLHttpRequest();
//     myRequest.onload = function () {
//       if (this.readyState === 4 && this.status === 200) {
//         resolve(JSON.parse(this.responseText));
//       } else {
//         reject(Error("No Data Found"));
//       }
//     };

//     myRequest.open("GET", apiLink);
//     myRequest.send();
//   });
// };

// getData("https://api.github.com/users/elzerowebschool/repos")
//   .then((result) => {
//     result.length = 10;
//     return result;
//   })
//   .then((result) => console.log(result[0].name))
//   .catch((rej) => console.log(rej));


console.log('########################################')

/*
  Promise
  - All
  - All Settled
  - Race
*/

const myFirstPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Iam The First Promise");
  }, 5000);
});

const mySecondPromise = new Promise((res, rej) => {
  setTimeout(() => {
    rej("Iam The Second Promise");
  }, 1000);
});

const myThirdPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("Iam The Third Promise");
  }, 2000);
});

// Promise.all([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );

// Promise.allSettled([myFirstPromise, mySecondPromise, myThirdPromise]).then(
//   (resolvedValues) => console.log(resolvedValues),
//   (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
// );

Promise.race([myFirstPromise, mySecondPromise, myThirdPromise]).then(
  (resolvedValues) => console.log(resolvedValues),
  (rejectedValue) => console.log(`Rejected: ${rejectedValue}`)
);








  /*
  Async
  - Async Before Function Mean This Function Return A Promise
  - Async And Await Help In Creating Asynchronous Promise Behavior With Cleaner Style
*/

// function getData() {
//   return new Promise((res, rej) => {
//     let users = [];
//     if (users.length > 0) {
//       res("Users Found");
//     } else {
//       rej("No Users Found");
//     }
//   });
// }

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );

// function getData() {
//   let users = ["Osama"];
//   if (users.length > 0) {
//     return Promise.resolve("Users Found");
//   } else {
//     return Promise.reject("No Users Found");
//   }
// }

// getData().then(
//   (resolvedValue) => console.log(resolvedValue),
//   (rejectedValue) => console.log("Rejected " + rejectedValue)
// );

async function getDataa() {
  let users = ["sedaar"];
  if (users.length > 0) {
    return "Users Found";
  } else {
    throw new Error("No Users Found");
  }
}

console.log(getDataa());

getDataa().then(
  (resolvedValue) => console.log(resolvedValue),
  (rejectedValue) => console.log("Rejected " + rejectedValue)
);




/*
  Await
  - Await Works Only Inside Asnyc Functions
  - Await Make JavaScript Wait For The Promise Result
  - Await Is More Elegant Syntax Of Getting Promise Result
*/

const myPromisSe = new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve("Iam The Good Promise");
    reject(Error("Iam The Bad Promise"));
  }, 3000);
});

async function readData() {
  console.log("Before Promise");
  // myPromisSe.then((resolvedValue) => console.log(resolvedValue));
  // console.log(await myPromiSse);
  console.log(await myPromisSe.catch((err) => err));
  console.log("After Promise");
}

readData();




/*
  Async & Await With Try, Catch, Finally
*/

const mypromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Iam The Good Promise");
  }, 3000);
});

// async function readData() {
//   console.log("Before Promise");
//   try {
//     console.log(await mypromise);
//   } catch (reason) {
//     console.log(`Reason: ${reason}`);
//   } finally {
//     console.log("After Promise");
//   }
// }

// readData();

// "https://api.github.com/users/elzerowebschool/repos"

async function fetchData() {
  console.log("Before Fetch");
  try {
    let myData = await fetch("https://api.github.com/users/elzerowebschool/repos");
    console.log(await myData.json());
  } catch (reason) {
    console.log(`Reason: ${reason}`);
  } finally {
    console.log("After Fetch");
  }
}

fetchData();