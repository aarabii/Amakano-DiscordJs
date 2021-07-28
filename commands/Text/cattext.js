const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
  name: "cattext",
  aliases: ['ct'],
  usage: "cat",
  description: "NSFW",
  run: async(client, message, args) => {

    const catTEXT = await neko.sfw.catText();
    let embed = new Discord.MessageEmbed()
      .setTitle("oWo")
      .setDescription(catTEXT.cat)
      .setColor("#cc70ba")
      .setFooter(`Requested by ${message.author.username}`)
     message.channel.send(embed);
  }
}