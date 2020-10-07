const crypto = require("crypto");
const { promises } = require("fs");

function opgave1a(){
    let testobj =  {title : "3 secure", random:[]}
    let length = 48
   
        crypto.randomBytes(length, function (err,data){
            let s1 = data.toString("hex")
            testobj.random.push({length : length, randon : s1})
            length = length-8

                crypto.randomBytes(length, function (err,data){
                    let s2 = data.toString("hex")
                    testobj.random.push({length : length, randon : s2})
                    length = length-8

                        crypto.randomBytes(length, function (err,data){
                            let s3 = data.toString("hex")
                            testobj.random.push({length : length, randon : s3})
                            length = length-8
                            console.log(testobj)
                });
            });
        }); 
    };
//opgave1a()

//Opgave 1 b 

var lengths = [48, 40, 32, 24, 16];

    const myPromise = (size) => 
        new Promise(function (resolve, reject) {
            crypto.randomBytes(size, function (err,data){
            let r1 = data.toString("hex")
    if (err) {
        return reject(new Error("UPPPPPPPPS")
        )}

      resolve({length:size, random:r1});
    });
    })

async function OpgavetB(lst) {
    var promises = lst.map((length) => {
          return myPromise(length);
        });
var finalResult = await Promise.all(promises).then((results) => {
    var result = { title: "5 Secure Randoms", randoms: [] };
    results.forEach((secureNumber) => {
      result.randoms.push(secureNumber);
    });

    return result;
  });

  return finalResult
  
}

//OpgavetB(lengths)


module.exports = OpgavetB;