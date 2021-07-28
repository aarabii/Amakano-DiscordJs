const Discord = require('discord.js');
const disbut = require('discord-buttons')
const { GuessThePokemon } = require("weky")
const { MessageButton } = require('discord-buttons')


module.exports = {
 name: "guessthepokemon",
 aliases: ['whoispokemon','guessthepoki'],
 usage: "guessthepokemon",
 description: "...",
 run: async(client, message, args) => {

await GuessThePokemon({
	message: message,
	embed: {
		title: '**Amakano || Guess The Pokémon**',
		description:
			'**Type:**\n{{type}}\n\n**Abilities:**\n{{abilities}}\n\nYou only have **{{time}}** to guess the pokémon.',
		color: '#7289da',
		timestamp: true,
	},
	thinkMessage: 'I am thinking',
	othersMessage: 'Only <@{{author}}> can use the buttons!',
	winMessage:
		'GG, It was a **{{answer}}**. You got it correct in **{{time}}**.',
	loseMessage: 'Better luck next time! It was a **{{answer}}**.',
	time: 60000,
	incorrectMessage: "No {{author}}! The pokémon isn't `{{answer}}`",
	buttonText: 'Cancel',
});

 }
}