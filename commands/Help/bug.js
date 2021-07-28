let Discord = require('discord.js');
const { MessageButton, MessageActionRow } = require('discord-buttons');


module.exports = {
  name: "report",
  aliases: ['bug','feedback','support'],
  usage: "-bug",
  description: "bug report cmd",
  run: async (client, message, clickButton, args) => {

const bugtext = message.content.split(' ').slice(1).join(' ')
  

  const rchannel = client.channels.cache.get('862388674359459840')



//support server button
let sbutton = new MessageButton()
  .setStyle('url')
  .setURL('https://discord.gg/jhfMMSUTa4')  
  .setLabel('Support Server')


//row
let row = new MessageActionRow()
.addComponent(sbutton)  

if(!bugtext) {
     let embed = new Discord.MessageEmbed()
       .setTitle('Ama Support Desk')
       .setDescription("```yaml\nPlease take some of your presious time to give feedback or bug report```")
       .setColor('#ff0000')
       .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
       .setTimestamp()

  let v = await  message.channel.send({
        embed: embed,
        components: row
    })  
  } else {

let embed = new Discord.MessageEmbed()
  .setTitle('Ama Support Desk')
  .setDescription(`\`\`\`yaml\n${bugtext}\n\`\`\`\n\`\`\`yaml\nYour Feedback has been submited\n\`\`\``)
  // .setDescription(`\`\`\`yaml\n${bugtext}\n\`\`\``)

  .setColor('#ff0000')
  .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())
  .setTimestamp()


  let v = await  message.channel.send({
        embed: embed,
        components: row
    })  



let subreport = new Discord.MessageEmbed()
  .setTitle("Feedback Received") 
  .setDescription(bugtext)
  .addFields(
    { name: 'From', value: `${message.author.tag}`, inline: true }
    )
  .setThumbnail(message.author.displayAvatarURL())  
  .setColor('#ffff00')

      
rchannel.send(subreport)
  }


  }
}