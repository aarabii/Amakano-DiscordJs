let Discord = require('discord.js');

module.exports = {
  name: "red",
  aliases: [],
  usage: "red",
  description: "red text",
  run: (client, message, args) => {
      let red = message.content.split(" ").slice(1)
  if(!red[0]) return message.channel.send("You Need to Write Something to redtext u nab o_O")
  else {
    message.channel.send(`\`\`\`diff\n-${red.join(" ")}\`\`\``)
  }

  }
}