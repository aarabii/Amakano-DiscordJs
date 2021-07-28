let Discord = require("discord.js");
const canvacord = require("canvacord");
const Canvas = require("discord-canvas")

module.exports = {
  name: "hitler",
  aliases: [],
  usage: "hitler",
  description: "show hitlered image",
  run: async (client, message, args) => {

   let user = message.mentions.users.first() || message.author;
    let avatar = user.displayAvatarURL({ format: "png", dynamic: false})
    let image = await canvacord.Canvas.hitler(avatar)
    let attachment = new Discord.MessageAttachment(image, "hitler.png")
  return message.channel.send(attachment)

  }
}