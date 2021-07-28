let Discord = require("discord.js");
const canvacord = require("canvacord");
const Canvas = require("discord-canvas")

module.exports = {
  name: "circle",
  aliases: [],
  usage: "circle",
  description: "show circleed image",
  run: async (client, message, args) => {

   let user = message.mentions.users.first() || message.author;
    let avatar = user.displayAvatarURL({ format: "png", dynamic: false})
    let image = await canvacord.Canvas.circle(avatar)
    let attachment = new Discord.MessageAttachment(image, "circle.png")
  return message.channel.send(attachment)

  }
}