const Discord = require('discord.js')
const moment = require('moments')
const fetch = require('node-fetch')
const url = require('url')

module.exports = {
 name: "screenshot",
 aliases: ['ss'],
 usage: "screenshot",
 description: "will take ss for u",
 run: async(client, message, args) => {

const user = message.author.tag
    const urls = args[0];
    if (!urls)
      return message.channel
        .send(`\`\`\`\n${user},Provide a link plz\n\`\`\``)
        
    if (urls.length < 8)
      return message
        .reply(
          "<> https is too short to reach - 8 limit"
        )
        .then(m => m.delete({ timeout: 9000 }).catch(e => {}));

    const site = /^(https?:\/\/)/i.test(urls) ? urls : `http://${urls}`;
    try {
      const { body } = await fetch(
        `https://image.thum.io/get/width/1920/crop/675/noanimate/${site}`
      );

      return message.channel.send(
        
        {
          files: [{ attachment: body, name: "Screenshot.png" }]
        }
      );
    } catch (err) {
      if (err.status === 404)
        return message.channel
          .send("Could not find any results. Invalid URL?")
          .then(m => m.delete({ timeout: 14000 }).catch(e => {}));
      return message
        .reply(`Oh no, an error occurred: \`${err.message}\`. Try again later!`)
        
    };


 }
}