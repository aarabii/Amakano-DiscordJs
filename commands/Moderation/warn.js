let Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "warn",
  aliases: [],
  usage: "warn",
  description: "to warn",
  run: async (client, message, args) => {

  if(!message.member.hasPermission("MANAGE_SERVER"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**Warn**")
        .setColor('#ff3333')
        .setDescription("```yaml\nYou dont't have MANAGE_SERVER permission to use this command.```")
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`Requested by ${message.author.tag}`)
    );

  const user = message.mentions.users.first();

  if(!user) 
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**Warn**")
        .setColor('#ff3333')
        .setDescription("```yaml\nPlease mention someone to warn.```")
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`Requested by ${message.author.tag}`)      
    );

  if(user.bot)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**Warn**")
        .setColor('#ff3333')
        .setDescription("```yaml\nYou can't warn/unwarn/remove warn a bot idiot!```")
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`Requested by ${message.author.tag}`)      
    );

  if(user.id === message.author.id) 
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**Warn**")
        .setColor('#ff3333')
        .setDescription("```yaml\nYou can't warn yourself IDIOT!```")
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`Requested by ${message.author.tag}`)        
    );

  if(message.guild.owner.id === user.id) 
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**Warn**")
        .setColor('#ff3333')
        .setDescription("```yaml\nYou can't warn SERVER OWNER.```")
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`Requested by ${message.author.tag}`)       
    );

  let reason = args.slice(1).join(" ");

  if(!reason) 
    reason = 'Unspecified :(';

  let warnings = await db.get(`warnings_${message.guild.id}_${user.id}`);

  if(warnings === 5) 
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**Warn**")
        .setColor('#ff3333')
        .setDescription(`\`\`\`yaml\n${user.username} has already reached 5 warnings.\n\`\`\``)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`Requested by ${message.author.tag}`)      
    );

  if(warnings === null) {
    await db.set(`warnings_${message.guild.id}_${user.id}`, 1);
      user.send(
        new Discord.MessageEmbed()
          .setTitle("**Warn**")
          .setColor('#ff3333')
          .setDescription(`\`\`\`yaml\n${user.username} you have been warned in ${message.guild.name}.\n\`\`\`\n**Reason :** \`\`\`yaml\n${reason}\n\`\`\``)
          .setThumbnail(message.author.displayAvatarURL())
          .addField('Moderator Name:', `${message.author.username}`)
          .setTimestamp()          
      )
      
      await message.channel.send(
        new Discord.MessageEmbed()
          .setTitle("**Warn**")
          .setColor('#ff3333')
          .setDescription(`\`\`\`yaml\n${user.username} has been warned by ${message.author.username}\n\`\`\``)
          .setThumbnail(user.displayAvatarURL())
          .setFooter(`Requested by ${message.author.tag}`)     
      )
  }

  if(warnings !== null) {
    await db.add(`warnings_${message.guild.id}_${user.id}`, 1);
      user.send(
        new Discord.MessageEmbed()
          .setTitle("**Warn**")
          .setColor('#ff3333')
          .setDescription(`\`\`\`yaml\n${user.username} you have been warned in ${message.guild.name}.\n\`\`\`\n**Reason :** \`\`\`yaml\n${reason}\n\`\`\``)
          .setThumbnail(message.author.displayAvatarURL())
          .addField('Moderator Name:', `${message.author.username}`)
          .setTimestamp()          
      )
      
      await message.channel.send(
        new Discord.MessageEmbed()
          .setTitle("**Warn**")
          .setColor('#ff3333')
          .setDescription(`\`\`\`yaml\n${user.username} has been warned by ${message.author.username}\n\`\`\``)
          .setThumbnail(user.displayAvatarURL())
          .setFooter(`Requested by ${message.author.tag}`)     
      )
  }

  }
}