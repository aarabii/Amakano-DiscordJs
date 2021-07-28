const { MessageAttachment } = require('discord.js')
let nf = require('node-fetch')

module.exports = {
  name: "test",//ban cmd
  aliases: [],
  usage: "test",
  description: "send meme",
  run: async(client, message, args) => {

  //nf('https://gelbooru.com/index.php?page=dapi&s=post&q=index&json=1').then(res => { res.json().then(Data => { 

//let IMG = Data[0].file_url
//let Tags = Data[0].tags

//message.channel.send(Tags, new MessageAttachment(IMG))


  //})
  //})
  }
}

