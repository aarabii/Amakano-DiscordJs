const { Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: "cry",
  aliases: [],
  usage: "cry",
  description: "display cry",
  run: async(client, message, args) => {

if (!message.guild) return;

  if (message.mentions.members.size === 0) {
    async function no_ping() {
    superagent.get('https://shiro.gg/api/images/cry').end((err, response) => {

    const embed = new Discord.MessageEmbed()
      .setTitle(":sob: Cry")
      .setDescription(`${message.author.username} is now really sad uwu :sob:`)
      .setImage(response.body.url)
      .setColor('#f01390')
      .setFooter(`Requested by ${message.author.username}`)
      .setURL(response.body.url);
  message.channel.send(embed);
    })
   }
  no_ping();
  }

  if (message.mentions.members.size !== 0) {
    async function ping() {
    const member = message.mentions.members.first();
    superagent.get('https://shiro.gg/api/images/cry').end((err, response) => {

    const embed = new Discord.MessageEmbed()
      .setTitle(":sob: Cry")
      .setDescription(`${message.author.username} is now really sad uwu  ${member.user.username}`)
      .setImage(response.body.url)
      .setColor('#f01390')
      .setFooter(`Requested by ${message.author.username}`)
      .setURL(response.body.url);
  message.channel.send(embed);
    })
   }
  ping();
  }
  
  }
}
