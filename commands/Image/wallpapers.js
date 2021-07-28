const { Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: "wallpapers",
  aliases: ['wp','walpaper'],
  usage: "wallpapers",
  description: "display wallpapers",
  run: async(client, message, args) => {

superagent.get('https://shiro.gg/api/images/wallpapers').end((err, response) => {
  const embed = new Discord.MessageEmbed()
  .setTitle("wallpapers")
  .setDescription(`${message.author.username} here's a random walpaper for you`)
  .setImage(response.body.url)
  .setColor('#f01390')
  .setFooter(`Requested by ${message.author.username}`)
  .setURL(response.body.url);
message.channel.send(embed);
    })
  }
}