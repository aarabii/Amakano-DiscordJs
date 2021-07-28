let Discord = require("discord.js");
const canvacord = require("canvacord");
const Canvas = require("discord-canvas")

module.exports = {
  name: "invert",
  aliases: [],
  usage: "invert",
  description: "show inverted image",
  run: async (client, message, args) => {

   let user = message.mentions.users.first() || message.author;
    let avatar = user.displayAvatarURL({ format: "png", dynamic: false})
    let image = await canvacord.Canvas.invert(avatar)
    let attachment = new Discord.MessageAttachment(image, "invert.png")
  return message.channel.send(attachment)

  }
}