const {
  Client,
  Message,
  MessageEmbed,
  version: djsversion,
} = require("discord.js");

const version = require("../../package.json").version;
const { utc } = require("moment");
const os = require("os");
const ms = require("ms");

module.exports = {
  name: "botinfo",
  aliases:["bi"],
  description: "Check the info of the bot",
  run: async(client, message, args) => {

    const core = os.cpus()[0];
    const bi = new MessageEmbed()
    .setURL(client.web)
    .setThumbnail(client.user.displayAvatarURL())
    .setTitle(" Bot's Complete Info!")
    .setDescription("Here is a complete info of what was used to run Tornado Bot!")
    .addField("Client", ` \`\`\`${client.user.tag} (${client.user.id}) \`\`\` `, true)
    .addField("Commands", ` \`\`\`${client.commands.size} Commands! \`\`\` `, true)
    .addField("Bot Version", ` \`\`\` v1.6.3\`\`\` `, true)
    .addField("Servers", ` \`\`\`Serving ${client.guilds.cache.size.toLocaleString()} servers! \`\`\` `, true)
    .addField("Users", `  \`\`\`Serving ${client.guilds.cache
      .reduce((a, b) => a + b.memberCount, 0)
      .toLocaleString()} users! \`\`\` `, true)
    .addField("Channels", `  \`\`\`${client.channels.cache.size.toLocaleString()} \`\`\` `, true)
    .addField("Created At", ` \`\`\`${utc(client.user.createdTimesstamp).format("Do MMMM YYYY HH:mm:ss")} \`\`\` `, true)
    .addField('Node.js Version', ` \`\`\`${process.version} \`\`\` `, true)
    .addField("Discord.js", ` \`\`\`v${djsversion} \`\`\``, true)
    .addField("Platform", ` \`\`\`${process.platform} \`\`\` `, true)
    .addField("Uptime", ` \`\`\`${ms(os.uptime() * 1000, { long:true })}  \`\`\` `, true)
    .addField("CPU STATS", ` \`\`\` Cores:${os.cpus().length} \n Model : ${core.model} \n Speed:${core.speed}MHz  \`\`\` `)
    .setColor("GREEN")
    .setTimestamp();
    message.channel.send(bi)

  }
}