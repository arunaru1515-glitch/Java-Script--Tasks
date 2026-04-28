// Level 1 – Functions Basics
// Task 1: Student Form Function

console.log("\nLevel 1 - Functions Basics");
console.log("\nTask 1: Student Form Function");

function studentForm(name, age, course) {
    console.log("Name:", name);
    console.log("Age:", age);
    console.log("Course:", course);
}

studentForm("Naveen", 22, "MERN");

// output :
// Name: Naveen
// Age: 22
// Course: MERN



// Task 2: Calculator Function


console.log("\nTask 2: Calculator Function");

function calc(a, b) {
    console.log("Addition:", a + b);
    console.log("Subtraction:", a - b);
    console.log("Multiplication:", a * b);
}

calc(10, 5);

// Output:
// Addition: 15
// Subtraction: 5
// Multiplication: 50



// Task 3: Reusable Greeting


console.log("\nTask 3: Reusable Greeting");

function greet(name) {
    console.log("Hello", name);
}

greet("Kamal");
greet("Praveen");
greet("Sai");

// Output:
// Hello Kamal
// Hello Praveen
// Hello Sai



// Level 2 – Return & Scope
// Task 4: Return Value

console.log("\nLevel 2 - Return & Scope");
console.log("\nTask 4: Return Value");

function square(num) {
    return num * num;
}

console.log(square(5));

// Output:
// 25


// Task 5: Scope Check

console.log("\nTask 5: Scope Check");

function testScope() {
    let secret = "javascript";
    console.log("Inside:", secret);
}

testScope();

// console.log(secret); // if you type outside the function, it will give an error

// Output:
// Inside: javascript
// (outside access gives error)



// Level 3 – Spread / Rest
// Task 6: Merge Arrays


console.log("\nLevel 3 - Spread / Rest");
console.log("\nTask 6: Merge Arrays");

let boys = ["car", "bike"];
let girls = ["doll", "teddy"];

let result = [...boys, ...girls];
console.log(result);

// Output:
// ["car", "bike", "doll", "teddy"]



// Task 7: Unlimited Numbers

console.log("\nTask 7: Unlimited Numbers");

function sumAll(...nums) {
    let sum = 0;
    for (let n of nums) {
        sum += n;
    }
    return sum;
}

console.log(sumAll(10, 20, 30, 40));

// Output:
// 100



// Level 4 – Destructuring
// Task 8: Array Destructuring

console.log("\nLevel 4 - Destructuring");
console.log("\nTask 8: Array Destructuring");

let colors = ["red", "green", "blue"];

let [c1, c2, c3] = colors;

console.log(c1, c2, c3);

// Output:
// red green blue


// Task 9: Object Destructuring

console.log("\nTask 9: Object Destructuring");

let emp = {
    name: "Naveen",
    role: "Developer",
    salary: "5LPA"
};

let { name, role } = emp;

console.log(name, role);

// Output:
// Naveen Developer


// Level 5 – Real-Time Logic
// Task 10: Offer Generator

console.log("\nLevel 5 - Real-Time Logic");
console.log("\nTask 10: Offer Generator");

function* offerGenerator() {
    yield "10% cashback";
    yield "20% cashback";
    yield "50% cashback";
    yield "Try again";
    return "No more offers";
}

let gen = offerGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

// Output:
// 10% cashback
// 20% cashback
// 50% cashback
// Try again
// No more offers



// Level 6 – Advanced
// Task 11: Curry Function

console.log("\nLevel 6 - Advanced");
console.log("\nTask 11: Curry Function");

function add(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(add(10)(20)(30));

// Output:
// 60



// Task 12: Student Marks Analyzer

console.log("\nTask 12: Student Marks Analyzer");

function marksAnalyzer(...nums) {
    let total = nums.reduce((sum, n) => sum + n, 0);
    let avg = total / nums.length;

    console.log("Total =", total);
    console.log("Average =", avg);
}

marksAnalyzer(80, 90, 70, 60);

// Output:
// Total = 300
// Average = 75




// Challenge Task – Real Company Level


console.log("\nChallenge Task - Real Company Level");

function register(name, role, ...skills) {
    console.log("Name:", name);
    console.log("Role:", role);
    console.log("Skills:", skills.join(" "));
}

register("Naveen", "Frontend", "HTML", "CSS", "JS", "React");

// Output:
// Name: Naveen
// Role: Frontend
// Skills: HTML CSS JS React






