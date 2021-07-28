let Discord = require('discord.js');

module.exports = {
  name: "userinfo",
  aliases: ['whois'],
  usage: "userinfo",
  description: "gives user info",
  run: async (client, message, args) => {

let user = message.mentions.users.first() || message.author;

let member = message.mentions.members.first() || message.member;

let e = new Discord.MessageEmbed()
  .setAuthor(user.username)
  .setColor('#ff6600')
  .setTimestamp()
  .addFields(  
   {
    name: "Full Username",
    value: `${member.user.tag}`,
    inline: true
   },
   {
    name: "User ID",
    value: user.id,
    inline: true
   },   
   {
    name: "Nickname",
    value: `${member.nickname}`,
    inline: true
   },   
   {
    name: "Status",
    value: `${user.presence.status}`,
    inline: true
   },                
   {
    name: "User Joined Server At",
    value: member.joinedAt
   },
   {
    name: "User Created At",
    value: user.createdAt
   },
   {
    name: "Roles",
    value: `${member.roles.cache.filter(r => r.id !== message.guild.id).map(roles => `\`${roles.name}\``).join(" **|** ") || ":no_entry: No Roles"}`
   }
  )
  .setThumbnail(user.displayAvatarURL({ dynamic: true }))

message.channel.send(e);

 }
}