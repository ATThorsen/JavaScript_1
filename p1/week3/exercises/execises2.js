const fetch = require("node-fetch");
const url = "https://swapi.dev/api/"

result = []

const myPromise = (url) =>
        new Promise(function (resolve, reject) {
            fetch(url)
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((err) => reject(err));

        })

function getPlanetforFirstSpeciesInFirstMovieForPerson(id){
    let result = {};
    myPromise("https://swapi.dev/api/people/" + id)
    .then((data) => {
        result.name = data.name;
        return myPromise(data.films[0]);
      })
      .then((data)=> {
        result.firstFilm = data.title;
        return myPromise(data.species[0]);
    })
    .then((data) =>  {
        result.firstSpecies = data.name;
        return myPromise(data.homeworld);
    })
    .then((data)=> {
        result.homeWorldForSpecie = data.name
        console.log(result)
        return result
    })
}

//getPlanetforFirstSpeciesInFirstMovieForPerson(50);




async function getPlanetforFirstSpeciesInFirstMovieForPersonAsync(id){

let name = await myPromise("https://swapi.dev/api/people/" + id)
let film = await myPromise(name.films[0])
let species = await myPromise(film.species[0])
let homeworld = await myPromise(species.homeworld)

 let result = {
name : name.name,
film : film.title,
species : species.name,
homeworld : homeworld.name
}
console.log(result)
}


getPlanetforFirstSpeciesInFirstMovieForPersonAsync(55)