let Discord = require('discord.js');

module.exports = {
  name: "clear",
  aliases: [],
  usage: "clear",
  description: "to delete message",
  run: async(client, message, args) => {  
  
  if(!message.member.hasPermission("MANAGE_MESSAGES")) 
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle(":wastebasket: **Clear Messages**")
        .setColor('#f2f2f2')
        .setDescription("```You don't have permission of *MANAGE_MESSAGES*```")
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
    );

  if(!args[0])
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle(":wastebasket: **Clear Messages**")
        .setColor('#f2f2f2')
        .setDescription("```Please enter the amount of message you wanna clear```")
        .addFields(
          {name: "```Uses```", value: "prefix+clear (No. of msg)", inline: true },
          {name: "```Example```", value: ".clear 10", inline: true }
        )
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
    ) 

  if(isNaN(args[0])) 
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle(":wastebasket: **Clear Messages**")
        .setColor('#f2f2f2')
        .setDescription("```Please enter real number```")
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
    )
 
  if(args[0] > 100 )
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle(":wastebasket: **Clear Messages**")
        .setColor('#f2f2f2')
        .setDescription("```You can't delete more than 100 message at once```")
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
    )
  
  if(args[0] < 1 )
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle(":wastebasket: **Clear Messages**")
        .setColor('#f2f2f2')
        .setDescription("```You must delete atleast one message```")
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
    )

  await message.channel.messages.fetch({limit: args[0]}).then(messages => {
    message.channel.bulkDelete(messages)
    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle(":wastebasket: **Clear Messages**")
        .setColor('f2f2f2')
        .setDescription(`\`\`\`yaml\nDeleted ${args[0]} message from this channel.\n\`\`\``)
        .setFooter(`Requested by ${message.author.username} | This message will disapeare in 10 second`, message.author.displayAvatarURL())
    ).then(message => {
      message.delete({timeout: 10000})
    })
  })  
 }
}
