const Discord = require('discord.js')

module.exports = {
 name: "avatar",
 aliases: ['av'],
 usage: "avatar @user",
 description: "show pfp",
 run: async(client, message, args) => {

//const args = message.content.slice(prefix.length).trim().split(/ +/)

   const user = client.users.cache.get(args[0]) || message.mentions.users.first() || message.author

      let embed = new Discord.MessageEmbed()
        .setTitle(`**${user.tag}**'s avatar`)
        .setImage(user.avatarURL({ size: 4096 }) || 'https://cdn.images.express.co.uk/img/dynamic/143/590x/Discord-down-1148069.jpg?r=1562092880750')
      message.channel.send(embed)

 }
}