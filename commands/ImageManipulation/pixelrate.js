let Discord = require("discord.js");
const canvacord = require("canvacord");
const Canvas = require("discord-canvas")

module.exports = {
  name: "pixelrate",
  aliases: [],
  usage: "pixelrate",
  description: "show pixelrateed image",
  run: async (client, message, args) => {

   let user = message.mentions.users.first() || message.author;
    let avatar = user.displayAvatarURL({ format: "png", dynamic: false})
    let image = await canvacord.Canvas.pixelrate(avatar)
    let attachment = new Discord.MessageAttachment(image, "pixelrate.png")
  return message.channel.send(attachment)

  }
}