		//JAVASCRIPT BASICS
/*====================================	
			CONTENT

01.	Variables
02.	Prompt & alert
03.	Operators, Numbers & Math
04. If/else, Else if & Switch
05. Functions 
06. Arrays 
07. Loops [while / do while / for loop]


##.	Javascript references used in this

=====================================*/
/*
//////////////////////////////////////////////////
//////		VARIABLE

var empty;
console.log(empty);							// undefined

var und = '';
console.log(und);							// (this is an empty variable)

var name = 'Emmanuel';
console.log(name);							// Emmanuel

var isMarried = false;
console.log(isMarried);						// false

var date = 2017;
var lang = "javascript";
console.log(date + " " + lang);				// 2017 javascript

	//declared before so var not compulsory 
und = 'am no more empty';
console.log(und);

	// .length to find the number of word in a string
var laptopName = 'Toshiba';
console.log(laptopName.length);				// 11
console.log(laptopName.toLowerCase());		// toshiba
console.log(laptopName.toUpperCase());		// T0SHIBA
*/



/*
/////////////////////////////////////////////////////
/////////		PROMPT & ALERT

	//this used to collect info from user using JS
prompt("who are you");

	//assigning a value to the user info
var userName = prompt("what is your name");
console.log(userName);

alert("Hello! " + userName);
*/


/*
////////////////////////////////////////////////////////
/////			OPERATORS & NUMBERS & JS MATH

var addition = 20 + 30;
console.log("plus " + addition);

var subtraction = 50 - 20;
console.log("minus " + subtraction);

var multiplication = 10 * 8;
console.log("multiply " + multiplication);

var division = 100 / 10;
console.log("divide " + division);


var nigriansAge = 2017 - 1960;
console.log("Nigeria is " + nigriansAge);

nigriansAge++;		// OR nigeriansAge += 1
console.log("autoIncrease " + nigriansAge);

//====================================================//
var states = prompt("How states does nigeria have");
var fingers = prompt("How many fingers do you have"); 
alert(states + fingers);
alert(parseInt(states) + parseInt(fingers));		//parseInt converts number strings to integal

//====================================================//
console.log(Math.random());								//Random number from 0-1
console.log(Math.random() * 6) + 1;						//Random number from 1-6
		
		//maximum & minimum number
console.log(Math.min(1,2,3,4,5));						// 1
console.log(Math.max(1,2,3,4,5));						// 5

console.log(Math.round(4.9));							// 5	rounds a number to the nearest integer
console.log(Math.round(4.3));							// 4

console.log(Math.ceil(5.9));							// 6	rounds a number up to the nearest integer

console.log(Math.floor(3.8));							// 3	rounds a number down to the nearest integer
*/



/*
//////////////////////////////////////////////////////
///////		IF/ELSE		ELSE IF

var question = prompt("what country have the green white green flag");
var country = "Nigeria";

	if (question === country){
		console.log("Correct");
	} else {
		console.log("Wrong");
	}


var question = prompt("what country have the green white green flag");
var country = "Nigeria";
var country1 = "NIGERIA";
var country2 = "9ja";

	if (question === country){
		console.log("Correct");
	} else if (question === country1){
		console.log("Correct");
	} else if (question === country2){
		console.log("Correct");
	} else {
		console.log("Wrong");
	}
*/
/*
//========= Improved =========='/
var country = prompt("what country have the green white green flag");
	switch (country) {
		case "Nigeria":
			console.log("You are correct");
			break;

		case "NIGERIA":
			console.log("Your are also correct");
			break;

		case "9ja":
			console.log("correct but learn the correct spelling");
			break;

		default:
			console.log("you are Wrong");
	}
*/



////////////////////////////////////////////////////////////////
/////////		FUNCTIONS
/*
function greetings(){
	alert("Hello World!");
}

greetings();

function dice() {
	var randomNumber = Math.floor(Math.random() * 6) + 1;
	return alert(randomNumber);
}

dice();


var year = prompt("what year where you born");
function age(birthYear) {
	var ageCalculator = 2017 - birthYear;

	if (ageCalculator < 30) {
		console.log("you are still young");
	} else {
		console.log("Dude you are getting old");
	}
}

age(year);


var name = prompt("what is your name");
var year = prompt("what year where you born");
function retirement(name, year) {
	var ageCalculator = 2017 - year;
	var ageRemaining = 50 - ageCalculator;

	if (ageCalculator > 50){
		console.log(name +" you are retired");
	} else if (ageCalculator < 50){
		console.log(name + " you have " + ageRemaining + " left till retirement");
	} else {
		console.log(name + " i have nothing to say")
	}
}

retirement(name, year);

*/


/*
/////////////////////////////////////////////////////
////		ARRAYS
			
//var programmingLanguage = ['php', 'javascript', 'ruby', 'python', 'java', 'golang'];

var programmingLanguage = [
	'php', 
	'javascript', 
	'ruby', 
	'python', 
	'java', 
	'golang'
];

alert(programmingLanguage[1]);



var names = [
	'Emmanuel',
	'john',
	'joshua',
	'joy',
	'kate'
];

names [1] = 'david';
console.log(names[1]);

names.push("Glory","james");				// push is used to add values at the end of an arrays
console.log(names);


names.unshift("Chidimma");					// push is used to add values at the begining of an arrays
console.log(names);


names.pop();								// push is used to remove values at the end of an arrays

names.shift()								// push is used to remove values at the begining of an arrays
console.log("ans " + names);



var worldCities = ['Lagos','New york','Marid','Cape town','Moscow','Jerusalem'];
var cityString = worldCities.join(', ');			// returns as string seperated by given parameter
console.log(cityString);

var students = ['joyce','williams','kelvin','peace','michael','ejike'];
var newStudents = ['ibrahim','davies','ruth','chimmeri'];
var allStudents = students.concat(newStudents);		// joins to arrays
console.log(allStudents);
*/



////////////////////////////////////////////////////////
///////			LOOPS

		// WHILE LOOP//
/*
var count = 0;
	while (count < 5){
		alert("Hellro World");
		count++;
	}
*/

/*
function dice(){
	 return Math.floor(Math.random() * 100)+ 1;
}
var diceToss = 0;	
	while(diceToss < 10){
		console.log(dice());
		diceToss++;
	}
*/
/*
		// DO WHILE //
var i = 0;
var text = "";

do {
    text += "The number is " + i  + " ";
    i++;
}
while (i < 10); 

console.log(text);
*/







/*
////////////////////////////////////////////////////////
///		JAVASCRIPT REFERENCE

-	length				
-	toLowerCase		
-	toUpperCase	
-	parseInt
-	Math.random()
-	Math.round()
-	Math.ceil()
-	Math.floor()
-	pop 				//array
-	push				//array
-	unshift				//array
-	shift				//array
-	join				//array
-	concat				//array


*/

