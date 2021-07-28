const Discord = require("discord.js");
const akinator = require("discord.js-akinator");

module.exports = {
 name: "akinator",
 aliases: ['aki'],
 usage: "akinator",
 description: "akinator",
 run: async(client, message, args) => {

akinator(message, client);

 }
}