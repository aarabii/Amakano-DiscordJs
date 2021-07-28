const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'pfp',
    run(client, message, args){
        if (!message.guild) return;
            async function avatar() {
            const GIF = await neko.sfw.avatar();
            const embed = new Discord.MessageEmbed()
        .setTitle("AVATAR")
        .setColor('#f01390')
        .setFooter(`Requested by ${message.author.username}`)
        .setDescription(`${message.author.username} here's a random anime avatar`)
        .setImage(GIF.url)
            message.channel.send(embed);
            }
            avatar();
    }
}