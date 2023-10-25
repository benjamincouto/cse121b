const superheroSearch = document.getElementById('superhero-search');
const heroName = document.getElementById('hero-name');
const herofullname = document.getElementById('hero-fullname');
const heroalteregos = document.getElementById('hero-alteregos');
const heroaliases = document.getElementById('hero-aliases');
const heroaplaceofbirth = document.getElementById('hero-placeofbirth');
const herofirstappearance = document.getElementById('hero-firstappearance');
const herointelligence = document.getElementById('hero-intelligence');
const herostrength = document.getElementById('hero-strength');
const herospeed = document.getElementById('hero-speed');
const herodurability = document.getElementById('hero-durability');
const heropower = document.getElementById('hero-power');
const herocombat = document.getElementById('hero-combat');
const herogender = document.getElementById('hero-gender');
const herorace = document.getElementById('hero-race');
const heroheight = document.getElementById('hero-height');
const heroweight = document.getElementById('hero-weight');
const heroeyecolor = document.getElementById('hero-eyecolor');
const herohaircolor = document.getElementById('hero-haircolor');
const heroimg = document.getElementById('hero-img');

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
    
        } else {
            // Clear the displayed information if no superheroes are found
            heroName.textContent = 'Not found';
        }

    }

});