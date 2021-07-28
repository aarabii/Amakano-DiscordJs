const Discord = require("discord.js");

module.exports = {
 name: "mute",
 description: "Mute anyone who break rules",
 category: "moderation",
 usage: "mute <@mention> <reason>",
 run: async (client, message, args) => {

  if (!message.member.hasPermission("MANAGE_ROLES")) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle('**Mute**')
        .setColor('ff3333')
        .setDescription(`\`\`\`yaml\n${message.author.username} you don't have MANAGE_ROLES permission to use this command.\n\`\`\``)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(message.author.tag)
    );
  }

  if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle('**Mute**')
        .setColor('ff3333')
        .setDescription(`\`\`\`yaml\n${message.author.username}, I don't have MANAGE_ROLES permission in this server so i can't mute someone :(\n\`\`\``)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(message.author.tag)      
    );
  }

  const user = message.mentions.members.first();
 
  if(!user) {
   return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle('**Mute**')
        .setColor('ff3333')
        .setDescription(`\`\`\`yaml\n${message.author.username} please mention someone to mute\n\`\`\``)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(message.author.tag)     
   )
  }
 
  if(user.id === message.author.id) {
   return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle('**Mute**')
        .setColor('ff3333')
        .setDescription(`\`\`\`yaml\n${message.author.username} Idiot I don't wanna mute you :(\n\`\`\``)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(message.author.tag)     
   );
  }
 
 
  let reason = args.slice(1).join(" ")
 
 
  if(!reason)
    reason = 'Unspecified :(';
 
 
 let muterole = message.guild.roles.cache.find(x => x.name === "Muted")
 
 
  if(!muterole) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle('**Mute**')
        .setColor('ff3333')
        .setDescription(`\`\`\`yaml\n${message.author.username} this server dont have any Muted role.\n\`\`\``)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(message.author.tag)           
    )
  }
 
 
  if(user.roles.cache.has(muterole)) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle('**Mute**')
        .setColor('ff3333')
        .setDescription(`\`\`\`yaml\n${message.author.username}, ${user.username} is already muted.\n\`\`\``)
        .setThumbnail(user.displayAvatarURL())
        .setFooter(message.author.tag)           
    )
  }
 
 
 
 
 user.roles.add(muterole)
 
  user.send(
    new Discord.MessageEmbed()
      .setTitle("**Mute**")
      .setColor('#ff3333')
      .setDescription(`\`\`\`yaml\n${user.username} you have been Muted in ${message.guild.name}.\n\`\`\`\n**Reason :** \`\`\`yaml\n${reason}\n\`\`\``)
      .setThumbnail(message.author.displayAvatarURL())
      .addField('Moderator Name:', `${message.author.username}`)
      .setTimestamp()          
  )
      
  await message.channel.send(
    new Discord.MessageEmbed()
      .setTitle("**Mute**")
      .setColor('#ff3333')
      .setDescription(`\`\`\`yaml\n${user.username} has been muted by ${message.author.username}\n\`\`\`\n**Reason :** \`\`\`yaml\n${reason}\n\`\`\``)
      .setThumbnail(user.displayAvatarURL())
      .setFooter(`Requested by ${message.author.tag}`)     
  )
 
 
 
 }
};
