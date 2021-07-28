const Discord = require('discord.js')

module.exports = {
    name: 'radio',
    run: async(client, message, args) => {
        
    const voiceChannel = message.member.voice.channel;
    if(!voiceChannel)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setTitle('**Amakano || Radio**')
        .setDescription("```yaml\nYou must be in voice channel.```")
        .setThumbnail(message.author.displayAvatarURL())
        .setColor('ffffff')
    ); 
    
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if(!permissions.has('CONNECT') || !permissions.has('SPEAK')) return message.reply('I am missing permission!');    

    var connection = await voiceChannel.join();
    await connection.voice.setSelfDeaf(true);
    connection.play("https://streams.ilovemusic.de/iloveradio14.mp3").setVolumeLogarithmic(1);
    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle('**Amakano || Radio**')
        .setDescription("```yaml\nEnjoy to the radio xD```")
        .setThumbnail(message.author.displayAvatarURL())
        .setColor('ffffff')
    )
}
}