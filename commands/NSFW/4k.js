const { Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');

//I'm using a package to call the API because it needs and Authorization code for NSFW
const { NekoBot } = require("nekobot-api");
const api = new NekoBot(`015445535454455354D6`);//Setting up the API using the authorization code
//I'm using a test authorization code that you can find in the nekobot docs at the end of the site.

module.exports = {
  name: "4k",
  aliases: [],
  usage: "4k",
  description: "display 4k nsfw content",
  run: async(client, message, args) => {//async function is needed

   if (message.channel.nsfw === true) {
     const image = await api.get("4k")//Getting the image
     const embed = new Discord.MessageEmbed()
        .setTitle("NSFW")
        .setColor('#f01390')
        .setFooter(`Requested by ${message.author.username}`)
        .setDescription(`Here's a 4K NSFW image for you ${message.author.username}`)
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