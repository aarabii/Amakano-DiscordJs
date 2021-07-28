let Discord = require('discord.js');

module.exports = {
  name: "yellow",
  aliases: [],
  usage: "yellow",
  description: "yellow text",
  run: (client, message, args) => {
    
  let yellow = message.content.split(" ").slice(1)
  if(!yellow[0]) return message.channel.send("You Need to Write Something to yellowtext u nab o_O")
  else {
    message.channel.send(`\`\`\`fix\n${yellow.join(" ")}\`\`\``)
  }
  
  }
}