  
const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'waifu',
    run(client, message, args){
        if (!message.guild) return;
            async function waifu() {
            const GIF = await neko.sfw.waifu();
            const embed = new Discord.MessageEmbed()
        .setTitle("WAIFU")
        .setColor('#f01390')
        .setFooter(`Requested by ${message.author.username}`)
        .setDescription(`${message.author.username} here's a random Waifu for you :)`)
        .setImage(GIF.url)
            message.channel.send(embed);
            }
            waifu();
    }
}