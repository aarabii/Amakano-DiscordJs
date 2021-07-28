const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
  name: "foxgirl",
  aliases: [],
  usage: "foxgirl",
  description: "NSFW",
  run: async(client, message, args) => {

      const GIF = await neko.sfw.foxGirl()
        .setTitle("FoxGirl")
        .setColor('#f01390')
        .setFooter(`Requested by ${message.author.username}`)
        .setDescription(`Here's a random foxgirl image/gif`)
        .setImage(GIF.url)
      message.channel.send(embed);
  }
}