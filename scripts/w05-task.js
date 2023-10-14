/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector("#temples");
let templeList = [];


/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(eachTemple => {
        const article = document.createElement("article");
        //name
        const name = document.createElement("h3");
        name.textContent = eachTemple.templeName;
        article.appendChild(name);
        //image
        const image = document.createElement("img");
        image.src = eachTemple.imageUrl;
        image.alt = eachTemple.location;
        article.appendChild(image);

        //append article element
        templesElement.appendChild(article);
        
    });
}



/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    if (response.ok) {
        // the API will send us JSON...but we have to convert the response before we can use it
        // .json() also returns a promise...so we await it as well.
        templeList = await response.json();
        displayTemples(templeList);

}}



/* reset Function */
const reset = () => {

    const articles = templesElement.querySelectorAll("article");

    // Loop through the articles and remove each one
    articles.forEach(article => {
        article.remove();
    });
};


/* sortBy Function */
const sortBy = (temples) => {
    reset();
    const filter = document.querySelector("#sortBy").value;
    switch (filter) {
        case "utah":
            displayTemples(temples.filter(temple => temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple => !temple.location.includes("Utah")));
            break;
        case "older":
            const toCompareDate = new Date(1950, 0, 1);
            displayTemples(temples.filter(temple => new Date(temple.dedicated) < toCompareDate));
            break;
        case "all":
            displayTemples(temples);
            break;
        default:
            break;
    }

}


getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList)});