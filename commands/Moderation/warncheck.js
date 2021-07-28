let Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "warncheck",
  aliases: [],
  usage: "warncheck",
  description: "says pong",
  run: async (client, message, args) => {

  const user = message.mentions.users.first() || message.author;


  let warnings = await db.get(`warnings_${message.guild.id}_${user.id}`);

  if(warnings === null) warnings = 0;

  message.channel.send(
    new Discord.MessageEmbed()
      .setTitle("**Warn** » **Remove Warn**")
      .setColor('#ff3333')
      .setDescription(`\`\`\`yaml\n${user.username} has ${warnings} warnings.\n\`\`\``)
      .setThumbnail(user.displayAvatarURL())
      .setFooter(`Requested by ${message.author.tag}`)    
    );
  }
}