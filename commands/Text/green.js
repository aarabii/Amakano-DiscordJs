let Discord = require('discord.js');

module.exports = {
  name: "green",
  aliases: [],
  usage: "green",
  description: "green text",
  run: (client, message, args) => {
      let green = message.content.split(" ").slice(1)
  if(!green[0]) return message.channel.send("You Need to Write Something to greentext u nab o_O")
  else {
    message.channel.send(`\`\`\`diff\n+${green.join(" ")}\`\`\``)
  }

  }
}