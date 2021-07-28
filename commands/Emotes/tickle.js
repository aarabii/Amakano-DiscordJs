const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'tickle',
    run(client, message, args){
        if (!message.guild) return;
            if (message.mentions.members.size === 0) {
            async function no_ping() {
                const GIF = await neko.sfw.tickle();
                const embed = new Discord.MessageEmbed()
                .setColor('#f01390')
                .setTitle(":rofl: Tickle")
                .setFooter(`Requested by ${message.author.username}`)
                .setDescription(`${message.author.tag} tickled themselves`)
                .setImage(GIF.url)
                message.channel.send(embed);
            }
            no_ping();
            }
            if (message.mentions.members.size !== 0) {
            async function ping() {
            const member = message.mentions.members.first();
            const GIF = await neko.sfw.tickle();
            const embed = new Discord.MessageEmbed()
            .setColor('#f01390')
            .setTitle(":rofl: Tickle")
            .setFooter(`Requested by ${message.author.username}`)
            .setDescription(`${message.author.tag} tickled ${member.user.tag}`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            ping();
        }
    }
}