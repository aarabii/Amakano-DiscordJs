const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
  name: "cat",
  aliases: ['meow'],
  usage: "cat",
  description: "NSFW",
  run: async(client, message, args) => {

      const GIF = await neko.sfw.meow();
      const embed = new Discord.MessageEmbed()
        .setTitle(":cat: Cat")
        .setColor('#f01390')
        .setFooter(`Requested by ${message.author.username}`)
        .setDescription(`${message.author.tag} here's a random cat image/gif`)
        .setImage(GIF.url)
      message.channel.send(embed);
  }
}