const Discord = require('discord.js');
const disbut = require('discord-buttons')
const { RockPaperScissors } = require('weky')
const { MessageButton } = require('discord-buttons')

module.exports = {
 name: "rps",
 aliases: [],
 usage: "rock paper sesior",
 description: "game",
 run: async(client, message, args) => {

let opponent = message.mentions.users.first();
if(!opponent)
  return message.reply('Mention some one to challange')

await RockPaperScissors({
	message: message,
	opponent: message.mentions.users.first(),
	embed: {
		title: '**Amakano || Rock Paper Scissors**',
		description: 'Press the button below to choose your element.',
		color: '#7289da',
		timestamp: true,
	},
	buttons: {
		rock: 'Rock',
		paper: 'Paper',
		scissors: 'Scissors',
		accept: 'Accept',
		deny: 'Deny',
	},
	time: 60000,
	acceptMessage:
		'<@{{challenger}}> has challenged <@{{opponent}}> for a game of Rock Paper and Scissors!',
	winMessage: 'GG, <@{{winner}}> won!',
	drawMessage: 'This game is deadlock!',
	endMessage: "<@{{opponent}}> didn't answer in time. So, I dropped the game!",
	timeEndMessage:
		"Both of you didn't pick something in time. So, I dropped the game!",
	cancelMessage:
		'<@{{opponent}}> refused to have a game of Rock Paper and Scissors with you!',
	choseMessage: 'You picked {{emoji}}',
	noChangeMessage: 'You cannot change your selection!',
	othersMessage: 'Only {{author}} can use the buttons!',
	returnWinner: false,
});

 }
}
