let Discord = require("discord.js");
const canvacord = require("canvacord");
const Canvas = require("discord-canvas")

module.exports = {
  name: "wanted",
  aliases: [],
  usage: "wanted",
  description: "show wanteded image",
  run: async (client, message, args) => {

   let user = message.mentions.users.first() || message.author;
    let avatar = user.displayAvatarURL({ format: "png", dynamic: false})
    let image = await canvacord.Canvas.wanted(avatar)
    let attachment = new Discord.MessageAttachment(image, "wanted.png")
  return message.channel.send(attachment)

  }
}