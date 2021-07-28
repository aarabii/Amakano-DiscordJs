const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
  name: "fact",
  aliases: ['facts'],
  usage: "cat",
  description: "NSFW",
  run: async(client, message, args) => {

    const factTEXT = await neko.sfw.fact();
     message.channel.send(factTEXT.fact);
  }
}