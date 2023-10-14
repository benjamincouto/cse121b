/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name: "Benjamin Couto",
    photo: "images/me.png",
    favoriteFoods: [
        "Milanesas", 
        "French fries", 
        "Tacos", 
        "Matambre a la leche"
    ],
    hobbies: [
        "Tennis",
        "Basketball",
        "Playing guitar"
    ],
    placesLived: [],    
};



/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
        place: "San Jose de Mayo, Uruguay",
        length: "12 years",
    }
) 

myProfile.placesLived.push(
    {
        place: "Montevideo, Uruguay",
        length: "21 years",
    }
) 

myProfile.placesLived.push(
    {
        place: "Sao Paulo, Brazil",
        length: "2 years",
    }
) 

myProfile.placesLived.push(
    {
        place: "Tel Aviv, Israel",
        length: "6 months",
    }
) 



/* DOM Manipulation - Output */

/* Name */
document.querySelector("#name").textContent = myProfile.name;

/* Photo with attributes */
document.querySelector("#photo").src = myProfile.photo;
document.querySelector("#photo").alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    const newLi = document.createElement("li");
    newLi.textContent = food;
    document.querySelector("#favorite-foods").appendChild(newLi); 
});

/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    const newLi = document.createElement("li");
    newLi.textContent = hobby;
    document.querySelector("#hobbies").appendChild(newLi); 
});

/* Places Lived DataList */
myProfile.placesLived.forEach(city => {
    const newDt = document.createElement("dt");
    const thePlace = city["place"];
    newDt.innerHTML = thePlace;
    const newDd = document.createElement("dd");
    newDd.textContent = city["length"];

    document.querySelector("#places-lived").appendChild(newDt); 
    document.querySelector("#places-lived").appendChild(newDd);
});

