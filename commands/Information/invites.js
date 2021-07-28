const Discord = require('discord.js');


module.exports = {
 name: "invites",
 aliases: ['invite', 'checkinvites'],
 usage: "invites",
 description: "will check invites",
 run: async(client, message, args) => {

   let member = message.mentions.members.first() || message.member;
   let invites = await message.guild.fetchInvites();
   let memberInvites = invites.filter(i => i.inviter.id === member.user.id);

   if (memberInvites.size <= 0) {
     return message.channel.send(`${member.user.tag} has 0 invites in ${message.guild.name}!`, (member === message.author ? null : member));
   }

   let content = memberInvites.map(i => i.code).join("\n")
   let index = 0;
   memberInvites.forEach(invite => index += invite.uses)

   let inviteEmbed = new Discord.MessageEmbed()
   .setColor("BLACK")
   .setDescription(`invites of ${member.user.tag}`)
   .addField(`Number of Users Invited`, index)
   .addField(`Invite Codes`, content)
   .setTitle(`Invites from ${member.user.tag}`)
   message.channel.send(inviteEmbed)
 }
}