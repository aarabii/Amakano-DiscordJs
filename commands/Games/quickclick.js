const Discord = require('discord.js');
const disbut = require('discord-buttons')
const { QuickClick } = require("weky")
const { MessageButton } = require('discord-buttons')


module.exports = {
 name: "quickclick",
 aliases: [],
 usage: "QuickClick",
 description: "...",
 run: async(client, message, args) => {

await QuickClick({
	message: message,
	embed: {
		title: '**Amakano || Quick Click**',
		color: '#7289da',
		timestamp: true,
	},
	time: 60000,
	waitMessage: 'The buttons may appear anytime now!',
	startMessage:
		'First person to press the correct button will win. You have **{{time}}**!',
	winMessage: 'GG, <@{{winner}}> pressed the button in **{{time}} seconds**.',
	loseMessage: 'No one pressed the button in time. So, I dropped the game!',
	emoji: '👆',
	ongoingMessage:
		"A game is already runnning in <#{{channel}}>. You can't start a new one!",
});
 }
}