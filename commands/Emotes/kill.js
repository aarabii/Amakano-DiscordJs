let Discord = require('discord.js');

module.exports = {
  name: "kill",
  aliases: [],
  usage: "kill",
  description: "kill someone",
  run: async (client, message, args) => {
 let victim = message.mentions.users.first()
    if (!victim) message.reply("Mention Someone To Kill")
     else {
      let kill = new Discord.MessageEmbed()
        .setTitle("Virtually killing the victim")
        .setDescription(`${victim} Died Lol`)
        .setColor("#f01390")
        .setImage('https://imgur.com/eDzioxF.png')
        .setFooter('Dead RIP')
      message.channel.send(kill)
    }
  }
}
  