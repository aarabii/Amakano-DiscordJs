const Discord = require('discord.js');
const disbut = require('discord-buttons')
const { Calculator } = require('weky')
const { MessageButton } = require('discord-buttons')

module.exports = {
 name: "calculator",
 aliases: ['calc','maths'],
 usage: "calculate",
 description: "calculate",
 run: async(client, message, args) => {

  await Calculator({
    message: message,
    embed: {
        title: '**Amakano || Calculator**',
        color: '#7289da',
        timestamp: true ,
    },
    disabledQuery: 'Calculator is disabled!',
    invalidQuery: 'The provided equation is invalid!',
    othersMessage: 'Only <@{{author}}> can use the buttons!'
});

 }
}