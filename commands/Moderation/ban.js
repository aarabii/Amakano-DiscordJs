let Discord = require('discord.js');

module.exports = {
  name: "ban",
  aliases: [],
  usage: "ban",
  description: "to ban member",
  run: (client, message, args) => {
    

//args n mentions stuff
  let banreason = args.slice(1).join(" ");
  const user = message.mentions.users.first();

//reply of errors
  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle('**Ban**')
        .setColor('#ffffff')
        .setDescription("```yaml\nYou don't have enough premission to use this command```")
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(message.author.tag)            
    );
  
  if(!banreason)
    banreason = "Unspecified :(" 

  if(!user)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle('**Ban**')
        .setColor('#ffffff')
        .setDescription("```yaml\nPlease mention a user for this command to work.```")
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(message.author.tag)      
    )  

  if(user === message.author)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle('**Ban**')
        .setColor('#ffffff')
        .setDescription("```yaml\nYou can't ban yourself Idiot!```")
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(message.author.tag)     
    )  

  if(!message.guild.member(user).bannable) 
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle('**Ban**')
        .setColor('#ffffff')
        .setDescription("```yaml\nThis user can't be banned.```\n```yaml\nIt is either because\n\n• They are a Mod/Admin\n• Their highest role is higher than mine\n• They are not in the server at all.```")
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(message.author.tag)       
    ) 


//ban embed 
  let banembed = new Discord.MessageEmbed()
    .setTitle('**Ban**')
    .setColor('#ff0000')
    .setThumbnail(user.displayAvatarURL())
    .setDescription(`\`\`\`yaml\n✅ ${user.tag} has been successfully banned!\n\`\`\``)
    .addFields(
        {
          name: "Member Banned:",
          value: user 
        },
        {
          name: "Banned by Moderator:",
          value: message.author
        },
        {
          name: "For Reason:",
          value: banreason
        }
      )
    .setFooter("Time Banned:", message.author.displayAvatarURL())
    .setTimestamp();

    user.send(banembed)

      .then(() => {
        message.guild.members.ban(user, { reason: banreason });

        message.channel.send(banembed);
      })

      .catch(() => {
        message.guild.members.ban(user, { reason: banreason });

        message.channel.send(banembed);
      });          
  }
}