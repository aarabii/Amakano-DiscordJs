const { Message, MessageEmbed } = require('discord.js');
const discord = require('discord.js');

const { NekoBot } = require("nekobot-api");
const api = new NekoBot(`015445535454455354D6`);

module.exports = {
  name: "ship",
  aliases: [],
  usage: "ship",
  description: "will ship u whit ur love once",
  run: async(client, message, args) => {
    // function to extract the id from mentions
    function getInput(input) {
	    if (!input) return;

	    if (input.startsWith('<@') && input.endsWith('>')) {
		    input = input.slice(2, -1);

		    if (input.startsWith('!')) {
			    input = input.slice(1);
		    }
      } else if (input.includes('#')) {
        input = input.split('#')[0]
      }
      return input;
    }
    
    let user1 = await client.users.cache.get(getInput(args[0]))
    let user2 = await client.users.cache.get(getInput(args[1]))

    const image = await api.generate("ship", { user1:user1.avatarURL(), user2:user2.avatarURL() });
    message.channel.send(image);
  }
}
