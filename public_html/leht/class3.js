const firstName = "Kaspar"
const lastName = "Merisalu"
const datetimeValue = require("./datetime_et");
const fs = require("fs");
let folkWisdom = "";

fs.readFile("txtfiles/vanasõnad.txt", "utf8", (err, data)=>{
	if(err){
		console.log(err);
	}
	else {
		//console.log(data);
		//folkWisdom = data;
		onScreen(data);
	}
});//readFile lõppeb

const onScreen = function (folkWisdom){
	console.log("Programmi autor on: " + firstName + " " +lastName);
	console.log("Täna on " + datetimeValue.dateETformatted());
	//console.log(folkWisdom);
	let folkWisdom = folkWisdom.split(";");
	//console.log(folkWisdoms.length);
	console.log("Kell on" + datetimeValue.timeETformatted());
	console.log("Praegu on" + datetimeValue.timeOfDayET() + ".");
	//console.log(datetimeValue.monthsET);
}


//let dateETNow = dateValue.dateETformatted()/;

//console.log("Täna on: " + dateETNow);

