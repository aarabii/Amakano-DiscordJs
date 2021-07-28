let Discord = require("discord.js");
const canvacord = require("canvacord");
const Canvas = require("discord-canvas")

module.exports = {
  name: "trigger",
  aliases: [],
  usage: "trigger",
  description: "show triggered image",
  run: async (client, message, args) => {

   let user = message.mentions.users.first() || message.author;
    let avatar = user.displayAvatarURL({ format: "png", dynamic: false})
    let image = await canvacord.Canvas.trigger(avatar)
    let attachment = new Discord.MessageAttachment(image, "trigger.png")
  return message.channel.send(attachment)

  }
}