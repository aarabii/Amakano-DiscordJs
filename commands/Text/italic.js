let Discord = require('discord.js');

module.exports = {
  name: "italic",
  aliases: [],
  usage: "italic",
  description: "italic text",
  run: (client, message, args) => {

      let boldy = message.content.split(" ").slice(1)
  if(!boldy[0]) return message.channel.send("You Need to Write Something to italic u nab o_O")
  else {
    message.channel.send(`*${boldy.join(" ")}*`)
  }

  }
}