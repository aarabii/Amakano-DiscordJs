const Discord = require('discord.js');


module.exports = {
 name: "firstmessage",
 aliases: ['fm', 'first message'],
 usage: "firstmessage",
 description: "will show firstmessage",
 run: async(client, message, args) => {

const fetchMessages = await message.channel.messages.fetch({
  after: 1,
  limit: 1,
})

const msg = fetchMessages.first();

let embed = new Discord.MessageEmbed()
  .setTitle(`First Message In ${message.guild.name}`)
  .setURL(msg.url)
  .setThumbnail(message.author.displayAvatarURL({ dynamic: true}))
  .setDescription("Content: " + msg.content)
  .addField("Author", msg.author, true)
  .addField("Message ID", msg.id, true)
  .addField("Created At", message.createdAt.toLocaleDateString(), true)
message.channel.send(embed)
 }
}