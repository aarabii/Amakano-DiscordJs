const Discord = require('discord.js');
const disbut = require('discord-buttons')
const { LieSwatter } = require("weky")
const { MessageButton } = require('discord-buttons')


module.exports = {
 name: "lieswatter",
 aliases: [],
 usage: "LieSwatter",
 description: "...",
 run: async(client, message, args) => {

await LieSwatter({
	message: message,
	embed: {
		title: '**Amakano || Lie Swatter**',
		color: '#7289da',
		timestamp: true,
	},
	thinkMessage: 'I am thinking',
	winMessage:
		'GG, It was a **{{answer}}**. You got it correct in **{{time}}**.',
	loseMessage: 'Better luck next time! It was a **{{answer}}**.',
	othersMessage: 'Only <@{{author}}> can use the buttons!',
	buttons: { true: 'Truth', lie: 'Lie' },
});

 }
}