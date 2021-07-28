const { MessageEmbed } = require("discord.js")
const { MessageButton, MessageActionRow } = require("discord-buttons")

module.exports = {
 name: "embedmaker",
 aliases: ['embed','em'],
 usage: "makes embed for u cuz u r too lazy",
 description: "button embed maker",
 run: async(client, message, args) => {


const embedToBuild = new MessageEmbed()
    .setAuthor(message.member.user.tag, message.member.user.avatarURL({dynamic:true}))

let title = new MessageButton()
    .setLabel("Title")
    .setStyle("blurple")
    .setID(`buildEmbed_builder_title`)

let description = new MessageButton()
    .setLabel("Description")
    .setStyle("blurple")
    .setID(`buildEmbed_builder_desc`)

let footer = new MessageButton()
    .setLabel("Footer")
    .setStyle("blurple")
    .setID(`buildEmbed_builder_footer`)

let footerImage = new MessageButton()
    .setLabel("Footer Image")
    .setStyle("blurple")
    .setID(`buildEmbed_builder_footerimg`)

let image = new MessageButton()
    .setLabel("Image")
    .setStyle("blurple")
    .setID(`buildEmbed_builder_img`)

let thumbnail = new MessageButton()
    .setLabel("Thumbnail")
    .setStyle("blurple")
    .setID(`buildEmbed_builder_thumb`)

let timestamp = new MessageButton()
    .setLabel("Timestamp")
    .setStyle("blurple")
    .setID(`buildEmbed_builder_timestamp`)

let color = new MessageButton()
    .setLabel("Color")
    .setStyle("blurple")
    .setID(`buildEmbed_builder_color`)

let save = new MessageButton()
    .setLabel("Save")
    .setStyle("green")
    .setID(`buildEmbed_save`)

let cancel = new MessageButton()
    .setLabel("Cancel")
    .setStyle("red")
    .setID(`buildEmbed_cancel`)

let buttonRow = new MessageActionRow()
    .addComponent(title).addComponent(description).addComponent(footer).addComponent(color).addComponent(timestamp)

let buttonRow2 = new MessageActionRow()
    .addComponent(footerImage).addComponent(image).addComponent(thumbnail)

let buttonRow3 = new MessageActionRow().addComponent(save).addComponent(cancel)

let buttonEvent = async (button) => {
    if (button.message.id === msg.id) {
      if (button.clicker.user.id === message.member.id) {
        embedEditing(button);
      } else {
        button.defer();
      }
    };
}

let msg = await message.channel.send({
    embed: embedToBuild,
    components: [buttonRow, buttonRow2, buttonRow3]
})

client.on("clickButton", buttonEvent)

let embedEditing = async(button) => {
    if(!button.id.startsWith(`buildEmbed`) && button.message.id == msg.id) return;
    await button.defer();

    let id = button.id.split(`buildEmbed_`)[1]
    if(id.startsWith(`builder`)) {
        let builderId = id.split(`builder_`)[1]
        let noInput = ["timestamp"]
        let noInputFinal = !noInput.some(a => a == builderId);
        let ifUrl = new RegExp('^(https?:\\/\\/)?'+
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|'+
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ 
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' +
        '(\\?[;&a-z\\d%_.~+=-]*)?'+
        '(\\#[-a-z\\d_]*)?$','i');

        button.message.edit(`Waiting for input...`, {
            components: new MessageActionRow().addComponent(new MessageButton().setLabel("Cancel").setStyle("red").setID(`buildEmbed_cancel`))
        })

        let input;
        if(noInputFinal) {
            let filter = async(message) => button.clicker.user.id == message.author.id
            input = await button.channel.awaitMessages(filter, { max: 1, time: 30000, errors: ['time'] }).catch(e => {
                return client.emit(`clickButton`, {
                    id: `buildEmbed_cancel`,
                    message: button.message,
                    channel: button.channel
                })
            })
        }

        let finalInput = input ? input.first() : "";
        if(builderId == "title") embedToBuild.setTitle(finalInput.content)
        if(builderId == "desc") embedToBuild.setDescription(finalInput.content)
        if(builderId == "footer") embedToBuild.setFooter(finalInput.content)
        if(builderId == "color") {
            if(!/^#[0-9A-F]{6}$/i.test(finalInput.content)) embedToBuild.setColor("RANDOM")
            else embedToBuild.setColor(finalInput.content)
        }
        if(builderId == "footerimg") {
            if(ifUrl.test(finalInput)) {
                embedToBuild.setFooter(`${embedToBuild.footer ? embedToBuild.footer.text : "\u200B"}`, finalInput.content)
            }
        }
        if(builderId == "img") {
            if(ifUrl.test(finalInput)) {
                embedToBuild.setImage(finalInput.content)
            }
        }
        if(builderId == "thumb") {
            if(ifUrl.test(finalInput)) {
                embedToBuild.setThumbnail(finalInput.content)
            }
        }

        if(builderId == "timestamp") embedToBuild.setTimestamp()

        button.message.edit({
            embed: embedToBuild,
            components: [buttonRow, buttonRow2, buttonRow3]
        })
        finalInput.delete();
    }

    if(id == `cancel`) {
        button.message.edit(`Canceling...`, {component:null}) 

        setTimeout(async() => {
            let message = await button.channel.messages.fetch(button.message.id)
            message.delete();
        }, 3000)

        await client.removeListener("clickButton", buttonEvent);
    }

    if(id == `save`) {
        let messageToDelete = await button.channel.messages.fetch(button.message.id);
        messageToDelete.delete();
        
        button.channel.send({embed:embedToBuild,component:null}) 
        await client.removeListener("clickButton", buttonEvent);
    }

    setTimeout(() => {
        button.message.edit({embed:embedToBuild,components:null})
        client.removeListener("clickButton", buttonEvent);
    }, 300000)
}
}
}