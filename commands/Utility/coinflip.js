module.exports = {
 name: "coinflip",
 aliases: ['toss','h/t'],
 usage: "coinflip",
 description: "coinflip  for you",
 run: async(client, message, args) => {

let heads = new Discord.MessageEmbed()
  .setTitle("Heads")
  .setDescription("You tossed and recieved a Head!")
  .setColor("RANDOM")
  .setFooter("Type Help to a recieve list of my commands")
let tails = new Discord.MessageEmbed()
  .setTitle("Tails")
  .setDescription("You tossed and recieved a Tails!")
  .setColor("RANDOM")
  .setFooter("Type Help to recieve a list of my commands")
let chances = [heads,tails]
  message.channel.send(chances[Math.floor(Math.random() * chances.length)])

 }
}