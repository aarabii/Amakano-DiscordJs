const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
  name: "cuddle",
  aliases: [],
  usage: "cuddle @",
  description: "cuddling",
  run: async (client, message, args) => {
        if (!message.guild) return;
            if (message.mentions.members.size === 0) {
            async function no_ping() {
                const GIF = await neko.sfw.cuddle();
                const embed = new Discord.MessageEmbed()
                .setColor('#f01390')
                .setTitle(":open_hands: Cuddle")
                .setDescription(`${message.author.tag} cuddled themselves`)
                .setImage(GIF.url)
                .setFooter(`Requested by ${message.author.username}`)
                message.channel.send(embed);
            }
            no_ping();
            }
            if (message.mentions.members.size !== 0) {
            async function ping() {
            const member = message.mentions.members.first();
            const GIF = await neko.sfw.cuddle();
            const embed = new Discord.MessageEmbed()
            .setColor('#f01390')
            setTitle(":open_hands: Cuddle")
            .setDescription(`${message.author.tag} cuddled ${member.user.tag}`)
            .setImage(GIF.url)
            .setFooter(`Requested by ${message.author.username}`)
            message.channel.send(embed);
            }
            ping();
        }
    }
}