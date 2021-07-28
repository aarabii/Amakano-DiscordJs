let Discord = require("discord.js");
const canvacord = require("canvacord");
const Canvas = require("discord-canvas")

module.exports = {
  name: "delete",
  aliases: [],
  usage: "delete",
  description: "show deleteed image",
  run: async (client, message, args) => {

   let user = message.mentions.users.first() || message.author;
    let avatar = user.displayAvatarURL({ format: "png", dynamic: false})
    let image = await canvacord.Canvas.delete(avatar)
    let attachment = new Discord.MessageAttachment(image, "delete.png")
  return message.channel.send(attachment)

  }
}