let Discord = require("discord.js");
const canvacord = require("canvacord");
const Canvas = require("discord-canvas")

module.exports = {
  name: "blur",
  aliases: [],
  usage: "blur",
  description: "show blured image",
  run: async (client, message, args) => {

   let user = message.mentions.users.first() || message.author;
    let avatar = user.displayAvatarURL({ format: "png", dynamic: false})
    let image = await canvacord.Canvas.blur(avatar)
    let attachment = new Discord.MessageAttachment(image, "blur.png")
  return message.channel.send(attachment)

  }
}