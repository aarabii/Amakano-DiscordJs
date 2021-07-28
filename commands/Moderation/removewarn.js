let Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "removewarn",
  aliases: [],
  usage: "removewarn",
  description: "to removewarn",
  run: async (client, message, args) => {

  if(!message.member.hasPermission("MANAGE_SERVER"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**Warn** » **Remove Warn**")
        .setColor('#ff3333')
        .setDescription("```yaml\nYou dont't have MANAGE_SERVER permission to use this command.```")
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`Requested by ${message.author.tag}`)
    );

  const user = message.mentions.users.first();

  if(!user) 
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**Warn** » **Remove Warn**")
        .setColor('#ff3333')
        .setDescription("```yaml\nPlease mention someone to remove their warn.```")
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`Requested by ${message.author.tag}`)      
    );

  let warnings = await db.get(`warnings_${message.guild.id}_${user.id}`);

  if(user.bot)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**Warn** » **Remove Warn**")
        .setColor('#ff3333')
        .setDescription("```yaml\nYou can't warn/unwarn/remove warn a bot idiot!```")
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`Requested by ${message.author.tag}`)      
    );

  if(user.id === message.author.id) 
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**Warn** » **Remove Warn**")
        .setColor('#ff3333')
        .setDescription("```yaml\nYou can't remove your own warn IMPOSTER```")
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`Requested by ${message.author.tag}`)        
    );

  if(warnings === null)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**Warn** » **Remove Warn**")
        .setColor('#ff3333')
        .setDescription(`\`\`\`yaml\n${user.username} has no warnings\n\`\`\``)
        .setThumbnail(user.displayAvatarURL())
        .setFooter(`Requested by ${message.author.tag}`)       
    );


  db.delete(`warnings_${message.guild.id}_${user.id}`);
    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**Warn** » **Remove Warn**")
        .setColor('#ff3333')
        .setDescription(`\`\`\`yaml\n${message.author.username} has removed all of your warn, ${user.username}\n\`\`\``)
        .setThumbnail(user.displayAvatarURL())
        .setFooter(`Requested by ${message.author.tag}`)       
    )
  }
}