// Define the messages used in the game.
var messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message": "<p><a href='http://monogatari.hyuchia.com/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='http://monogatari.hyuchia.com/demo/'>Demo</a> - A simple Demo.</p>"
	}
}

// Define the Particles JS Configurations used in the game
var particles = {

}

// Define the music used in the game.
var music = {

}

// Define the voice files used in the game.
var voice = {

}

// Define the sounds used in the game.
var sound = {

}

// Define the videos used in the game.
var videos = {

}

// Define the images used in the game.
var images = {

}

// Define the backgrounds for each scene.
var scenes = {
	"Main": "bicycle.jpg",
	"Bruce": "bruce.jpg" 
}

// Define the Characters
var characters = {
	//Jack is a carpenter 
	//He's was tasked at preparing dog shed for some bulldog puppies
	
	"jack": {
		"Name": "Jack",
		"Color": "#5bcaff",
		"Directory": "Jack",
		"Images":{
			"neutral": "neutral.png",
			"happy": "happy.png",
			"doubt": "doubt.png",
		}
	}
}

var script = {
	// The game starts here.
	"Start": [
		"scene Main",

		"jack Hi Bobby. Thank you for taking the time to read this story!",

		{"Choice": {
				"Dialog": "jack Who would you like to be portrayed as in the image",
				"The boy": {
					"Text": "Boy",
					"Do": "jump Boy"
				},
				"The girl": {
					"Text": "Girl",
					"Do": "jump Girl"
				}
			}
		},

		"jack Thats all folks",

	],

	"Boy": [
		"scene Happiness",
		"jack His face represents happiness",
		"end"
	],

	"Girl": [

		"scene Innocence",
		"jack Her face represents innocence",
		"end"
	]
}