const Discord = require('discord.js');

module.exports = {
 name: "gayrate",
 aliases: ['gr'],
 usage: "gayrate",
 description: "measure gay rate",
 run: async(client, message, args) => {

const user = message.author
const taggedUser = message.mentions.users.first();
let gayrate = Math.floor(Math.random() * 101)

if(taggedUser) {
let argsEmbed = new Discord.MessageEmbed()
    .setTitle("Gayrate Machine")
    .setColor("#000000")
    .setDescription(`${taggedUser.username} is \`${gayrate}%\` gay! 🏳️‍🌈`)
    .setFooter(message.client.user.username, message.client.user.avatarURL())
  message.channel.send(argsEmbed)
  }

else  
if(user) {
let gayrateEmbed = new Discord.MessageEmbed()
    .setTitle("Gayrate Machine")
    .setColor("#000000")
    .setDescription(`${user.username} is \`${gayrate}%\` gay! 🏳️‍🌈`)
    .setFooter(message.client.user.username, message.client.user.avatarURL())
  message.channel.send(gayrateEmbed)
  }
 }
}


   
