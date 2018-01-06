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

		"Narrator They lived peaceful and idlylic lives.",

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
		"Boy But mom said never let go.",

		"jump Girl3",
	],

	"Girl3": [
		"show Boy Normal left with fadeOutLeft",
		"show Girl Normal right with fadeInRight",
		"Girl Sigh, hold tight...",

		"jump NarratorEnd",
	],

	"NarratorEnd": [
		"scene End with fadeIn",
		"Narrator These are the daily lives of carefree children",

		"jump SupportUS",
	],

	"SupportUS": [
		"Narrator Thank you for taking the time to read this story!",
		"Narrator Like what you have read, you can get more at <a href='#'>https://www.storifypenang.com</a>",
		"end"
	],
}