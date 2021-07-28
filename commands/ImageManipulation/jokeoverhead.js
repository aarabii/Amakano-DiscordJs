let Discord = require("discord.js");
const canvacord = require("canvacord");
const Canvas = require("discord-canvas")

module.exports = {
  name: "jokeoverhead",
  aliases: [],
  usage: "jokeoverhead",
  description: "show jokeoverheaded image",
  run: async (client, message, args) => {

   let user = message.mentions.users.first() || message.author;
    let avatar = user.displayAvatarURL({ format: "png", dynamic: false})
    let image = await canvacord.Canvas.jokeoverhead(avatar)
    let attachment = new Discord.MessageAttachment(image, "jokeoverhead.png")
  return message.channel.send(attachment)

  }
}