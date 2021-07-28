const fetch = require('node-fetch');
const Discord = require('discord.js');


module.exports = {
 name: "drake",
 aliases: [],
 usage: "drake",
 description: "meme",
 run: async(client, message, args) => {

const userd = args[0]
const user22 = args[1]
const res = await fetch(`https://frenchnoodles.xyz/api/endpoints/drake/?text1=${userd}&text2=${user22}`);

if(!userd)
  return message.channel.send(
    new Discord.MessageEmbed()
      .setTitle('**Drake**')
      .setDescription('```yaml\nPlease give some text to convert```\n\n```Example: .drake No Yes```')
      .setColor('ffffff')
      .setThumbnail(message.author.displayAvatarURL())
      .setFooter(`Requested by ${message.author.tag}`)
  )
            let Image = await res.buffer();
            const cmm = new Discord.MessageAttachment(Image);
            message.channel.send(cmm);

 }
}