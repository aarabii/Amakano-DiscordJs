const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
  name: "gecg",
  aliases: [],
  usage: "gecg",
  description: "NSFW",
  run: async(client, message, args) => {

      const GIF = await neko.sfw.gecg();
      const embed = new Discord.MessageEmbed()
        .setTitle("GECG")
        .setColor('#f01390')
        .setFooter(`Requested by ${message.author.username}`)
        .setDescription(`${message.author.username} here's a random genetically engineered catgirl image/gif`)
        .setImage(GIF.url)
      message.channel.send(embed);
  }
}      