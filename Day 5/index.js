// loops in js

// for loop
function forLoop() {
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
}

// while loop
function whileLoop() {
    let i = 0;
    while (i < 5) {
        console.log(i);
        i++;
    }
}

// do while loop
function doWhileLoop() {
    let j = 0;
    do {
        console.log(j);
        j++;
    } while (j < 5);
}

// break statement
function breakStatement() {
    for (let i = 0; i < 5; i++) {
        if (i === 3) {
            break;
        }
        console.log(i);
    }
}

// continue statement
function continueStatement() {
    for (let i = 0; i < 5; i++) {
        if (i === 3) {
            continue;
        }
        console.log(i);
    }
}

// program to display mul table of a number
function mulTable() {
    let num = +prompt("Enter a number: ");
    for (let i = 1; i <= 10; i++) {
        console.log(`${num} x ${i} = ${num * i}`);
    }
}

// program to print the fibonacci series
function fibonacciSeries() {
    let num1 = 0;
    let num2 = 1;
    let limit = +prompt("Enter the limit: ");
    console.log("Fibonacci Series:");
    for (let i = 0; i < limit; i++) {
        console.log(num1);
        let sum = num1 + num2;
        num1 = num2;
        num2 = sum;
    }
}
