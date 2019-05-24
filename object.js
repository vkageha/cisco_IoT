//object:collection of data and methods encapsulated as one.

const person={
    firstName : "Valentine",
    lastName : "Kageha",
    likes : ["Reading", "Outdoor activities"],
    age  : 25,
    student: true,
    getFullName : function(){
        return "First Name:" + person.firstName + ' '  + person.lastName;
    }

};

console.log(person["firstName"]);
console.log(person.lastName);
console.log(person.getFullName());
console.log(person["likes"]);
console.log(person["likes"][1]);