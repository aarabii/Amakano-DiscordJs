let Discord = require("discord.js");
const canvacord = require("canvacord");
const Canvas = require("discord-canvas")

module.exports = {
  name: "wasted",
  aliases: [],
  usage: "wasted",
  description: "show wasteded image",
  run: async (client, message, args) => {

   let user = message.mentions.users.first() || message.author;
    let avatar = user.displayAvatarURL({ format: "png", dynamic: false})
    let image = await canvacord.Canvas.wasted(avatar)
    let attachment = new Discord.MessageAttachment(image, "wasted.png")
  return message.channel.send(attachment)

  }
}