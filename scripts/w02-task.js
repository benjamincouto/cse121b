/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Benjamin Couto';
let currentYear = '2023';
let profilePicture = 'images/me.JPG'


/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector('picture img');



/* Step 4 - Adding Content */

nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);




/* Step 5 - Array */
let favFoods = ['Milanesas', 'French fries', 'Tacos', 'Matambre a la leche']
const favs = document.createElement('p');
favs.textContent = favFoods;
foodElement.appendChild(favs);
let food = 'Barbecue';
favFoods.push(food);
foodElement.innerHTML += `${favFoods}`;
favFoods.shift();
foodElement.innerHTML += `<br>${favFoods}`;
favFoods.pop();
foodElement.innerHTML += `<br>${favFoods}`;





