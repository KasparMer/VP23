exports.dateETformatted = function){
	const monthNameET = ["jaanuar","veebruar","märts","aprill","mai","juuni","juuli","august,"september","oktoober","november","detsember"];
	let timeNow = new Date();
	return timeNow.getDate() + ". " + monthNamesET[timeNow.getMonth()] + " " +timeNow.getFullyear();
}