"use strict";
// string
const a = '';
const b = ``;
let myName = 'Steve';
let message = `hello, ${myName}`;
// number
let n = 100;
// n = '100'
// n.toUpperCase();
let count = 10;
let price = 9.99;
let temperature = -15;
let distance = 3.4e-5;
let total = count * price;
let average = total / 2;
let infinite = Infinity;
infinite = -Infinity;
let iAmNotANumber = NaN;
// boolean
let isOpen = true;
let isCompleted = false;
if (isOpen) {
    console.log('we are open');
}
if (!isCompleted) {
    console.log('not completed');
}
// && || !
let isAvailable = isOpen && !isCompleted;
// null
let user = null; // union
function login(username) {
    user = username;
}
function logout() {
    user = null;
}
login('Joey');
logout();
// any
let someValue;
someValue.toString();
someValue = false;
someValue.toFixed();
