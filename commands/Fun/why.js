const Discord = require('discord.js');
const random = require('srod-v2');

module.exports = {
 name: "why",
 aliases: [],
 usage: "why",
 description: "why",
 run: async(client, message, args) => {

let why = await random.GetWhy()
       message.channel.send(why)

 }
}
