const Discord = require('discord.js');


module.exports = {
 name: "nsfw",
 aliases: ['marknsfw','makensfw'],
 usage: "nsfw",
 description: "To make a cjhannel nsfw n sfw",
 run: async(client, message, args) => {

let channel = message.channel;



if (channel.nsfw) {
  channel.edit({ nsfw: !channel.nsfw });
   let nsfw = new Discord.MessageEmbed()
    .setTitle(":safety_vest: SFW")
    .setDescription('This Channel Is Now SFW')
    .setColor('#81ebd9')
  
  message.channel.send(nsfw)
 } else {
   channel.edit({ nsfw: !channel.nsfw });
   let sfw = new Discord.MessageEmbed()
    .setTitle("🚫 NSFW")
    .setDescription('This Channel Is Now NSFW')
    .setColor('#f50000')
  
  message.channel.send(sfw)
 } 
 }
}





