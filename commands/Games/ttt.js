const Discord = require('discord.js');
const djsGames = require('djs-games')
const TicTacToe = new djsGames.TicTacToe()

module.exports = {
 name: "ttt",
 aliases: ['tictactoe'],
 usage: "ttt @user",
 description: "ttt",
 run: async(client, message, args) => {

 TicTacToe.startGame(message)


 }
}