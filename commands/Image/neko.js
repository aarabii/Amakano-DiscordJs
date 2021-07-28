const { Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

const { NekoBot } = require("nekobot-api");
const api = new NekoBot(`015445535454455354D6`);

module.exports = {
  name: "neko",
  aliases: [],
  usage: "neko",
  description: "display neko",
  run: async(client, message, args) => {

   {
     const image = await api.get("neko");
     const embed = new Discord.MessageEmbed()
        .setTitle("NEKO")
        .setColor('#f01390')
        .setFooter(`Requested by ${message.author.username}`)
        .setDescription(`Here's a Neko for you ${message.author.username}`)
        .setImage(image)
      message.channel.send(embed)
   }
  }
}