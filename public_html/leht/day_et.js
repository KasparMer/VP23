exports.dayOfTime = function(){
	const dayNameET = ["pühapäev","esmaspäev","teisipäev","kolmapäev","neljapäev","reede","laupäev"];
	let timeNow = new Date();
	//let daynNow = timeNow.getDay();
//esimene variant
	//let dayET = (dayNameET[timeNow.getDay()]);
	//return dayET;
//teine variant
	return (dayNameET[timeNow.getDay()]);
}