const Discord = require('discord.js');
const disbut = require('discord-buttons')
const { WouldYouRather } = require('weky')
const { MessageButton } = require('discord-buttons')

module.exports = {
 name: "wyr",
 aliases: [],
 usage: "would you rather",
 description: "choose bw 2",
 run: async(client, message, args) => {

	await WouldYouRather({ message: message })

 }
}
