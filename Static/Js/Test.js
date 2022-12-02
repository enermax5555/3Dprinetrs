/*  ---Search Engine Test------ 
searchEngine = document.getElementsByClassName("search")[0]

 searchEngine.addEventListener("click", function () {
     console.log("3");
 }) My tests
 const submitBtn = document.getElementById('submit-btn');-->*/

/* -----Loggin form------
 const validate = (e) => {
   e.preventDefault();
      const username = document.getElementById('username');
   const emailAddress = document.getElementById('email-address');
   if (username.value === "") {
    alert("Please enter your username.");
     username.focus();
    return false;
   }
   if (emailAddress.value === "") {
    alert("Please enter your email address.");
     emailAddress.focus();
     return false;
  }
  
   return true;
 }

 submitBtn.addEventListener('click', validate);*/

/* --- Ez Function Explain --- 
 function lol(q, c, a, b) {
 let result = "";
 result += "Picha " + q + " e " + c + " koito "  + a + " mnogo " + b;
 return result; 
 }
 console.log(lol("Stoqn", "manqk", "hodi", "burzo"));
 console.log(lol("Pedro", "gei", "se praska", "v guza")); */

/* ---- Ez Function Explain 1 ----
 let meliodas = 10000; 
 function fun1() {
   let show = "";
 if (typeof meliodas != "undefined") {
   show += "Meliodas CC= " + meliodas;
 }
 if (typeof ban != "undefined") {
   show += "Bans CC= " + ban;
 }
 console.log(show);
 }
 fun1();*/
 /*-----Button Event Listener test----
 buttonPlay = document.getElementsByClassName("button-play")[0]
 textP = document.getElementsByClassName("text")[0]
 
 buttonPlay.addEventListener("click", function () {
     firstName = document.getElementById("name-input")
     lastName = document.getElementById("name-input-2")
     element = document.createElement("div")
 
     element.innerHTML = `${firstName.value} ${lastName.value}`
 
     textP.appendChild(element)
 
     firstName.value = ""
     lastName.value = ""
 })*/
/*---- Switch Function basic----
function random(lop) {
  let answer = "";
  switch(lop) {
    case 1:
      answer= "pig";
      break;
    case 2:
      answer= "wolf";
      break;
    case 3:
      answer= "sheep";
//also there is default case, that will be called everytime, when u entered case that is not in the code.
    }
  return answer;
}
console.log(random(2));*/
/* ----Switch Function without numbers + default basic----
function meliodas(ban) {
  let king = "";
  switch(ban){
    case "a":
      king = "diane";
      break;
    case "b":
      king = "elizabet";
      break;
    case "c":
      king = "merlin";
      break;
      default:
        king = "lorem";
        break;
  }
  return king;
}
console.log(meliodas()); */

/*//-----Accessing Object Properties----//
let myDog = {
  "name": "spayki", 
  "years": 4, 
  "belichki": "prai ko da prai", 
  "spacialwords": ["navunka, gladen li e"], 
  20: "napada li kucheta?"
   
};
//With [""]
let a = myDog["name"];
//With dot
let b = myDog.years;
//with number, first link the property number, then call it with []
let numberlink = 20;
let c = myDog[numberlink];

console.log(b);
console.log(a);
console.log(c);
//property number
console.log(numberlink)*/

/*//-----Updating Object Info-----
let hero = {
  "name:": "Meleodas",
  "age:": "over 3000",
  "race": "demon",
  "combatClass": "30000",
  "deletetest": "if is deleted, console.log will show undefined"
}
//Change property info
hero["name:"] = "Ban";
hero.combatClass = "15000";
//Add new property
hero.country= "Hell";
hero['affinity'] = "max";
//Delete property
delete hero.deletetest;

console.log(hero["name:"]);
console.log(hero["age:"]);
console.log(hero.race);
console.log(hero.combatClass);
console.log(hero['country']);
console.log(hero.affinity) 
console.log(hero.deletetest)
*/

// // -----Lookup object / Check Object----
// function objectTest(a) {
// let result = "";

// let object = {
//   "name": "object",
//   "works": "yes it is",
//   "check": "yes it's here" 
// };
// result = object["works"];
// return result;
// }

//console.log(objectTest("work"));

/*//----Check Object property

let object = {
  "name": "object",
  "test": "it's a test object",
  "working": "yes it is working"
}
function Checkobject(c) {
if (object.hasOwnProperty(c)) {
  return object[c];
} 
else {
  return "It's not here buddy";
}
}
console.log(Checkobject("name"));
*/

/*//---Test Extend Object from massive array with same paths-----

let herostats = [
  {
    "hero": "Meleodas",
    "stats":[
      'strenght = 5000',
      'health = 79000',
      'deffense = 4954', 
    ]
  },
  {   
     "hero": "Ban",
     "stats":[
      'strenght = 5000',
      'health = 79000',
      'deffense = 4954'
    ]
  }
];
let first = herostats[0].hero;
let firsts = herostats[0].stats[0];
let firsth = herostats[0].stats[1];
let firstd = herostats[0].stats[2];

let second = herostats[1].hero;
let seconds = herostats[1].stats[0];
let secondh = herostats[1].stats[1];
let secondd = herostats[1].stats[2];

console.log(first);
console.log(firsts);
console.log(firsth);
console.log(firstd);
console.log(second);
console.log(seconds);
console.log(secondh);
console.log(secondd);
*/

/*//----- Get property from big arrey -----///
let heroes = {
  "hero": {
  "name": {
    "first": "Meleodas",
    "second": "Ban",
  },
  "race": {
    "Meleodas": "Demon",
    "Ban": "Human but immortal xD"
  }
}
};

let a = heroes.hero.name.first;
let b = heroes.hero.name["second"];
let c = heroes.hero.race.Meleodas;
let d = heroes.hero.race.Ban


console.log(a);
console.log(b);  
console.log(c);
console.log(d);
*/

/*//----Updating property of array----  Askjulka

let heroes = {
  "Meleodas": {
    "combatClass": "20000",
    "race": "demon"
  },
  "Ban": {
    "combatClass": "7000",
    "race": "humen"
  },
  "King": {
    "combatClass": "13000",
    "race": "fairy"
  }
}
let heroesCopy = JSON.parse(JSON.stringify(heroes));

function updateRecord(id, prop, value) {
    if (value === "") {
    delete heroes[id][prop];
  } else if (prop==="combatClass") {
    heroes[id][prop] = heroes[id][prop] || [];
    heroes[id][prop].push(value); // here
  } else {
    heroes[id][prop] = value;
  }
      
}
updateRecord("Meleodas", "test", "new",);
updateRecord("Meleodas", "race", "demon king");
console.log(heroes);
*/

/*//----Simple Push with while----
let Meleodas = [];
let a= 0;

while(a < 3) {
  Meleodas.push(a);
  a++;
}
console.log(Meleodas);
*/
/*//---For Loop simple ("for" is the most common loop in js)----
let array = [];

for (let a = 1; a < 10; a++) {
  array.push(a);
}
console.log(array);


//---Revers count number in arrays---
let ban = [];

for (let a = 0; a <= 20; a += 2) {
  ban.push(a);
}
console.log(ban);
//----Count oddnumbers example----
let oddnumbers = [];

for (let a = 20; a >= 10; a -= 2) {
  oddnumbers.push(a);
}
console.log(oddnumbers);
*/
/*
let ban = [10 , 20 , 30 , 40];
let mel = 0; 

for (let a = 0; a < ban.length; a++){
mel += ban[a];
}
console.log(mel)*/ 

function multy(array) {
  
  let one = 1; 
  for ( i = 0; i < array.lenght; i++ )
  for ( j = 0; j , array[i].lenght; j++) {

    one *= array[i][j];
  }
  
}
console.log(array[[1,2], [3,4,5], [6,7,8]])