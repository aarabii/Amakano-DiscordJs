const fetch = require('node-fetch');
const discord = require('discord.js');
const config = require("../../config.json")
module.exports = {
        name: 'magik',
        aliases: ["magic"],
        description: 'Make a magik avatar!',
        usage: '<magik>',
    run: async(client, message, args) => {
      let user = message.mentions.users.first() || client.users.cache.get(args[0]) || match(args.join(" ").toLowerCase(), message.guild) || message.author;

      try {
       
        let msg = await message.channel.send(new discord.MessageEmbed().setColor(config.color).setDescription("Generating..."))
       
        
        let user = message.mentions.users.first() ? message.mentions.users.first().displayAvatarURL({format: 'png', size: 512}) :message.author.displayAvatarURL({format: 'png', size: 512});
        let numb = Math.ceil(Math.random() * 10)
        const data = await fetch(
            `https://nekobot.xyz/api/imagegen?type=magik&image=${user}&intensity=${numb}`
          ).then((res) => res.json());
          msg.delete({timeout: 500})
          message.channel.send(new discord.MessageEmbed().setColor(config.color).setImage(data.message))
      
          } catch (err) {
      
           console.log(`${err}, command name: magik`)
           message.channel.send("An error occurred")
          }
        
    
      
      function match(msg, i) {
        if (!msg) return undefined;
        if (!i) return undefined;
        let user = i.members.cache.find(
          m =>
            m.user.username.toLowerCase().startsWith(msg) ||
            m.user.username.toLowerCase() === msg ||
            m.user.username.toLowerCase().includes(msg) ||
            m.displayName.toLowerCase().startsWith(msg) ||
            m.displayName.toLowerCase() === msg ||
            m.displayName.toLowerCase().includes(msg)
        );
        if (!user) return undefined;
        return user.user;
      
        }}
};