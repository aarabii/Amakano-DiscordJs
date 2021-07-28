const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'poke',
    run(client, message, args){
        if (!message.guild) return;
            if (message.mentions.members.size === 0) {
            async function no_ping() {
                const GIF = await neko.sfw.poke();
                const embed = new Discord.MessageEmbed()
                .setColor('#f01390')
                .setTitle(":point_right: Poke")
                .setDescription(`${message.author.username} poked themselves`)
                .setImage(GIF.url)
                .setFooter(`Requested by ${message.author.username}`)
                message.channel.send(embed);
            }
            no_ping();
            }
            if (message.mentions.members.size !== 0) {
            async function ping() {
            const member = message.mentions.members.first();
            const GIF = await neko.sfw.poke();
            const embed = new Discord.MessageEmbed()
            .setColor('#f01390')
            .setTitle(":point_right: Poke")
            .setDescription(`${message.author.username} poked ${member.user.username}`)
            .setImage(GIF.url)
            .setFooter(`Requested by ${message.author.username}`)
            message.channel.send(embed);
            }
            ping();
        }
    }
}