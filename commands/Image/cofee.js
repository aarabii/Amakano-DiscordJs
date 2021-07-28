const { Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

const { NekoBot } = require("nekobot-api");
const api = new NekoBot(`015445535454455354D6`);

module.exports = {
  name: "coffee",
  aliases: ['sleepy'],
  usage: "coffee",
  description: "i want coffee",
  run: async(client, message, args) => {

  
     const image = await api.get("coffee");
     const embed = new Discord.MessageEmbed()
        .setTitle(":coffee: Coffee")
        .setColor('#f01390')
        .setFooter(`Requested by ${message.author.username}`)
        .setDescription(`Here's a coffee for you ${message.author.username}`)
        .setImage(image)
      message.channel.send(embed)

   
  }
}