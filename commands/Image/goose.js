const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
  name: "goose",
  aliases: [],
  usage: "goose",
  description: "NSFW",
  run: async(client, message, args) => {

      const GIF = await neko.sfw.goose();
      const embed = new Discord.MessageEmbed()
        .setTitle("Goose")
        .setColor('#f01390')
        .setFooter(`Requested by ${message.author.username}`)
        .setDescription(`${message.author.username} here's a goose image/gif`)
        .setImage(GIF.url)
      message.channel.send(embed);
  }
}