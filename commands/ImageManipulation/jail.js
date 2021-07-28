let Discord = require("discord.js");
const canvacord = require("canvacord");
const Canvas = require("discord-canvas")

module.exports = {
  name: "jail",
  aliases: [],
  usage: "jail",
  description: "show jailed image",
  run: async (client, message, args) => {

   let user = message.mentions.users.first() || message.author;
    let avatar = user.displayAvatarURL({ format: "png", dynamic: false})
    let image = await canvacord.Canvas.jail(avatar)
    let attachment = new Discord.MessageAttachment(image, "jail.png")
  return message.channel.send(attachment)

  }
}