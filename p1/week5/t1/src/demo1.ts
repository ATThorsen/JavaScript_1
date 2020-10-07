interface Student{
    firstName: string;
    lastName: string;
}
function greeter(person: Student){
    return "hello, " + person.firstName;
}

let user ={firstName: "Hans", lastName: "Thorsen"}

console.log(greeter(user))