const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
  name: "dog",
  aliases: ['woof'],
  usage: "dog",
  description: "NSFW",
  run: async(client, message, args) => {

      const GIF = await neko.sfw.woof();
      const embed = new Discord.MessageEmbed()
        .setTitle(":dog: Dog")
        .setColor('#f01390')
        .setFooter(`Requested by ${message.author.username}`)
        .setDescription(`${message.author.tag} here's a random Dog image/gif`)
        .setImage(GIF.url)
      message.channel.send(embed);
  }
}