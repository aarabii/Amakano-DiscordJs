const Discord = require('discord.js')

module.exports = {
  name: 'poll',
  description: '',
  aliases: ["poll"],
  usage: '',
  run: async (client, message) => {

   const args = message.content.trim().split(/ +/g);

// Defining the question...
let question = [];

for (let i = 1; i < args.length; i++) {
  if (args[i].startsWith('"')) break;
  else question.push(args[i]);
}

question = question.join(' ');

// Defining the choices...
const choices = [];

const regex = /(["'])((?:\\\1|\1\1|(?!\1).)*)\1/g;
let match;
while (match = regex.exec(args.join(' '))) choices.push(match[2]);

// Creating and sending embed...
let content = [];
for (let i = 0; i < choices.length; i++) content.push(`${options[i]} ${choices[i]}`);
content = content.join('\n');

var embed = new Discord.MessageEmbed()
  .setColor('#8CD7FF')
  .setTitle(`**${question}**`)
  .setDescription(content);

message.channel.send(`:bar_chart: ${message.author} started a poll.`, embed)
  .then(async m => {
    for (let i = 0; i < choices.length; i++) await m.react(options[i]);
  });
  }
}