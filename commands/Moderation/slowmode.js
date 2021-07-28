let Discord = require('discord.js');

module.exports = {
  name: "slowmode",
  aliases: [],
  usage: "slowmode",
  description: "to enable or disable slowmode",
  run: async (client, message) => {

  if (message.author.bot) return;
  if (!message.member.hasPermission('MANAGE_MESSAGES'))
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**SlowMode**")
        .setColor('ffffff')
        .setDescription(`\`\`\`yaml\n${message.author.username} you dont have *MANAGE_MESSAGES* permissiom to execute this command\n\`\`\``)
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
    );
  const messageArray = message.content.split(' ');
  const args = messageArray.slice(1);
  const seconds = args[0];
  const MAX_SECONDS = 21600;

  if (isNaN(seconds)) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**SlowMode**")
        .setColor('ffffff')
        .setDescription(`\`\`\`yaml\n${message.author.username} you need to specify time in second\n\`\`\``)
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
    );
  }

  if (seconds > MAX_SECONDS) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**SlowMode**")
        .setColor('ffffff')
        .setDescription(`\`\`\`yaml\n${message.author.username} maximum number of second is ${MAX_SECONDS}\n\`\`\``)
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
    );
  }

  try {
    await message.channel.setRateLimitPerUser(seconds);
    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle("**SlowMode**")
        .setColor('ffffff')
        .setDescription(`\`\`\`yaml\nSlowmode has been enabled for ${seconds} second.\n\`\`\``)
        .addField('Slowmode is enabled by:', `${message.author.username}`, true)
        .setThumbnail(message.author.displayAvatarURL())
        .setFooter(`Requested by ${message.author.username}`)     
    );
  } catch (error) {
    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle('**SlowMode**')
        .setColor('ffffff') 
        .setDescription("```yaml\nOops, There is an error please try again.```")     
    );
    console.log(error);
  }



  }
}