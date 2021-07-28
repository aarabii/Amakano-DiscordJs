const { Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: "blush",
  aliases: [],
  usage: "blush",
  description: "display blush",
  run: async(client, message, args) => {

if (!message.guild) return;

  if (message.mentions.members.size === 0) {
    async function no_ping() {
    superagent.get('https://shiro.gg/api/images/blush').end((err, response) => {

    const embed = new Discord.MessageEmbed()
      .setTitle(":blush: Blush")
      .setDescription("Stop it, you're making me all red >///<")
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
    superagent.get('https://shiro.gg/api/images/blush').end((err, response) => {

    const embed = new Discord.MessageEmbed()
      .setTitle(":blush: Blush")
      .setDescription(`Stop it, you're making me all red >///< ${member.user.username}`)
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
