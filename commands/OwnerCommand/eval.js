const { MessageEmbed } = require("discord.js");
const owner = ["854005586177687552"];

module.exports = {
  name: "eval",
  description: "Run A Whole Code With This Command!",
  category: "owner",
  usage: "eval <code>",
  
  run: async(client, message, args) => {
    //Eval Command(Not to be made public btw!)
    if (message.author.id != owner) {
      return message.channel.send("Limited To The Bot Owner Only!")
    }
      try {
        const code = args.join(" ");
        if (!code) {
           return message.channel.send("What do you want to evaluate?")
        }
        
        let evaled = eval(code);

        if (typeof evaled !== "string")
          evaled = require("util").inspect(evaled);

          let embed = new MessageEmbed()
          .setAuthor("Eval", message.author.avatarURL())
          .addField("Input", `\`\`\`${code}\`\`\``)
          .addField("Output", `\`\`\`${evaled}\`\`\``)
          .setColor("GREEN")

        message.channel.send(embed);
      } catch (err) {
        message.channel.send(`\`ERROR\` \`\`\`\n${err}\`\`\``);
    }
  }
}