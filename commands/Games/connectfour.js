const Discord = require('discord.js');
const djsGames = require('djs-games')
const ConnectFour = new djsGames.ConnectFour()

module.exports = {
 name: "connectfour",
 aliases: ['connect four','connect4'],
 usage: "connectfour @user",
 description: "game",
 run: async(client, message, args) => {

 ConnectFour.startGame(message)


 }
}