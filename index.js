// alternatives to conditionals: the switch case or case switch statement
// works much the same as a if elif elif elif else structure

let day = new Date().getDay(); //new keyword is related to object instantiation a new date object

let literal_day = new Date().toString();

console.log(day);
console.log(literal_day);

// build a little case switch for days of the week
// syntax for a switch case: switch(<parameter>) {case <value>: <code> break; case <value>: <code> break}
switch (day){
    case 0:
        console.log('Sunday');
        break;
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
}

switch(literal_day.slice(0,3)){
    case 'Sun':
        console.log('Sunday');
        break;
    case 'Mon':
        console.log('Monday');
        break;
    case 'Tue':
        console.log('Tuesday');
        break;
    case 'Wed':
        console.log('Wednesday');
        break;
    case 'Thu':
        console.log('Thursday');
        break;
    case 'Fri':
        console.log('Friday');
        break;
    case 'Sat':
        console.log('Saturday');
        break;
}

//JS OBJ

/*
JS simple OBJ ( and complex OBJ) = to py dicts
*/

// keys in JS obj, dont need to be in quotation marks, theyre auto strings when they needs to be, otherwise they are just var names
// this has to do with the fact that the JS obj shares some characteristics with the the py obj and th epy dict


let person = {
    name: 'Adrian',
    age: '23',
    favorite_number: '10'
}

// accessing the data in our JS obj is same as py
// but we have 2 options - 1 like py's dict, one like py's obj

// bracket notation
console.log(person['name']); // jsut like py's dict

// dot notation
console.log(person.name); //just like py's obj

// more complex JS Objs

let person2 = {
    name: 'Angelica',
    age: '23',
    favorite_number: '10',
    teams: ['Lakers', 'New York Knicks', 'Bulls'],
    positions: ['Pg', 'Sg', 'Pf', 'C'],
    favorite_foods: {
        italian: ['pasta', 'pizza']
    }
}

// accessing nested data in our JS obj is just like accessing nested data in our PY dicts
// the 1st team name
console.log(person2.teams[0])

// get string pasta
console.log(person2['favorite_foods'].italian[0])
console.log(person2.favorite_foods.italian[1]);

// a couple JS object prototype methods - work with JS literal obj that most things are built on
// Object.keys(<object>) and Object.values(<object>) similar to python's dict.keys() and dict.values()
console.log(Object.keys(person2));
console.log(Object.values(person2));

// looping an obj in JS 

// for in loop nearly identical how we owuld loop through python dict
for(k in person2){
    console.log(`Value at key ${k}: ${person2[k]}`); //must use bracket notation to access values in this case
}

// can use standard JS for loop alongside Object.keys() or Object.values() because those methods return arrays
let p2keys= Object.keys(person2)
for (let i = 0; i<p2keys.length; i++){
    console.log(`Key: ${p2keys[i]} - Value in original object: ${person2[p2keys[i]]}`)
}


// creating custom objs / our own obj prototype -  with es6 METHOD Syntax
// similar to creaiting a python obj, but we are using a function
// cannot use => functions

// JS 'this' == pythons 'self'

class Animal {
    constructor(name, species, habitat, color) {
        this.name = name;
        this.species = species;
        this.habitat = habitat;
        this.color = color;

        // JS prototype obj can have methods
        this.printInfo = () => {
            console.log(`This is a ${this.species} named ${this.name} who lives in the ${this.habitat} and is ${this.color}`);
        };
    }
}

// we can instantiate our obj prototype
let fennec = new Animal('Doug', 'Fennex fox', 'desert', 'brown');

// can access the attributes
console.log(fennec.name);
// call the method
fennec.printInfo()

// -- JS class based object --
// very similar to a python class based obj

class AnimalClass{
    constructor(name, species, habitat, color) { // constructor takes place of __init__ function from python
        this.name = name;
        this.species = species;
        this.habitat = habitat;
        this.color = color;
    }
    printInfo () {
        console.log(`This is a ${this.species} named ${this.name} who lives in the ${this.habitat} and is ${this.color}`);
    }
}
// we can instantiate our obj prototype
let fennecclass = new AnimalClass('Doug', 'Fennex fox', 'desert', 'brown');

// can access the attributes
console.log(fennecclass.name);
// call the method
fennecclass.printInfo()

// JS class-based inheritence
// just like a python obj can inherit props, methods, behaviors from another obh
// a JS class based obj can innherit from another JS class- based obj

class Fox extends AnimalClass{
    constructor(name, species, habitat, color){
//anything were we want to share the behavior with these pieces of inputs with behavior of aninals class we will include htme in super method
    super(name, species, habitat, color);
    this.genus = 'True Fox';
    this.scientific_genus = 'Vulpes';
    }

    printFox(){
        console.log(`This is a ${this.scientific_genus}, aka ${this.genus}. inherits from AnimalClass`)
    }
}

let articfox = new Fox('Snowflake', 'Arctic Fox', 'tundra', 'white');
console.log(articfox.name);
articfox.printInfo();
articfox.printFox()




