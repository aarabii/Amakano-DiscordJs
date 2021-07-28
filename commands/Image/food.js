const { Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

const { NekoBot } = require("nekobot-api");
const api = new NekoBot(`015445535454455354D6`);

module.exports = {
  name: "food",
  aliases: ['hungry'],
  usage: "food",
  description: "i want coffee",
  run: async(client, message, args) => {

  
     const image = await api.get("food");
     const embed = new Discord.MessageEmbed()
        .setTitle(":shallow_pan_of_food: Food")
        .setColor('#f01390')
        .setFooter(`Requested by ${message.author.username}`)
        .setDescription(`Here's a food for you ${message.author.username}`)
        .setImage(image)
      message.channel.send(embed)
   
  }
}