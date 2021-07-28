const { Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: "nom",
  aliases: [],
  usage: "nom",
  description: "display nom",
  run: async(client, message, args) => {

superagent.get('https://shiro.gg/api/images/nom').end((err, response) => {
  const embed = new Discord.MessageEmbed()
  .setTitle("Nom NOm NOM")
  .setImage(response.body.url)
  .setColor('#f01390')
  .setFooter(`Requested by ${message.author.username}`)
  .setURL(response.body.url);
message.channel.send(embed);
    })
  }
}