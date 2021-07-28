let Discord = require("discord.js");
const canvacord = require("canvacord");
const Canvas = require("discord-canvas")

module.exports = {
  name: "shit",
  aliases: [],
  usage: "shit",
  description: "show shited image",
  run: async (client, message, args) => {

   let user = message.mentions.users.first() || message.author;
    let avatar = user.displayAvatarURL({ format: "png", dynamic: false})
    let image = await canvacord.Canvas.shit(avatar)
    let attachment = new Discord.MessageAttachment(image, "shit.png")
  return message.channel.send(attachment)

  }
}