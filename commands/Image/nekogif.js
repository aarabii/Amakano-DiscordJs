  
const Discord = require('discord.js');
const nekoclient = require('nekos.life');
const neko = new nekoclient();

module.exports = {
    name: 'nekogif',
    run(client, message, args){
        if (!message.guild) return;
            async function nekogif() {
            const GIF = await neko.sfw.nekoGif();
            const embed = new Discord.MessageEmbed()
        .setTitle("Neko GIF")
        .setColor('#f01390')
        .setFooter(`Requested by ${message.author.username}`)
        .setDescription(`${message.author.username} here's a random NEko GIf image/gif`)
        .setImage(GIF.url)
            message.channel.send(embed);
            }
            nekogif();
    }
}