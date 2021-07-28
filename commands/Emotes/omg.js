const { Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

const { NekoBot } = require("nekobot-api");
const api = new NekoBot(`015445535454455354D6`);

module.exports = {
  name: "oh my god",
  aliases: ['omg'],
  usage: "oh my god",
  description: "display omg",
  run: async(client, message, args) => {

  
     const image = await api.get("gah");
     const embed = new Discord.MessageEmbed()
      .setColor('#f01390')
      .setTitle(":open_mouth: OMG!")
      .setDescription("Oh My God!")
      .setImage(image)
      .setFooter(`Requested by ${message.author.username}`)
    message.channel.send(embed)

   
  }
}