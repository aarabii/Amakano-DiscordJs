const Discord = require('discord.js');


module.exports = {
 name: "pp",
 aliases: [],
 usage: "pp",
 description: "measure pp",
 run: async(client, message, args) => {

   let pp = [
    '=',
    '==',
    '===',
    '====',
    '=====',
    '======',
    '=======',
    '==========',
    '=================',
    '========================='
    ];

const user = message.author
const taggedUser = message.mentions.users.first();
let gayrate = Math.floor(Math.random() * 101)

if(taggedUser) {
let argsEmbed = new Discord.MessageEmbed()
    .setTitle("PP Machine")
    .setColor("#000000")
    .setDescription(`${taggedUser.username} Your pp is :- 8${pp[Math.floor(Math.random() * pp.length)]}D`)
    .setFooter(message.client.user.username, message.client.user.avatarURL())
  message.channel.send(argsEmbed)
  }

else  
if(user) {
let gayrateEmbed = new Discord.MessageEmbed()
    .setTitle("PP Machine")
    .setColor("#000000")
    .setDescription(`${user.username} Your pp is :- 8${pp[Math.floor(Math.random() * pp.length)]}D`)
    .setFooter(message.client.user.username, message.client.user.avatarURL())
  message.channel.send(gayrateEmbed)
  }
 }
}

  

 

   
 