let Discord = require('discord.js');

module.exports = {
  name: "unmute",
  aliases: [],
  usage: "unmute",
  description: "to unmute",
  run: async (client, message, args) => {

  if (!message.member.hasPermission("MANAGE_ROLES")) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**Unmute**")
        .setColor('ff3333')
        .setDescription(`\`\`\`yaml\n${message.author.username} you don't have MANAGE_ROLES permission to use this command.\n\`\`\``)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(message.author.tag)
    );
  }

  let user = message.mentions.members.first();

  let role = message.guild.roles.cache.find(x => x.name === "Muted");

  if(user.roles.cache.has(role)) 
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**Unmute**")
        .setColor('ff3333')
        .setDescription(`\`\`\`yaml\n${message.author.username}, ${user.username} isn't muted.\n\`\`\``)
        .setThumbnail(user.displayAvatarURL())
        .setFooter(message.author.tag)        
    );

  user.roles.remove(role);

  user.send(
    new Discord.MessageEmbed()
      .setTitle("**Unmute**")
      .setColor('#ff3333')
      .setDescription(`\`\`\`yaml\n${user.username} you have been Unmuted in ${message.guild.name}\n\`\`\``)
      .setThumbnail(message.author.displayAvatarURL())
      .addField('Moderator Name:', `${message.author.username}`)
      .setTimestamp()          
  )
      
  await message.channel.send(
    new Discord.MessageEmbed()
      .setTitle("**Unmute**")
      .setColor('#ff3333')
      .setDescription(`\`\`\`yaml\n${user.username} has been Unmuted by ${message.author.username}\n\`\`\``)
      .setThumbnail(user.displayAvatarURL())
      .setFooter(`Requested by ${message.author.tag}`)     
  )
  }
}