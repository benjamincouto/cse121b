const steps = ['one', 'two', 'three'];

//Activity 1
const stepsHTML = steps.map(function (step) {
    return `<li>${item}</li>`;
});

document.getElementById("myList").innerHTML = stepsHtml.join();

//Activity 2
const grades = ['A', 'B', 'A'];

function convertGradeToPoints(grade) {
    let points = 0;
    if(grade === 'A') {
        points = 4;
    } else if (grade === 'B') {
        points = 3;
    }
    return points
}

const gpaPoints = grades.map(convertGradeToPoints);

//Activity 3
const pointsTotal = gpaPoints.reduce((total, item) => total + item);
const gpa = pointsTotal / gpaPoints.length;

//Activity 4
const fruits = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const shortWords = fruits.filter((fruit) => fruit.length < 6)

//Activity 5
const numbers = [12, 34, 21, 54];

let luckNumber = 21;
let luckyIndex = numbers.indexOf(luckNumber);



