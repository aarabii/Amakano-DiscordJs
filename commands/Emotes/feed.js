const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'feed',
    run(client, message, args){
        if (!message.guild) return;
            if (message.mentions.members.size === 0) {
            async function no_ping() {
                const GIF = await neko.sfw.feed();
                const embed = new Discord.MessageEmbed()
                .setColor('#f01390')
                .setTitle(`${message.author.username} feeded themselves`)
                .setImage(GIF.url)
                .setFooter(`Requested by ${message.author.username}`)
                message.channel.send(embed);
            }
            no_ping();
            }
            if (message.mentions.members.size !== 0) {
            async function ping() {
            const member = message.mentions.members.first();
            const GIF = await neko.sfw.feed();
            const embed = new Discord.MessageEmbed()
            .setColor('#f01390')
            .setTitle(`${message.author.username} feeded ${member.user.username}`)
            .setImage(GIF.url)
            .setFooter(`Requested by ${message.author.username}`)
            message.channel.send(embed);
            }
            ping();
        }
    }
}