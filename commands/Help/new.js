let Discord = require('discord.js');


module.exports = {
  name: "new",
  aliases: [],
  usage: ".new",
  description: "new",
  run: async (client, message, args) => {

message.channel.send(
  new Discord.MessageEmbed()
    .setTitle("**Amakano || What's new**")
    .setDescription("**Version: 1.6.3**\n\n• Bug fixes\n• Added Invite Tracker\n• Improved help command")
    .setColor('#ff0000')
    .setThumbnail(message.author.displayAvatarURL())
    .setFooter(`Requested by ${message.author.username}`)
)

  }
}