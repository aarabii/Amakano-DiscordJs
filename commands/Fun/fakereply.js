const Discord = require('discord.js');
const canvacord = require('canvacord')

module.exports = {
 name: "fakereply",
 aliases: ['fr'],
 usage: "fake reply",
 description: "make fake reply",
 run: async(client, message, args) => {

const replyArgs = message.content.split(" ").slice(1).join(" ").split("\n").join("").split(" | ");

const member1 = message.mentions.members.first(5)[0] || message.guild.members.cache.get(replyArgs[0]);

if(!member1) return message.channel.send(
  new Discord.MessageEmbed()
    .setTitle('**Fakereply**')
    .setDescription("```yaml\nPlease provide the first member.```\n\n```Uses: .fakereply @user1 | @user2 | Text by user2 | Text by user1```\n```Example: .fakereply @yuma | @amakno | I am epic | Fact```")
    .setColor('ffffff')
    .setFooter(`Requested by ${message.author.tag}`)
)

const member2 = message.mentions.members.first(5)[1] || message.guild.members.cache.get(replyArgs[1]);

if(!member2) return message.channel.send(
  new Discord.MessageEmbed()
    .setTitle('**Fakereply**')
    .setDescription("```yaml\nPlease provide the second member.```\n\n```Uses: .fakereply @user1 | @user2 | Text by user2 | Text by user1```\n```Example: .fakereply @yuma | @amakno | I am epic | Fact```")
    .setColor('ffffff')
    .setFooter(`Requested by ${message.author.tag}`)  
)

const msg1 = replyArgs[2];

if(!msg1) return message.channel.send(
  new Discord.MessageEmbed()
    .setTitle('**Fakereply**')
    .setDescription("```yaml\nPlease provide the main message. |Text by user2|```\n\n```Uses: .fakereply @user1 | @user2 | Text by user2 | Text by user1```\n```Example: .fakereply @yuma | @amakno | I am epic | Fact```")
    .setColor('ffffff')
    .setFooter(`Requested by ${message.author.tag}`)  
)

const msg2 = replyArgs[3]

if(!msg2) return message.channel.send(
  new Discord.MessageEmbed()
    .setTitle('**Fakereply**')
    .setDescription("```yaml\nPlease provide the reply message. |Text by user1|```\n\n```Uses: .fakereply @user1 | @user2 | Text by user2 | Text by user1```\n```Example: .fakereply @yuma | @amakno | I am epic | Fact```")
    .setColor('ffffff')
    .setFooter(`Requested by ${message.author.tag}`)  
)

const img = member1.user.displayAvatarURL({ format: 'png' })
const img2 = member2.user.displayAvatarURL({ format: 'png' })

let canvasReply = await canvacord.Canvas.reply({
     avatar1: img,
     avatar2: img2,
     user1: member1.user.username,
     user2: member2.user.username,
     hex1: member1.displayHexColor,
     hex2: member2.displayHexColor,
     mainText: msg1,
     replyText: msg2
}) 

const replyimg = new Discord.MessageAttachment(canvasReply, 'replyimage.png')

return message.channel.send(replyimg)
 }
}