const Discord = require('discord.js')
const db = require('quick.db')

module.exports = {
  name: 'prefix',
  description: '',
  aliases: ["p"],
  usage: '',
  run: async(client, message, args) => {
  
const prefix = await db.get(`prefix_${message.guild.id}`) || '-'


  let preembed = new Discord.MessageEmbed()

    .setTitle("**Prefix!**")
    .setDescription(`>w< My Current Prefix Is **${prefix}**`)
    .setColor('#00ff00')
    .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())

  message.channel.send(preembed)
 


  }
}