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
	"End": "black.png",
}

// Define the Characters
var characters = {
	"Narrator": {
		"Name": "Narrator",
		"Color": "#5bcaff",
	},

	"Boy": {
		"Name": "Boy",
		"Color": "#5bcaff",
		"Directory": "Boy",
		"Images":{
			"Normal": "boy.png",
		}
	},

	"Girl": {
		"Name": "Girl",
		"Color": "#5bcaff",
		"Directory": "Girl",
		"Images":{
			"Normal": "girl.png",
		}
	},
}

var script = {
	// The game starts here.
	"Start": [
		"scene Main",

		"Narrator This is a story about innocence and happiness.",

		"Narrator Once upon of time...",

		"Narrator Two siblings were playing with each other, wandering around when all of a sudden, they stubled upon a bike in the middle of a street. Nobody seemed to be around so they got on it and started to play.",

		"jump Boy1",
	],

	"Boy1": [
		"show Boy Normal left with fadeInLeft",
		"Boy Woohoo, need for speed vroom, vroom.",
		"jump Girl1",
	],

	"Girl1": [
		"show Boy Normal left with fadeOutLeft",
		"show Girl Normal right with fadeInRight",
		"Girl Stop clinging to me so much.",

		"jump Boy2",
	],

	"Boy2": [
		"show Girl Normal right with fadeOutRight",
		"show Boy Normal left with fadeInLeft",
		"Boy But mom said to never let go.",

		"jump Girl3",
	],

	"Girl3": [
		"show Boy Normal left with fadeOutLeft",
		"show Girl Normal right with fadeInRight",
		"Girl *Sighs* Hold on tight then we're going for a ride!",
		"Narrator As the reader, you can choose if they sped up or slowed down",
		{
			"Choice": {
				"Dialog": "Do you choose to speed fast or slow down?",
				"Yes": {
					"Text": "Speed up",
					"Do": "jump SpeedUp"
				},
				"No": {
					"Text": "Slow down",
					"Do": "jump SlowDown"
				}
			}
		}
	],

	"SpeedUp": [
		"Narrator The siblings flew pass the cosy shops of Armenian Street",
		"jump NarratorEnd",
	],

	"SlowDown": [
		"Narrator The siblings enjoyed a slow and relaxing ride through Armenian Street",
		"jump NarratorEnd",
	],

	"NarratorEnd": [
		"scene End with fadeIn",
		"Narrator As they were playing, unbeknownst to them, an artist was watching from nearby. An artist that would one day, immortalise them in a beautiful painting.",

		"jump SupportUS",
	],

	"SupportUS": [
		"Narrator Thanks for reading. If you've liked what you've read, you can find more Penang Art based visual novels over at <a href='#'>https://www.storifypenang.com</a>",
		"end"
	],
}