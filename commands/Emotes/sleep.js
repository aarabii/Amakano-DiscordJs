const { Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: "sleep",
  aliases: [],
  usage: "sleep",
  description: "display sleep",
  run: async(client, message, args) => {

  let user = message.mentions.users.first() || message.author  

superagent.get('https://shiro.gg/api/images/sleep').end((err, response) => {
  const embed = new Discord.MessageEmbed()
  .setTitle(":zzz: Sleep")
  .setDescription(`${user.username} is sleeping tight :3`)
  .setImage(response.body.url)
  .setColor('#f01390')
  .setFooter(`Requested by ${message.author.username}`)
  .setURL(response.body.url);
message.channel.send(embed);
    })
  }
}