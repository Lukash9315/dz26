

const result = 0.1 + 0.2;

console.log(result.toFixed(1));

const a = "1";
const b = 2;

const result2 = parseInt(a) + b;
console.log(result2); 

let volume = prompt("Вкажіть обєм флешки в Гб");
const fileSize = 820;
let fileNumber = Math.floor((volume * 1024) / fileSize);
console.log(fileNumber);

let amountMoney = prompt("Скільки у вас грошей");
let chocoPrice = prompt("Скільки коштує шоколадка");
let chocoNumber = Math.floor(amountMoney/chocoPrice);
console.log(chocoNumber);
let restMoney = amountMoney % chocoPrice;
console.log(restMoney);

let trheeNumber = prompt("Введіть тризначне число");
let hundreds = Math.floor(trheeNumber/100);
let tens = Math.floor(trheeNumber/10) % 10;
let ones = trheeNumber % 10;
console.log(hundreds);
console.log(tens);
console.log(ones);

let depositAmount = prompt("Вкажіть сумму вкладення");
let annualPercentage = 0.05;
let investmentTerm = 2;
let moneySum = (depositAmount * (annualPercentage / 12) * investmentTerm);
console.log(moneySum);


alert( 2 && 0 && 3 );  // 0
alert( 2 || 0 || 3 );   // 2
alert( 2 && 0 || 3 );   // 3
