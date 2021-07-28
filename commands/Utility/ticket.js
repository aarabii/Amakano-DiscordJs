const Discord = require('discord.js');
const disbut = require('discord-buttons');
const db = require('quick.db')


module.exports = {
  name: "ticket",
  aliases: [],
  usage: "make a ticket channel",
  description: "to create ticket channel",
  run: async (client, message, args) => {

let args1 = args[0];
let time = 10000;

let ticketCreate = ['new', 'create', 'add', 'enable'];
let ticketClose = ['remove', 'disable', 'close'];

if(!args1)
  return message.channel.send(
    new Discord.MessageEmbed()
      .setTitle('**Amakano || Ticket**')
      .setColor('ffffff')
      .setDescription('```yaml\nUse this command with prefix```\n\nticket create \`(Create ticket channel)\`\nticket close \`(Close ticket channel)\`')
      .setTimestamp()
  )

//create ticket 

let ticketName = await db.get(`ticketName_${message.author.id}_${message.guild.id}`);
let ticketID = await db.get(`ticketID_${message.author.id}_${message.guild.id}`);

if(ticketCreate.some(x => x.includes(args1.toLowerCase()))) {
  if(message.channel.id === ticketID) {
    message.delete();
    message.channel.send(
      new Discord.MessageEmbed()
        .setTitle('**Amakano || Ticket**')
        .setColor('ffffff')
        .setDescription("```yaml\nYou can't create ticket in this channel.```")
        .setFooter('This message will disapear in 10 second.')
        .setTimestamp()      
    ).then(x => x.delete({ timeout: time }));
  } else {
    if(!message.guild.channels.cache.find(x => x.name === ticketName)) {
      let buttonYes = new disbut.MessageButton()
        .setStyle('green')
        .setID('yes')
        .setLabel('Yes');

      let buttonNo = new disbut.MessageButton()
        .setStyle('red')
        .setID('no')
        .setLabel('No');

      let row = new disbut.MessageActionRow()
        .addComponents(buttonYes, buttonNo);

      let ticketEmbed = new Discord.MessageEmbed()
        .setTitle('**Amakano || Ticket**')
        .setColor('ffffff')
        .setDescription("```yaml\nAre you sure want to create a Ticket Channel.```")
        .setFooter(`Requested by ${message.author.tag}`)
        .setThumbnail(message.author.displayAvatarURL())
        .setTimestamp()

      message.channel.send(ticketEmbed, { components: row }).then((msg) => {

        const filter = (button1) => button1.clicker.user.id === message.author.id;
        let collect = msg.createButtonCollector(filter, { time: 30000 });

        collect.on('collect', async(x) => {
          x.reply.defer()
          if(x.id === 'yes') {
            message.guild.channels.create(`Ticket-${message.author.username}`).then((channel) => {
               db.get(`ticketName_${message.author.id}_${message.guild.id}`);
               db.get(`ticketID_${message.author.id}_${message.guild.id}`);
               channel.setParent("865246012082749460");

               channel.updateOverwrite(message.author.id, {
                 SEND_MESSAGE: true,
                 VIEW_CHANNEL: true
                })
              channel.updateOverwrite(message.guild.id, {
                 SEND_MESSAGE: false,
                 VIEW_CHANNEL: false                
              })

              let embedYes = new Discord.MessageEmbed()
                .setTitle('**Amakano || Ticket**')
                .setColor('ffffff')
                .setDescription('```yaml\nTicket has been created, Checkout your ticket channel```')
                .addFields({
                  name: ':',
                  value: `${channel}`,
                  inline: true
                })
                .setFooter(`Requested by ${message.author.tag}`)
                .setThumbnail(message.author.displayAvatarURL())
                .setTimestamp()
              msg.delete().catch(() => { return });
              message.channel.send(embedYes, null).catch(() => { return});                  
            }) 
          } else if(x.id === 'no') {
            let embedNo = new Discord.MessageEmbed()
              .setTitle('**Amakano || Ticket**')
              .setColor('ffffff')
              .setDescription("```yaml\nCancel Create ticket...```")
              .setFooter(`Requested by ${message.author.tag} | This message will disapear in 10 second.`)
              .setThumbnail(message.author.displayAvatarURL())
              .setTimestamp()
            msg.edit(embedNo, null).then(x => x.delete({ timeout: time })).catch(() => { return });  
          }
        })

        setTimeout(() => {
          let timeoutembed = new Discord.MessageEmbed()
            .setTitle('**Amakano || Ticket**')
            .setColor('ffffff')
            .setDescription("```yaml\nThere is no respond from the user, Try Again later!```")
            .setFooter(`Requested by ${message.author.tag} | This message will disapear in 10 second.`)
            .setThumbnail(message.author.displayAvatarURL())
            .setTimestamp()       
          msg.edit(timeoutembed, null).then(x => x.delete({ timeout: time })).catch(() => { return });       
        }, 30000)
      })                         
    } else {
      message.channel.send(
        new Discord.MessageEmbed()
          .setTitle('**Amakano || Ticket**')
          .setColor('ffffff')
          .setDescription("```yaml\nSorry you already create ticket channel.```")
          .setFooter(`Requested by ${message.author.tag}`)
          .setThumbnail(message.author.displayAvatarURL())
          .setTimestamp()         
      )
    }
  }
}

//close ticket

if(ticketClose.some(x => x.includes(args1.toLowerCase()))) {
  if(message.channel.id === ticketID) {
    let buttonClose = new disbut.MessageButton()
      .setStyle('green')
      .setID('close')
      .setLabel('Close')

    let buttonCancel = new disbut.MessageEmbed()
      .setStyle('red')
      .setID('cancel')
      .setLabel('Cancel')

    let row = new disbut.MessageActionRow()
      .addComponents(buttonClose, buttonCancel)

    let embed = new Discord.MessageEmbed()
      .setTitle('**Amakano || Ticket**')
      .setColor('ffffff')
      .setDescription("```yaml\nClick the button to close the ticket.```")
      .setFooter(`Requested by ${message.author.tag}`)
      .setThumbnail(message.author.displayAvatarURL())
      .setTimestamp()  
    message.channel.send(embed, { components: row }).then((msg) => {

        const filter = (button1) => button1.clicker.user.id === message.author.id;
        let collect = msg.createButtonCollector(filter, { time: 30000 });

        collect.on('collect', async(x) => {
          x.reply.defer();

          if(x.id === 'close') {
            x.message.edit('Deleting channel in **3 Second**.').then(() => {
              setTimeout(() => {
                db.delete(`ticketName_${message.author.id}_${message.guild.id}`);
                db.delete(`ticketID_${message.author.id}_${message.guild.id}`);
                x.message.channel.delete().catch(() => { return });                
              }, 3000)
            })
          } else if (x.id === 'cancel') {
            let cancelembed = new Discord.MessageEmbed()
              .setTitle('**Amakano || Ticket**')
              .setColor('ffffff')
              .setDescription("```yaml\nCanceled cclose ticket channel.```")
              .setFooter(`Requested by ${message.author.tag} | This message will disapear in 10 second.`)
              .setThumbnail(message.author.displayAvatarURL())
              .setTimestamp()   
            msg.edit(cancelembed, null).then(x => x.deletee({ timeout: time })).catch(() => { return });              
          }

        setTimeout(() => {
          let timeoutembed = new Discord.MessageEmbed()
            .setTitle('**Amakano || Ticket**')
            .setColor('ffffff')
            .setDescription("```yaml\nThere is no respond from the user, Try Again later!```")
            .setFooter(`Requested by ${message.author.tag} | This message will disapear in 10 second.`)
            .setThumbnail(message.author.displayAvatarURL())
            .setTimestamp()       
          msg.edit(timeoutembed, null).then(x => x.delete({ timeout: time })).catch(() => { return });       
        }, 30000)          
        }) 
      }) 
    } else {
      message.delete().catch(() => { return });
      return message.channel.send(
          new Discord.MessageEmbed()
            .setTitle('**Amakano || Ticket**')
            .setColor('ffffff')
            .setDescription("```yaml\nYou can use this command only in ticket channel.```")
            .setFooter(`Requested by ${message.author.tag} | This message will disapear in 10 second.`)
            .setThumbnail(message.author.displayAvatarURL())
            .setTimestamp()         
      ).then(x => x.delete({ timeout: time })).catch(() => { return });
    }       
  }
}

	}


