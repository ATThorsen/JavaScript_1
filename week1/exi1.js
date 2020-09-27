//// Filter
arryList = ["Lisa", "Leo", "Thomas", "Aske"]

function myFilter(AList, callback){
    return result = AList.filter(word => word.length <= callback)
}

console.log(myFilter(arryList, 4))
//// Map 
function myMap(map, callback){
    return result = map.map(number => number * callback)
}

aMap= [1,2,3,4,5,6]
console.log(myMap(aMap, 5))

// Opgave 3

var names = ["Lars", "Peter", "Jan", "Bo"];
var newArray = names.filter(function(name) {
    return name = name.length >2
});

console.log(newArray)

var numbers = [1, 2, 3, 4];
var newMap = numbers.map(function(number) {
    return number = number * 2
});

console.log(newMap)


///// Reduce

var all= ["Lars", "Peter", "Jan", "Bo"];

function myReduce(list, callback){
    return list.join(callback)
}
console.log(myReduce(all, ", #"))

let members = [
    {name : "Peter", age: 18},
    {name : "Jan", age: 35},
    {name : "Janne", age: 25},
    {name : "Martin", age: 22},
   ]

var reducer = members.reduce((acc, members, idx, arr)=>{
    let age = (parseInt(`${members.age}`))
    acc = acc + age
    let temp= parseInt(acc)
    temp = (idx < arr.length-1)? temp :temp
    
    if(arr.length == idx+1){
    return parseInt(acc/arr.length)
}   else {
    return temp
}

}, "")
    console.log(reducer)


////Hoisting af variabler og functioner

        // Outputs: undefined
        console.log(declaredLater);

        var declaredLater = "Now it's defined!";

        // Outputs: "Now it's defined!"
        console.log(declaredLater);


        ////Exemple 2
        var name = "Baggins";

            (function () {
            // Outputs: "Original name was undefined"
            console.log("Original name was " + name);

            var name = "Underhill";

            // Outputs: "New name is Underhill"
            console.log("New name is " + name);

        })();

        ////Exemple af Hoisting af funktioner 

        // Outputs: "Definition hoisted!"
            definitionHoisted();

            // TypeError: undefined is not a function
            
            //definitionNotHoisted();

            function definitionHoisted() {
                console.log("Definition hoisted!");
            }

            var definitionNotHoisted = function () {
                console.log("Definition not hoisted!");
            };
    

            ////Exemple på call(), apply() og Bind() 

            //Demo with javascript .call()

                var obj = {name:"Niladri"};

                var greeting = function(a,b,c){
                    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
                };

                console.log(greeting.call(obj,"Newtown","KOLKATA","WB"));
                // returns output as welcome Niladri to Newtown KOLKATA in WB


            //Demo with javascript .apply()

                var obj = {name:"Niladri"};

                var greeting = function(a,b,c){
                    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
                };

                // array of arguments to the actual function
                var args = ["Newtown","KOLKATA","WB"];  
                console.log("Output using .apply() below ")
                console.log(greeting.apply(obj,args));

                /* The output will be 
                Output using .apply() below
                welcome Niladri to Newtown KOLKATA in WB */


            //Bind exemple

            //Use .bind() javascript

                var obj = {name:"Niladri"};

                var greeting = function(a,b,c){
                    return "welcome "+this.name+" to "+a+" "+b+" in "+c;
                };

                //creates a bound function that has same body and parameters 
                var bound = greeting.bind(obj); 


                console.dir(bound); ///returns a function

                console.log("Output using .bind() below ");

                console.log(bound("Newtown","KOLKATA","WB")); //call the bound function

                /* the output will be 
                Output using .bind() below
                welcome Niladri to Newtown KOLKATA in WB */


//// Closures
                //Excemple på closure
        function makeFunc() {
            var name = 'Mozilla';
            function displayName() {
                console.log(counter);
        //Name er kun defineret i denne funktion, og derfor kan den godt bruges her   
             console.log(name);
            }

            return displayName;
        }
        var myFunc = makeFunc();
        
        myFunc()
        


var counter = (function() {
            var privateCounter = 0;
            function changeBy(val) {
              privateCounter += val;
            }
          
            return {
              increment: function() {
                changeBy(1);
              },
          
              decrement: function() {
                changeBy(-1);
              },
          
              value: function() {
                return privateCounter;
              }
            };
          })();
          
          console.log(counter.value());  // 0.
          
          counter.increment();
          counter.increment();
          console.log(counter.value());  // 2.
          
          counter.decrement();
          console.log(counter.value());  // 1.
        
//// Closure, Homemade 



var person = (function() {
    var info = {name: "", age:""} 
    function changeName(val) {
      `${info.name = val}`
        
    }
    function changeAge(val) {
        `${info.age = val}`
      }

    return {
      setName: function(name) {
        changeName(name);
      },
  
      setAge: function(age) {
        changeAge(age);
      },
  
      fullInfo: function() {
        return `${info.name}` + " " + `${info.age}`;
      }
    };
  })();            

    let person1 = {name: person.setName("Aske"), age: person.setAge(24)};
    let person2 = person;
  
    person1.setName("Aske")
    person1.setAge(24)
    console.log(person1.fullInfo())
    person2.setName("Thomas")
    person2.setAge(29)
    console.log(person1.fullInfo())