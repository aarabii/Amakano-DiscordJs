const Discord = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: 'balance',
  aliases: ['bal'],
  run: async(client, message, args) => {

   const member = message.mentions.users.first() || message.author

   let currency = ':bank:';
   let coin = ':coin:';

   let balance = await db.get(`wallet_${member.id}`);
   let bank = await db.get(`bank_${member.id}`);

   if(balance === null) balance = 0
   if(bank === null) bank = 0

   message.channel.send(
     new Discord.MessageEmbed()
       .setTitle('**Amakano || Balance**')
       .setThumbnail(member.displayAvatarURL())
       .setColor('#ffffcc')
       .setDescription(`•Wallet: ${coin}${balance} \n •Bank: ${currency}${bank}`)
       .setFooter(`Requested by ${message.author.username}`)
   )
  }
}