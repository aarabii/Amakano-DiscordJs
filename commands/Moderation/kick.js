let Discord = require('discord.js');

module.exports = {
  name: "kick",
  aliases: [],
  usage: "kick",
  description: "to kick members",
  run: (client, message, args) => {
    
  if (!message.member.hasPermission("KICK_MEMBERS"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle('**Kick**')
        .setColor('#ffffff')
        .setDescription("```yaml\nYou don't have enough premission to use this command```")
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(message.author.tag)           
      );


  if (!message.guild.me.hasPermission("KICK_MEMBERS"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle('**Kick**')
        .setColor('#ffffff')
        .setDescription("```yaml\nThis user can't be kicked.```\n```yaml\nIt is either because\n\n• They are a Mod/Admin\n• Their highest role is higher than mine\n• They are not in the server at all.```")
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(message.author.tag)             
      );

  const member =
      message.mentions.members.first() ||
      message.guild.members.cache.get(args[0]);

  if (!args[0])
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle('**Kick**')
        .setColor('#ffffff')
        .setDescription("```yaml\nPlease mention a user for this command to work.```")
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(message.author.tag)              
    );

  if (!member)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle('**Kick**')
        .setColor('#ffffff')
        .setDescription("```yaml\nCan't seem to find this user. Sorry 'bout that :/```")
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(message.author.tag)    
      );

  if (!member.kickable)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle('**Kick**')
        .setColor('#ffffff')
        .setDescription("```yaml\nThis user can't be kicked.```\n```yaml\nIt is either because\n\n• They are a Mod/Admin\n• Their highest role is higher than mine\n• They are not in the server at all.```")
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(message.author.tag)     
      );

  if (member.id === message.author.id)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle('**Kick**')
        .setColor('#ffffff')
        .setDescription("```yaml\nYou can't kick yourself Idiot!```")
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(message.author.tag)           
      );

    const reason = args.slice(1).join(" ");
    if (!reason)
      kickreason = "Unspecified :(";  

    member.kick(reason).catch(err => {
      if (err) return message.channel.send(
        new Discord.MessageEmbed()
          .setTitle("ERROR")
          .setDescription("```yaml\nSonething went wrong try again.```")
          .setColor('ffffff')
      );
    });

    const kickembed = new Discord.MessageEmbed()
    .setTitle('**Kick**')
    .setColor('#ff0000')
    .setThumbnail(member.user.displayAvatarURL())
    .setDescription(`\`\`\`yaml\n✅ User has been successfully Kicked!\n\`\`\``)
    .addFields(
        {
          name: "Member Kicked:",
          value: member 
        },
        {
          name: "Kicked by Moderator:",
          value: message.author
        },
        {
          name: "For Reason:",
          value: kickreason
        }
      )
    .setFooter("Time Kicked:", message.author.displayAvatarURL())
    .setTimestamp();


    message.channel.send(kickembed);
  }
}