let Discord = require("discord.js");
const canvacord = require("canvacord");
const Canvas = require("discord-canvas")

module.exports = {
  name: "rainbow",
  aliases: [],
  usage: "rainbow",
  description: "show rainbowed image",
  run: async (client, message, args) => {

   let user = message.mentions.users.first() || message.author;
    let avatar = user.displayAvatarURL({ format: "png", dynamic: false})
    let image = await canvacord.Canvas.rainbow(avatar)
    let attachment = new Discord.MessageAttachment(image, "rainbow.png")
  return message.channel.send(attachment)

  }
}