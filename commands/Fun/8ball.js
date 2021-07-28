const Discord = require('discord.js');

module.exports = {
 name: "fortune",
 aliases: ['8ball'],
 usage: "8ball",
 description: "8ball",
 run: async(client, message, args) => {

let replies = [
  'https://media.tenor.com/images/fe11b0e66c642f3f527aa7d4cc1e4b07/tenor.gif',
  'https://media.tenor.com/images/59aaf1a5d9c534fa04ed0731e185b935/tenor.gif',
  'https://media.tenor.com/images/3db3d890ffefae6f482189940d116a5b/tenor.gif',
  'https://media.tenor.com/images/f7b0070f0c2d0b99cf536c5b752f5670/tenor.gif',
  'https://media.tenor.com/images/3d8a8fbe05a3a7d14716e42aca510715/tenor.gif',
  'https://media.tenor.com/images/e2542573e5d1ccd56ce1efd240d49979/tenor.gif'
]

let randomized = replies[Math.floor(Math.random() * replies.length)]

 let sentence = message.content.split(" ");
   sentence.shift();
   sentence = sentence.join(" ");

 if (!sentence) return message.reply(
   new Discord.MessageEmbed()
     .setTitle('**8Ball**')
     .setColor('#ffffff')
     .setDescription("```yaml\nWith this command a question will be randomly answered .```")
     .addField('```Usage```', '.fortune<question>')
     .addField('```Example```', '.fortune Am I ever gonna rich?')
     .setFooter(`Requested by ${message.author.tag}`)
  )
  let ballEmbed = new Discord.MessageEmbed()
    .setTitle("**8Ball**")
    .addField(`${message.author.suername}'s Question.'`, `${sentence}`)
    .addField("My Answer", `:`)
    .setImage(randomized)
    .setColor("#ffffff")
    .setFooter(`Requested by ${message.author.tag}`)
   message.channel.send(ballEmbed)
 }
}