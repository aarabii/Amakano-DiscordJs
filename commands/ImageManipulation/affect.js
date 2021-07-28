let Discord = require("discord.js");
const canvacord = require("canvacord");
const Canvas = require("discord-canvas")

module.exports = {
  name: "affect",
  aliases: [],
  usage: "affect",
  description: "show affected image",
  run: async (client, message, args) => {

   let user = message.mentions.users.first() || message.author;
    let avatar = user.displayAvatarURL({ format: "png", dynamic: false})
    let image = await canvacord.Canvas.affect(avatar)
    let attachment = new Discord.MessageAttachment(image, "affect.png")
  return message.channel.send(attachment)

  }
}