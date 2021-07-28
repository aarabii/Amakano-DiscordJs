const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: 'add',
  aliases: ['give'],
  run: async(client, message, args) => {

   const member = message.mentions.users.first() || message.author

   let currency = ':bank:';
   let coin = ':coin:';


   if (!message.member.permissions.has('ADMINISTRATOR')) {
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle('**Amakano || Pay**')
        .setThumbnail(message.author.displayAvatarURL())
        .setColor('#ffffcc')
        .setDescription("```yaml\nSorry, You are not eligble to give money to a user.```\n\n```Error: Missing ADMINISTRATOR permission.```")
        .setFooter(`Requested by ${message.author.username}`) 
    );
   }

   if(!member) 
     return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle('**Amakano || Pay**')
        .setThumbnail(message.author.displayAvatarURL())
        .setColor('#ffffcc')
        .setDescription("```yaml\nPlease mention someone to give money.```")
        .setFooter(`Requested by ${message.author.username}`)        
     )
   

   if(member === message.author) 
     return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle('**Amakano || Pay**')
        .setThumbnail(message.author.displayAvatarURL())
        .setColor('#ffffcc')
        .setDescription("```yaml\nSorry, You can't add money to your profile.```")
        .setFooter(`Requested by ${message.author.username}`)             
     )
   

   if(!args[1]) 
     return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle('**Amakano || Pay**')
        .setThumbnail(message.author.displayAvatarURL())
        .setColor('#ffffcc')
        .setDescription("```yaml\nPlease provide the number of money or coin you want to give.```")
        .setFooter(`Requested by ${message.author.username}`)          
     )
   

   if(isNaN(args[1])) 
     return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle('**Amakano || Pay**')
        .setThumbnail(message.author.displayAvatarURL())
        .setColor('#ffffcc')
        .setDescription("```yaml\nPlease enter a valid number.```")
        .setFooter(`Requested by ${message.author.username}`)         
     )
   

   if(args[1] > 100000 ) 
     return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle('**Amakano || Pay**')
        .setThumbnail(message.author.displayAvatarURL())
        .setColor('#ffffcc')
        .setDescription("```yaml\nYou can't give more than 100,000 coin at a time.```")
        .setFooter(`Requested by ${message.author.username}`)         
     )     
   

   if(args[1] < 10 ) 
     return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle('**Amakano || Pay**')
        .setThumbnail(message.author.displayAvatarURL())
        .setColor('#ffffcc')
        .setDescription("```yaml\nYou can't give less than 10 coin, let them work and earn by their own.```")
        .setFooter(`Requested by ${message.author.username}`)         
     )     
   
   let amount = args[1];

   let currentbal = await db.get(`wallet_${member.id}`)
   let bank = await db.get(`bank_${member.id}`);

   if(bank === null) bank = 0

   let newbalance = await db.set(`wallet_${member.id}`, currentbal + amount)

   message.channel.send(
      new Discord.MessageEmbed()
        .setTitle('**Amakano || Pay**')
        .setThumbnail(member.displayAvatarURL())
        .setColor('#ffffcc')
        .setDescription(`GG! ${member} you have recived ${amount}${coin} in you Wallet by ${message.author}`)
        .addField(
          {
            name: 'Wallet',
            value: `${newbalance}${coin}`,
            inline: true
          },
          {
            name: 'Bank',
            value: `${bank}${currency}`,
            inline: true
          }
        )
        .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())       
   )

   
  }
}