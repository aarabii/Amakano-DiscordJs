const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
  name: "nsfwneko",
  aliases: [],
  usage: "neko",
  description: "NSFW",
  run: async(client, message, args) => {

    if (message.channel.nsfw === true) {

      const GIF = await neko.nsfw.neko();
      const embed = new Discord.MessageEmbed()
        .setDescription(`${message.author.username} here's a random neko image/gif`)
        .setTitle("NSFW")
        .setColor('#f01390')
        .setFooter(`Requested by ${message.author.username}`)
        .setImage(GIF.url)
      message.channel.send(embed);
    } else {
      const notnsfw = new Discord.MessageEmbed()
      .setTitle(":no_entry_sign: NSFW")
        .setDescription("The process has been blocked because the current channel is not marked as NSFW!")
        .setColor('#f50000')
        .setFooter("This message disappears in 10 seconds.")
      message.channel.send(notnsfw).then(message => {
      message.delete({timeout: 10000})
    })
    }   
  }
}