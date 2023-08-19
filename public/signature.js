"use strict";
// example one
let salam;
salam = (name, salamkrdn) => {
    console.log(`${name} says ${salamkrdn}`); // number + salamkrdn
};
// example tow
let calc;
calc = (numOne, numTwo, action) => {
    if (action === "add") {
        return numOne + numTwo;
    }
    else {
        return numOne - numTwo;
    }
};
// example three
let logDetail;
logDetail = (barbarosa) => {
    console.log(`${barbarosa.name} is ${barbarosa.age} years old`);
};
