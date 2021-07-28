const Discord = require('discord.js');
const disbut = require('discord-buttons')
const { Trivia } = require('weky')
const { MessageButton } = require('discord-buttons')

module.exports = {
 name: "trivia",
 aliases: ['quiz'],
 usage: "trivia",
 description: "weky trivia ...",
 run: async(client, message, args) => {

await Trivia({
	message: message,
	embed: {
		title: '**Amakano || Trivia**',
		description: 'You only have **{{time}}** to guess the answer!',
		color: '#7289da',
		timestamp: true,
	},
	difficulty: 'hard',
	thinkMessage: 'I am thinking',
	winMessage:
		'GG, It was **{{answer}}**. You gave the correct answer in **{{time}}**.',
	loseMessage: 'Better luck next time! The correct answer was **{{answer}}**.',
	emojis: {
		one: '1️⃣',
		two: '2️⃣',
		three: '3️⃣',
		four: '4️⃣',
	},
	othersMessage: 'Only <@{{author}}> can use the buttons!',
	returnWinner: false,
});

 }
}