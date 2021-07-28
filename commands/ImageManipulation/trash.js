let Discord = require("discord.js");
const canvacord = require("canvacord");
const Canvas = require("discord-canvas")

module.exports = {
  name: "trash",
  aliases: [],
  usage: "trash",
  description: "show trashed image",
  run: async (client, message, args) => {

   let user = message.mentions.users.first() || message.author;
    let avatar = user.displayAvatarURL({ format: "png", dynamic: false})
    let image = await canvacord.Canvas.trash(avatar)
    let attachment = new Discord.MessageAttachment(image, "trash.png")
  return message.channel.send(attachment)

  }
}