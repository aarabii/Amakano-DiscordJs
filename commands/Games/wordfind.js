const Discord = require('discord.js');
const disbut = require('discord-buttons')
const { ChaosWords } = require("weky")
const { MessageButton } = require('discord-buttons')


module.exports = {
 name: "chooseword",
 aliases: ['findword','wordfind','wordhunt'],
 usage: "choose word",
 description: "find word",
 run: async(client, message, args) => {

await ChaosWords({
    message: message,
    embed: {
        title: '**Amakano || Chaos Word**',
        description: 'You have **{{time}}** to find the hidden words in the below sentence.',
        color: '#7289da',
        field1: 'Sentence:',
        field2: 'Words Found/Remaining Words:',
        field3: 'Words found:',
        field4: 'Words:',
        timestamp: true
    },
    winMessage: 'GG, You won! You made it in **{{time}}**.',
    loseMessage: 'Better luck next time!',
    wrongWordMessage: 'Wrong Guess! You have **{{remaining_tries}}** tries left.',
    correctWordMessage: 'GG, **{{word}}** was correct! You have to find **{{remaining}}** more word(s).',
    time: 60000,
    words: ['hello', 'these', 'are', 'words'],
    charGenerated: 17,
    maxTries: 10,
    buttonText: 'Cancel',
    othersMessage: 'Only <@{{author}}> can use the buttons!'
});s

 }
}