/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add (number1, number2) {
    return number1 + number2;
}

function addNumbers(){
    let addNumber1 = Number(document.querySelector('#add1').value);
    let addNumber2 = Number(document.querySelector('#add2').value);

    document.querySelector('#sum').value = add(addNumber1, addNumber2);
}

document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */
function subtract (number1, number2) {
    return number1 - number2;
}

function subtractNumbers(){
    let subtractNumber1 = Number(document.querySelector('#subtract1').value);
    let subtractNumber2 = Number(document.querySelector('#subtract2').value);

    document.querySelector('#difference').value = subtract(subtractNumber1, subtractNumber2);
}

document.querySelector('#subtractNumbers').addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
    let multiply1 = Number(document.querySelector('#factor1').value);
    let multiply2 = Number(document.querySelector('#factor2').value);

    document.querySelector('#product').value = multiply(multiply1, multiply2);
}

document.querySelector('#multiplyNumbers').addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
const divide = (number1, number2) => number1 / number2;

const divideNumbers = () => {
    let divide1 = Number(document.querySelector('#dividend').value);
    let divide2 = Number(document.querySelector('#divisor').value);

    document.querySelector('#quotient').value = divide(divide1, divide2);
}

document.querySelector('#divideNumbers').addEventListener('click', divideNumbers);

/* Decision Structure */
var currentDate = new Date();
var currentYear = currentDate.getFullYear();

document.querySelector('#year').value = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1,2,3,4,5,6,7,8,9,10,11,12,13];

document.querySelector('#array').innerHTML = numbersArray.join(', ');

/* Output Odds Only Array */
let oddsArray = numbersArray.filter((number) => number % 2 == 1);

document.querySelector('#odds').innerHTML = oddsArray.join(', ');

/* Output Evens Only Array */
let evensArray = numbersArray.filter((number) => number % 2 == 0);

document.querySelector('#evens').innerHTML = evensArray.join(', ');

/* Output Sum of Org. Array */
let sumOfArray = numbersArray.reduce((accumulator, currentValue) => accumulator + currentValue);

document.querySelector('#sumOfArray').innerHTML = sumOfArray;

/* Output Multiplied by 2 Array */
let timesTwoArray = numbersArray.map((x) => x * 2);

document.querySelector('#multiplied').innerHTML = timesTwoArray.join(', ');

/* Output Sum of Multiplied by 2 Array */
let sumOftimesTwoArray = timesTwoArray.reduce((accumulator, currentValue) => accumulator + currentValue);

document.querySelector('#sumOfMultiplied').innerHTML = sumOftimesTwoArray;