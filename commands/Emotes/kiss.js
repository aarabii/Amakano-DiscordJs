const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'kiss',
    run(client, message, args){
        if (!message.guild) return;
            if (message.mentions.members.size === 0) {
            async function no_ping() {
                const GIF = await neko.sfw.kiss();
                const embed = new Discord.MessageEmbed()
                .setTitle(":kiss: Kiss")
                .setColor('#f01390')
                .setFooter(`Requested by ${message.author.username}`)
                .setDescription(`${message.author.username} kissed themselves`)
                .setImage(GIF.url)
                message.channel.send(embed);
            }
            no_ping();
            }
            if (message.mentions.members.size !== 0) {
            async function ping() {
            const member = message.mentions.members.first();
            const GIF = await neko.sfw.kiss();
            const embed = new Discord.MessageEmbed()
            .setTitle(":kiss: Kiss")
            .setColor('#f01390')
            .setFooter(`Requested by ${message.author.username}`)
            .setDescription(`${message.author.username} kissed ${member.user.username}`)
            .setImage(GIF.url)
            message.channel.send(embed);
            }
            ping();
        }
    }
}