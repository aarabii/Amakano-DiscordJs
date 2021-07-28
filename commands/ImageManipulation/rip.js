let Discord = require("discord.js");
const canvacord = require("canvacord");
const Canvas = require("discord-canvas")

module.exports = {
  name: "rip",
  aliases: [],
  usage: "rip",
  description: "show riped image",
  run: async (client, message, args) => {

   let user = message.mentions.users.first() || message.author;
    let avatar = user.displayAvatarURL({ format: "png", dynamic: false})
    let image = await canvacord.Canvas.rip(avatar)
    let attachment = new Discord.MessageAttachment(image, "rip.png")
  return message.channel.send(attachment)

  }
}