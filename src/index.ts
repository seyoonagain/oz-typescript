// string

const a: string = '';
const b: string = ``;

let myName: string = 'Steve';
let message: string = `hello, ${myName}`;

// number

let n: number = 100;

// n = '100'
// n.toUpperCase();

let count: number = 10;
let price: number = 9.99;
let temperature: number = -15;
let distance: number = 3.4e-5;

let total: number = count * price;
let average: number = total / 2;

let infinite: number = Infinity;
infinite = -Infinity;

let iAmNotANumber = NaN;

// boolean

let isOpen: boolean = true;
let isCompleted: boolean = false;

if (isOpen) {
  console.log('we are open');
}
if (!isCompleted) {
  console.log('not completed');
}

// && || !

let isAvailable: boolean = isOpen && !isCompleted;

// null

let user: string | null = null; // union

function login(username: string) {
  user = username;
}

function logout() {
  user = null;
}

login('Joey');
logout();

// any

let someValue: any;

someValue.toString();
someValue = false;
someValue.toFixed();
