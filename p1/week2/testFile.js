var osInfo = require("./osInfo");

console.log(osInfo)

// Opgave 2
const EventEmitter = require('events');
var dos = require("./dosDetector");
const DOS = new dos(3000);
//The limit is 3 seconds
function myFunc(url){
    DOS.addUrl(url)
};

setTimeout(myFunc, 1500, 'funky.dk'); // første url kaldes, Hvis der kalds sammen url inden for 3 sekunder reager dosDetected
setTimeout(myFunc, 3000, 'Heya.org'); // Ikke sammen url, så intet problem
setTimeout(myFunc, 5000, 'funky.dk'); // Sammen url men ikke inden for 3 sekunder
setTimeout(myFunc, 6000, 'funky.dk'); // Sammen url og inden for 3 sekunder, dosDetected reagerer