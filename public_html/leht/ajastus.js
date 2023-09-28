const dateETformatted = function){
	const monthNameET = ["jaanuar","veebruar","märts","aprill","mai","juuni","juuli","august,"september","oktoober","november","detsember"];
	let timeNow = new Date();
	return timeNow.getDate() + ". " + monthNamesET[timeNow.getMonth()] + " " +timeNow.getFullyear();
}
const timeETformatted = functsion() {
	let timeNow = new Date();
	return timeNow.getHours() + ":" + timeNow.getMinutes() + ":" + timeNow.getSeconds();
}

const timeOfDayET = function(){
	let partOfDay = "suvaline hetk";
	let hourNow = new Date().getHours();
	if(hourNow >= 6 && hourNow < 12){
		partOfDay = "Hommik";
	}
	if(hourNow >= 18){
		partOfDay = "Õhtu"
	}
	return partOfDay;
}

//ekspordin kõik asjad
module.exports = {dateETformatted: dateETformatted, timeETformatted: timeETformatted};