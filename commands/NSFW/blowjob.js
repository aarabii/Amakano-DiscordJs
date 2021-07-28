const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
  name: "blowjob",
  aliases: ['bj'],
  usage: "blowjob",
  description: "NSFW",
  run: async(client, message, args) => {

    if (message.channel.nsfw === true) {

      const GIF = await neko.nsfw.bJ();
      const embed = new Discord.MessageEmbed()
        .setColor('#f01390')
        .setTitle("NSFW")
        .setFooter(`Requested by ${message.author.username}`)
        .setDescription(`${message.author.username} here's a random blowjob image/gif`)
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