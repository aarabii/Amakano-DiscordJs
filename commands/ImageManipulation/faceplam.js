let Discord = require("discord.js");
const canvacord = require("canvacord");
const Canvas = require("discord-canvas")

module.exports = {
  name: "faceplam",
  aliases: [],
  usage: "faceplam",
  description: "show faceplamed image",
  run: async (client, message, args) => {

   let user = message.mentions.users.first() || message.author;
    let avatar = user.displayAvatarURL({ format: "png", dynamic: false})
    let image = await canvacord.Canvas.faceplam(avatar)
    let attachment = new Discord.MessageAttachment(image, "faceplam.png")
  return message.channel.send(attachment)

  }
}