/*
    Rodrick hates their life.
--------------------------- # # # # #
	Console log custom group.
*/

// Feel free to change the default settings! ♡
let credit = {
	description: [
		
    ]
}

// I wouldn't recommend touching this!

if (credit != null){
	console.group("Lookin' under the hood?")
    for (let z = 0; z < credit.description.length; z++) {
		console.log(credit.description[z])
    }
	console.groupEnd()
}
