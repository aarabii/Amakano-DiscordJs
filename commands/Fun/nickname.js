const Discord = require('discord.js');

module.exports = {
 name: "nickname",
 aliases: ['nameme'],
 usage: "nickname",
 description: "nickname",
 run: async(client, message, args) => {

 let nicknames = ["AssHole", "Idiot", "Dumass", "Bitch", "Cutie", "Goodguy", "ShitMan", "DickHead", "Lord"]

  if(!message.member.permissions.has('MANAGE_NICKNAMES')) {
   return message.channel.send(
     new Discord.MessageEmbed()
       .setTitle("**Amakano || Nickname**")
       .setColor('#ff0000')
       .setDescription("```yaml\nIt seems like you dont have enough permission.```\n\n```Missing Permission: MANAGE_NICKNAMES```")
       .setThumbnail(message.author.displayAvatarURL())
       .setFooter(`Requested by ${message.author.username}`)
      )
  }
  
  let user = message.mentions.users.first();

  if(!user) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**Amakano || Nickname**")
        .setColor('#ff0000')
        .setDescription("```yaml\nPlease mention someone.```")
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`Requested by ${message.author.username}`)
    )
  }
    
  let changeNick = nicknames[Math.floor(Math.random() * nicknames.length)]

  user.setNickname(changeNick)

  message.channel.send(
    new Discord.MessageEmbed()
        .setTitle("**Amakano || Nickname**")
        .setColor('#ff0000')
        .setDescription(`${user} your nickname has been changed by ${message.author}`)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`Requested by ${message.author.username}`)
  )

 }
}