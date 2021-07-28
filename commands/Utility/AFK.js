const db = require('quick.db')
const Discord = require('discord.js')

module.exports = {
  name : 'afk',
  run : async(client, message, args) => {

   const content = args.join(" ")

   const reason = [
     "I need some break.",
     "I need to go somewhere.",
     "I'll be back soon.",
     "Out of baterry",
     "No hopes left :("
   ]

   const setreason = reason[Math.floor(Math.random() * reason.length)]


  
    if(!content) {

    await db.set(`afk-${message.author.id}+${message.guild.id}`, content)
        const embed = new Discord.MessageEmbed()
        .setTitle("**AFK**")
        .setDescription(`\`\`\`yaml\n${message.author.username} I set your AFK.\n\`\`\`\n**Reason :** \`\`\`yaml\n${setreason}\n\`\`\`\n\`\`\`${message.author.username} you haven't provided any reason so here is a self-genreated reason\n\`\`\``)
        .setColor("GREEN")
        .setThumbnail(message.author.displayAvatarURL())
        .setTimestamp()
        message.channel.send(embed)  

    } else {

    await db.set(`afk-${message.author.id}+${message.guild.id}`, content)
        const embed = new Discord.MessageEmbed()
        .setTitle("**AFK**")
        .setDescription(`\`\`\`yaml\n${message.author.username} I set your AFK.\n\`\`\`\n**Reason :** \`\`\`yaml\n${content}\n\`\`\``)
        .setColor("GREEN")
        .setThumbnail(message.author.displayAvatarURL())
        .setTimestamp()
        message.channel.send(embed) 
    }

client.on("message",async message => {

  const content = args.join(" ") 

 if (message.content.includes('@here') || message.content.includes('@everyone'))
  return false; 

 if (message.author.bot) return;

 if(await db.has(`afk-${message.author.id}+${message.guild.id}`)) {

    await db.delete(`afk-${message.author.id}+${message.guild.id}`)

      let afkdone = new Discord.MessageEmbed()
        .setTitle("**AFK**")
        .setDescription(`\`\`\`yaml\nWelcome Back ${message.author.username} I removed your AFK.\n\`\`\``)
        .setColor("GREEN")
        .setThumbnail(message.author.displayAvatarURL())
        .setTimestamp()
        .setFooter("This message disappears in 20 seconds.")
        message.channel.send(afkdone).then(message => {
      message.delete({timeout: 20000})
    })
  }

//checking for mentions

 const filter = m => m.author.id === message.author.id

 if(message.mentions.members.first()) {
    
  const user = message.mentions.users.first()  

      if(await db.has(`afk-${message.mentions.members.first().id}+${message.guild.id}`, content)) {

       let rdone = new Discord.MessageEmbed()
        .setTitle("**AFK**")
        .setDescription(`\`\`\`yaml\n${user.username} is AFK.${content}\n\`\`\`\n\`\`\`yaml\nIf its Important you can leave a message within 20 seconds and i'll deliver it to ${user.username}\n\`\`\``)
        .setColor("GREEN")
        .setThumbnail(user.avatarURL())
        .setTimestamp()
        message.channel.send(rdone).then(() => {

          message.channel.awaitMessages(filter, { max: 1, time: 20000, errors: ['time'] })

		      .then(async collected => {
            await user.send(`Message by ${message.author}`, collected.first())
			      message.channel.send(
              new Discord.MessageEmbed()
                .setTitle("**AFK**")
                .setDescription(`\`\`\`yaml\n${message.author.username} I have sent your message to ${user.username}\n\`\`\``)
                .setColor("GREEN")
                .setThumbnail(user.avatarURL())
                .setTimestamp()
                .setFooter("This message disappears in 20 seconds.")            
              ).then(message => {
                message.delete({timeout: 20000})
              })
          })
		
		      .catch(collected => {
			      message.channel.send(
              new Discord.MessageEmbed()
                .setTitle("**AFK**")
                .setDescription(`\`\`\`yaml\n Timeout. If its still important you can send your text to ${user.username} by DM.\n\`\`\``)
                .setColor("GREEN")
                .setThumbnail(user.avatarURL())
                .setTimestamp()
                .setFooter("This message disappears in 20 seconds.")                 
            ).then(message => {
              message.delete({timeout: 20000})
            })          
          })  
        })      

    }
  }
        


})    

  }
}
