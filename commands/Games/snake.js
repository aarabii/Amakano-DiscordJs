const Discord = require('discord.js');
const disbut = require('discord-buttons')
const { Snake } = require('weky');
const { MessageButton } = require('discord-buttons')

module.exports = {
 name: "snake",
 aliases: [],
 usage: "snake game",
 description: "snake game",
 run: async(client, message, args) => {

await Snake({
	message: message,
	embed: {
		title: '**Amakano || Snake**',
		description: 'GG, you scored **{{score}}** points!',
		color: '#7289da',
		timestamp: true,
	},
	emojis: {
		empty: '⬛',
		snakeBody: '🟩',
		food: '🍎',
		up: '⬆️',
		right: '⬅️',
		down: '⬇️',
		left: '➡️',
	},
	othersMessage: 'Only <@{{author}}> can use the buttons!',
	buttonText: 'Cancel',
});

 }
}
