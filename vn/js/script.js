// Define the messages used in the game.
var messages = {
	"Help": {
		"Title": "Help",
		"Subtitle": "Some useful Links",
		"Message": "<p><a href='http://monogatari.hyuchia.com/documentation/'>Documentation</a> - Everything you need to know.</p><p><a href='http://monogatari.hyuchia.com/demo/'>Demo</a> - A simple Demo.</p>"
	}
}

// Define the notifications used in the game
var notifications = {
	"Welcome": {
		title: "Welcome",
		body: "This is the Monogatari VN Engine",
		icon: ""
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
	"h": {
		"Name": "Hikaru",
		"Color": "#5bcaff"
	},

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
		"show jack neutral center with fadeIn",
		{"Input": {
				"Text": "What is your name?",
				"Validation": function(input) {
					return input.trim().length > 0;
				},
				"Save": function(input) {
					storage.player.Name = input;
				},
				"Warning": "You must enter a name!"
			}
		},

		"h Hi {{player.Name}} Welcome to Monogatari!",

		{"Choice": {
				"Dialog": "h Have you already read some documentation?",
				"Yes": {
					"Text": "Yes",
					"Do": "jump Yes"
				},
				"No": {
					"Text": "No",
					"Do": "jump No"
				}
			}
		}
	],

	"Yes": [
		"scene Bruce",
		"h That's awesome!",
		"h Then you are ready to go ahead and create an amazing Game!",
		"h I can't wait to see what story you'll tell!",
		"end"
	],

	"No": [

		"h You can do it now.",

		"display message Help",

		"h Go ahead and create an amazing Game!",
		"h I can't wait to see what story you'll tell!",
		"end"
	]
}