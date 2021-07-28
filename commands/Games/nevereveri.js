const Discord = require('discord.js');
const disbut = require('discord-buttons')
const { NeverHaveIEver } = require("weky")
const { MessageButton } = require('discord-buttons')


module.exports = {
 name: "neverhaveiever",
 aliases: ['nhie'],
 usage: "NeverHaveIEver",
 description: "...",
 run: async(client, message, args) => {

await NeverHaveIEver({
	message: message,
	embed: {
		title: '**Amakano || Never Have I Ever**',
		color: '#7289da',
		timestamp: true,
	},
	thinkMessage: 'I am thinking',
	othersMessage: 'Only <@{{author}}> can use the buttons!',
	buttons: { optionA: 'Yes', optionB: 'No' },
});
 }
}