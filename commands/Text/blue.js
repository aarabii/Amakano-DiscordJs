let Discord = require('discord.js');

module.exports = {
  name: "blue",
  aliases: [],
  usage: "blue",
  description: "blue text",
  run: (client, message, args) => {
      let blue = message.content.split(" ").slice(1)
  if(!blue[0]) return message.channel.send("You Need to Write Something to bluetext u nab o_O")
  else {
    message.channel.send(`\`\`\`ini\n[${blue.join(" ")}]\`\`\``)
  }

  }
}