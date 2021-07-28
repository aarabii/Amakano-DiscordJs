const { Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: "punch",
  aliases: [],
  usage: "punch",
  description: "display punch",
  run: async(client, message, args) => {

if (!message.guild) return;

  if (message.mentions.members.size === 0) {
    async function no_ping() {
    superagent.get('https://shiro.gg/api/images/punch').end((err, response) => {

    const embed = new Discord.MessageEmbed()
      .setTitle(":punch: Punch")
      .setDescription(`${message.author.username} is punching someone`)
      .setImage(response.body.url)
      .setColor('#f01390')
      .setURL(response.body.url)
      .setFooter(`Requested by ${message.author.username}`)
  message.channel.send(embed);
    })
   }
  no_ping();
  }

  if (message.mentions.members.size !== 0) {
    async function ping() {
    const member = message.mentions.members.first();
    superagent.get('https://shiro.gg/api/images/punch').end((err, response) => {

    const embed = new Discord.MessageEmbed()
      .setTitle(":punch: Punch")
      .setDescription(`${message.author.username} is punching ${member.user.username}`)
      .setImage(response.body.url)
      .setColor('#f01390')
      .setURL(response.body.url)
      .setFooter(`Requested by ${message.author.username}`)
  message.channel.send(embed);
    })
   }
  ping();
  }
  
  }
}
