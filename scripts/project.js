import {byId} from "./getElements.js";

const superheroSearch = byId('superhero-search');
const heroName = byId('hero-name');
const herofullname = byId('hero-fullname');
const heroalteregos = byId('hero-alteregos');
const heroaliases = byId('hero-aliases');
const heroaplaceofbirth = byId('hero-placeofbirth');
const herofirstappearance = byId('hero-firstappearance');
const herointelligence = byId('hero-intelligence');
const herostrength = byId('hero-strength');
const herospeed = byId('hero-speed');
const herodurability = byId('hero-durability');
const heropower = byId('hero-power');
const herocombat = byId('hero-combat');
const herogender = byId('hero-gender');
const herorace = byId('hero-race');
const heroheight = byId('hero-height');
const heroweight = byId('hero-weight');
const heroeyecolor = byId('hero-eyecolor');
const herohaircolor = byId('hero-haircolor');
const heroimg = byId('hero-img');
const heropowerstatsaverage = byId('hero-powerstats-average');

//Array to hold powerstats
let powerStatsArray = [];



function fetchSuperheroData(searchTerm) {
    const url = `https://superhero-search.p.rapidapi.com/api/?hero=${searchTerm}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '6c40fc1457mshc7866eaecbc9379p140911jsn0ebb308da692',
            'X-RapidAPI-Host': 'superhero-search.p.rapidapi.com'
        }
    };
        
    return fetch(url, options)

}

superheroSearch.addEventListener('keyup', async function () {
    if (event.key === 'Enter') {
        const searchTermLower = superheroSearch.value.toLowerCase();
        const searchTerm = searchTermLower;
        let superheroes = await fetchSuperheroData(searchTerm);

        let superheroesdata = await superheroes.json();
    
        if (superheroesdata) {
            // Display the first superhero's information if found
            
            heroName.textContent = superheroesdata.name;
            //bio
            herofullname.textContent = superheroesdata.biography.fullName; 
            heroalteregos.textContent = superheroesdata.biography.alterEgos;
            heroaliases.textContent = superheroesdata.biography.aliases;
            heroaplaceofbirth.textContent = superheroesdata.biography.placeOfBirth;
            herofirstappearance.textContent = superheroesdata.biography.firstAppearance;
            //powerstats
            herointelligence.textContent = superheroesdata.powerstats.intelligence;
            herostrength.textContent = superheroesdata.powerstats.strength;
            herospeed.textContent = superheroesdata.powerstats.speed;
            herodurability.textContent = superheroesdata.powerstats.durability;
            heropower.textContent = superheroesdata.powerstats.power;
            herocombat.textContent = superheroesdata.powerstats.combat;
            //appearance
            herogender.textContent = superheroesdata.appearance.gender;
            herorace.textContent = superheroesdata.appearance.race;
            heroheight.textContent = superheroesdata.appearance.height;
            heroweight.textContent = superheroesdata.appearance.weight;
            heroeyecolor.textContent = superheroesdata.appearance.eyeColor;
            herohaircolor.textContent = superheroesdata.appearance.hairColor;
            //image
            heroimg.src = superheroesdata.images.sm;

            //Powerstats average (working with array and array methods)

            //clear the powerStatsArray and then Push each powerstat to the array
            powerStatsArray.length = 0
            powerStatsArray.push(superheroesdata.powerstats.intelligence);
            powerStatsArray.push(superheroesdata.powerstats.strength);
            powerStatsArray.push(superheroesdata.powerstats.speed);
            powerStatsArray.push(superheroesdata.powerstats.durability);
            powerStatsArray.push(superheroesdata.powerstats.power);
            powerStatsArray.push(superheroesdata.powerstats.combat);

            console.log(powerStatsArray);

            //use the reduce method to get powerstats sum
            let powerStatsSum = powerStatsArray.reduce((accumulator, currentValue) => accumulator + currentValue);
            console.log(powerStatsSum);

            //powerstats average
            let powerStatsAvg = Math.round(powerStatsSum / powerStatsArray.length);
            console.log(powerStatsAvg);


            //Modify DOM to include the powerstats average
            heropowerstatsaverage.textContent = powerStatsAvg;



    
        } else {
            heroName.textContent = 'Not found';
        }

    }



});