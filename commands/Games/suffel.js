const Discord = require('discord.js');
const disbut = require('discord-buttons')
const { ShuffleGuess } = require('weky');
const { MessageButton } = require('discord-buttons')

var randomWords = require('random-words');
const word = randomWords();

module.exports = {
 name: "shuffle",
 aliases: [],
 usage: "shuffle game",
 description: "shuffle game",
 run: async(client, message, args) => {

const game = new ShuffleGuess({
              message: message,
              word: word, // or a simple word
              winMessage: "GG you won!", // message sent when user's message matches with the word
              colorReshuffleButton: 'green', // color of the reshuffle button (regen)
              messageReshuffleButton: 'reshuffle', // text of the reshuffle button (regen)
              colorCancelButton: 'red', // color of the cancel button (exit, quit, stop)
              messageCancelButton: 'cancel', // text of the cancel button
              client: client
});
game.start();

 }
}