const Discord = require('discord.js');
const disbut = require('discord-buttons')
const { FastType } = require('weky')
const { MessageButton } = require('discord-buttons')

module.exports = {
 name: "fasttype",
 aliases: ['ft'],
 usage: "fasttype game",
 description: "fasttype game",
 run: async(client, message, args) => {

await FastType({
    message: message,
    embed: {
        title: '**Amakano || Fast Type**',
        description: 'You have **{{time}}** to type the below sentence.',
        color: '#7289da',
        timestamp: true
    },
    sentence: 'This is a sentence!',
    winMessage: 'GG, you have a wpm of **{{wpm}}** and You made it in **{{time}}**.',
    loseMessage: 'Better luck next time!',
    cancelMessage: 'You ended the game!',
    time: 60000,
    buttonText: 'Cancel',
    othersMessage: 'Only <@{{author}}> can use the buttons!'
});

 }
}