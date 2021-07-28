const { Message, MessageEmbed } = require('discord.js');
const Discord = require('discord.js');
const superagent = require('superagent');

module.exports = {
  name: "bondage",
  aliases: [],
  usage: "bondage",
  description: "display bondage nsfw content",
  run: async(client, message, args) => {

   if (message.channel.nsfw === true) {

superagent.get('https://shiro.gg/api/images/nsfw/bondage').end((err, response) => {
  const embed = new Discord.MessageEmbed()
  .setTitle(":smirk: Bondage")
  .setImage(response.body.url)
  .setColor('#f01390')
  .setFooter(`Requested by ${message.author.username}`)
  .setDescription(`${message.author.username} here's a random blowjob image/gif`)
  .setURL(response.body.url);
message.channel.send(embed);
})

   } else {
    const notnsfw = new MessageEmbed()
      .setTitle(":no_entry_sign: NSFW")
      .setDescription("The process has been blocked because the current channel is not marked as NSFW!")
      .setColor('#f50000')
      .setFooter("This message disappears in 10 seconds.")
    message.channel.send(notnsfw).then(message => {
      message.delete({timeout: 10000})
    })
    }
  }
}
