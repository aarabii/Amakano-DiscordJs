let Discord = require('discord.js');

module.exports = {
  name: "bold",
  aliases: [],
  usage: "bold",
  description: "blue text",
  run: (client, message, args) => {

      let boldy = message.content.split(" ").slice(1)
  if(!boldy[0]) return message.channel.send("You Need to Write Something to bold u nab o_O")
  else {
    message.channel.send(`**${boldy.join(" ")}**`)
  }

  }
}