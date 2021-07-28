const { Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

const { NekoBot } = require("nekobot-api");
const api = new NekoBot(`015445535454455354D6`);

module.exports = {
  name: "boobs",
  aliases: ['boob','boobies'],
  usage: "boobie",
  description: "NSFW",
  run: async(client, message, args) => {

   if (message.channel.nsfw === true) {
     const image = await api.get("boobs")
     const embed = new Discord.MessageEmbed()
        .setTitle("NSFW")
        .setColor('#f01390')
        .setFooter(`Requested by ${message.author.username}`)
        .setDescription(`Here's a boobs NSFW image for you ${message.author.username}`)
        .setImage(image)
      message.channel.send(embed)
   } else {
    const notnsfw = new MessageEmbed()
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