let Discord = require('discord.js');

module.exports = {
  name: "nitro",
  aliases: ['genratenitro'],
  usage: "rickroll",
  description: "rickroll",
  run: async (client, message, args) => {
 let nitro = new Discord.MessageEmbed()
 .setTitle("**Nitro Generator**")
 .setDescription(":diamond: __Nitro Code__\n[Click Here](https://www.youtube.com/watch?v=dQw4w9WgXcQ) To Redeem Your Nitro!:diamond:")
 .setColor("RED")
 .setFooter("Free Nitro! Wohoo")
 message.channel.send(nitro)
  }
}