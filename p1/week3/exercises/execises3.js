const fetch = require("node-fetch")
const now = require("performance-now");

function fetchPerson(url) {
    return fetch(url)
      .then((res) => res.json())
      .then((data) => data);
  }

async function printNames() {
    let start = now()

    console.log("Before");
    const person1 = await fetchPerson("https://swapi.dev/api/people/"+'1');
    const person2 = await fetchPerson("https://swapi.dev/api/people/"+'2');
    console.log(person1.name);
    console.log(person2.name)
    console.log("After all");
    

    //this takes about 170.0
    console.log(start)
    return start
}

//printNames()

async function getNamesParalle(){
    let start1 = now()
    console.log("Start")
    let person = await Promise.all([
        fetchPerson("https://swapi.dev/api/people/" + 1),
        fetchPerson("https://swapi.dev/api/people/" + 2)
    ])
    const p1 = person[0];
    const p2 = person[1];

    console.log("p1 name : " + p1.name)
    console.log("p2 name : " + p2.name)

    console.log("End")
    console.log(start1)
    //About 151.43
    return start1
}
 
getNamesParalle()


printNames().then((start) => {
    let stop = now();
    console.log();
    console.log("Sequentially:");
    console.log((stop - start).toFixed(3));
    console.log();
    console.log();
  });
  
  getNamesParalle().then((start) => {
    let stop = now();
    console.log();
    console.log("Parallel:");
    console.log((stop - start).toFixed(3));
    console.log();
    console.log();
  });