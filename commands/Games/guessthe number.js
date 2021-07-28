const Discord = require('discord.js');
const disbut = require('discord-buttons')
const { GuessTheNumber } = require("weky")
const { MessageButton } = require('discord-buttons')


module.exports = {
 name: "guessthenumber",
 aliases: ['findnumber'],
 usage: "gtn",
 description: "...",
 run: async(client, message, args) => {

await GuessTheNumber({
    message: message,
    opponent: message.mentions.users.first(),
    embed: {
        title: '**Amakano || Guess The Number**',
        color: '#7289da',
        timestamp: true
    },
	publicGame: true,
	number: 189,
	time: 60000,
	winMessage: {
		publicGame:
			'GG, The number which I guessed was **{{number}}**. <@{{winner}}> made it in **{{time}}**.\n\n__**Stats of the game:**__\n**Duration**: {{time}}\n**Number of participants**: {{totalparticipants}} Participants\n**Participants**: {{participants}}',
		privateGame:
			'GG, The number which I guessed was **{{number}}**. You made it in **{{time}}**.',
	},
	loseMessage:
		'Better luck next time! The number which I guessed was **{{number}}**.',
	bigNumberMessage: 'No {{author}}! My number is greater than **{{number}}**.',
	smallNumberMessage:
		'No {{author}}! My number is smaller than **{{number}}**.',
	othersMessage: 'Only <@{{author}}> can use the buttons!',
	buttonText: 'Cancel',
	ongoingMessage:
		"A game is already runnning in <#{{channel}}>. You can't start a new one!",
	returnWinner: false,
});
 }
}