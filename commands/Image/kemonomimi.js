const { Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

const { NekoBot } = require("nekobot-api");
const api = new NekoBot(`015445535454455354D6`);

module.exports = {
  name: "kemonomimi",
  aliases: ['kemo'],
  usage: "kemonomimi",
  description: "display kemonomimi",
  run: async(client, message, args) => {

  
     const image = await api.get("kemonomimi");
     const embed = new Discord.MessageEmbed()
        .setTitle("KEMO")
        .setColor('#f01390')
        .setFooter(`Requested by ${message.author.username}`)
        .setDescription(`Here's Kemonomimi for you ${message.author.username}`)
        .setImage(image)
      message.channel.send(embed)
  
  }
}