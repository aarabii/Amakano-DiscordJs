let Discord = require('discord.js');
const button = require('discord-buttons')

module.exports = {
  name: "help",
  aliases: [],
  usage: "help",
  description: "help desk",
  run: async (client, message, clickButton, args) => {

const filter = (button) => button.clicker.user === message.author;    

//gimmics button //will contain image manuplition folder
let gimmicsbutton = new button.MessageButton()
.setLabel('Gimmicks')
.setStyle('blurple')
.setID('gimmicsbutton')

//utility button //will contain utility folde
let utilitybutton = new button.MessageButton()
.setLabel('Utility')
.setStyle('blurple')
.setID('utilitybutton')

//economy button //will contain economy folder
let economybutton = new button.MessageButton()
.setLabel('Economy')
.setStyle('blurple')
.setID('economybutton')

//moderation button //will contain mode folder
let modbutton = new button.MessageButton()
.setLabel('Moderation')
.setStyle('blurple')
.setID('modbutton')

//information button //will contain info folder
let infobutton = new button.MessageButton()
.setLabel('Information')
.setStyle('blurple')
.setID('infobutton')

//fun utility button //will contain fun folder
let funbutton = new button.MessageButton()
.setLabel('Fun Utility')
.setStyle('blurple')
.setID('funbutton')

//games button //will contain game folder
let gamebutton = new button.MessageButton()
.setLabel('Game')
.setStyle('blurple')
.setID('gamebutton')

//rp button //will contain emotes n nsfw button
let rpbutton = new button.MessageButton()
.setLabel('Role Play')
.setStyle('blurple')
.setID('rpbutton')

//image service button //will conatin image folder
let extbutton = new button.MessageButton()
.setLabel('External Image')
.setStyle('blurple')
.setID('extbutton')

//nsfw boorus button //will contain nsfw folder n nswf emotes
let nsfwbutton = new button.MessageButton()
.setLabel('NSFW')
.setStyle('blurple')
.setID('nsfwbutton')


//reddit button //reddit folder
let redditbutton = new button.MessageButton()
.setLabel('Reddit')
.setStyle('blurple')
.setID('redditbutton')

//text button //text foldere
let imagebutton = new button.MessageButton()
.setLabel('Image')
.setStyle('blurple')
.setID('imagebutton')

//image button
let textbutton = new button.MessageButton()
.setLabel('Text')
.setStyle('blurple')
.setID('textbutton')

//back buttons
let backbutton = new button.MessageButton()
.setLabel('Back')
.setStyle('grey')
.setID('backbutton')

//button row 1
let row1 = new button.MessageActionRow()
.addComponent(gimmicsbutton) //done
.addComponent(utilitybutton) //done
.addComponent(imagebutton)//.addComponent(economybutton) //
.addComponent(modbutton) //done
.addComponent(infobutton) //

//button row 2
let row2 = new button.MessageActionRow()
.addComponent(funbutton) //
.addComponent(gamebutton) //
.addComponent(rpbutton) //
.addComponent(extbutton) //

//button row 3
let row3 = new button.MessageActionRow()
.addComponent(nsfwbutton)
.addComponent(redditbutton)
.addComponent(textbutton)




//help embed
const helpembed = new Discord.MessageEmbed()
 .setColor('#66e89a')
 .setAuthor("AIRI's Support")
 .setURL('https://github.com/losier/Amakano-DiscordJs.git')
 .setTitle("**Amakano || Help**")
 .setDescription('```yaml\nPlease press a button below the message to explore the corresponding category.```\n ```yaml\nNote: The nsfw category is only available in nsfw channels.\nThis Bot/Client is still in its beta phase if you find any Bug please report it to support server by BUG cmd.```')
.setImage('https://cdn.discordapp.com/attachments/854776194561081354/861253841386733628/PicsArt_07-04-08.04.46.jpg')
.addField('Support Server', '[Click Here](https://discord.gg/jhfMMSUTa4)', true)
.addField('Invite Ama', '[Click Here](https://dsc.gg/ama)', true)
.setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL())

//'```Please press a button below the message to explore the corresponding category \n \n Note: The nsfw category is only available in nsfw channels \n To Check Ping Manually: -ping \n \n [Server Subbort](https://discord.gg/EFuh6JcX2V) \n [To Invite Airi](${await client.generateInvite()}) ```'

//moderation embed
const modembed = new Discord.MessageEmbed()
      .setTitle("Categories » Moderation")
      .setColor("#66e89a")
      .setDescription("```yaml\nThese Command Require Certain Permission To Run, Every Member Can't Use These Command```")
      .addFields(
        { name: 'Ban'  , value: 'Ban a member and give a reason.', inline: true },
        { name: 'Kick' , value: 'Kick a member and give a reason.', inline: true },
        { name: 'Mute' , value: 'Mute a member and give a reason.', inline: true },
        { name: 'Unmute' , value: 'Unmute a member and give a reason.', inline: true },
        { name: 'Warn' , value: 'Warn a member and give a reason.', inline: true },
        { name: 'Warncheck' , value: 'Shows previous warnings of an user.', inline: true },
        { name: 'Removewarn' , value: 'Removes a specific amount of warnings for specific users.', inline: true },
        { name: 'Slowmode' , value: 'Enable Slowmode.', inline: true },
        { name: 'Clear' , value: 'Deletes a specific amount of messages.', inline: true }
      )
      .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL() | "Use the reactions below for navigation ")

//gimmics embed
const gimmicsembed = new Discord.MessageEmbed()
      .setTitle("Categories » Gimmicks")
      .setColor("#66e89a")
      .setDescription("```yaml\nThese Are Some Image manuplition Commands```")
      .addFields(
        { name: 'Affect'  , value: 'Enhances the pfp of a user in affect meme.', inline: true },
        { name: 'Blur' , value: 'Blur the pfp of a user.', inline: true },
        { name: 'Circle' , value: 'Circle the pfp of a user.', inline: true },
        { name: 'Comments' , value: 'Enhances the pfp of a user in Comments meme.', inline: true },
        { name: 'Delete' , value: 'Enhances the pfp of a user in delete meme.', inline: true },
        { name: 'Faceplam' , value: 'Put a Plam on the pfp of a user.', inline: true },
        { name: 'Hitler' , value: 'Makes the pfp of a user greater than hitler.', inline: true },
        { name: 'Invert' , value: 'Inver a users pfp.', inline: true },
        { name: 'Jail' , value: 'Enhances the pfp of a user with bars.', inline: true },
        { name: 'Jokeoverhead' , value: 'Enhances the pfp of a user with a jhd.', inline: true },
        { name: 'Pixelrate' , value: 'Pixel rate the pfp of a user.', inline: true },
        { name: 'Rainbow' , value: 'Enhances the pfp of a user with a rainbow.', inline: true },
        { name: 'Rip' , value: 'Enhances the pfp of a user in grave.', inline: true },
        { name: 'Ship' , value: 'Ship two users together.', inline: true },
        { name: 'Shit' , value: 'Enhances the pfp of a user with a shit.', inline: true },
        { name: 'Trash' , value: 'Enhances the pfp of a user with a trash.', inline: true },
        { name: 'Trigger' , value: 'Enhances the pfp of a user with a trigger gif.', inline: true },
        { name: 'Wanted' , value: 'Enhances the pfp of a userin wanted poster.', inline: true },
        { name: 'Wasted' , value: 'Enhances the pfp of a user with wasted.', inline: true }

      )
      .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL() | "Use the reactions below for navigation ")

//utility embed      
const utilityembed = new Discord.MessageEmbed()
      .setTitle("Categories » Utility")
      .setColor("#66e89a")
      .setDescription("```yaml\nList of some basic Utility Commands```")
      .addFields(
        { name: 'AFK' , value: 'Mark yourself afk when you go afk.', inline: true },
        { name: 'Calculator' , value: 'To help you in Maths.', inline: true },
        { name: 'CoinFlip' , value: 'This command helps you to flip a coin.', inline: true },
        { name: 'Embedmaker' , value: 'send text in embed.', inline: true },
        { name: 'IMDB' , value: 'Get review from imdb for any show/movie.', inline: true },
        { name: 'Run the command to check NSFW action' , value: 'makes a channel nsfw n sfw.', inline: true },
        { name: 'Playstore' , value: 'Get information about any app in playstore.', inline: true },
        { name: 'Poll' , value: 'Creates a poll.', inline: true },
        { name: 'Prefix' , value: 'Change prefix for your Server.', inline: true },
        { name: 'Screenshot' , value: 'Take some screenshot for you from any link.', inline: true },
        { name: 'Ticket' , value: '-UNDER CONSTRACTION-', inline: true },
        { name: 'Timer' , value: 'Set a timer.', inline: true },
        { name: 'Fact' , value: 'Get a fact.', inline: true }

      )
      .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL() | "Use the reactions below for navigation ")

//economy embed
const economyembed = new Discord.MessageEmbed()
      .setTitle("Categories » Economy")
      .setColor("#66e89a")
      .setDescription("```yaml\nList of some basic Economy Commands.```")
      .addFields(
       { name: 'Sorry' , value: 'Economy system is under constraction cuz we are trying to make one of the best Economy/Currency System.'}
      )
      .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL() | "Use the reactions below for navigation ")      

//info embed
const infoembed = new Discord.MessageEmbed()
      .setTitle("Categories » Information")
      .setColor("#66e89a")
      .setDescription("```yaml\nList of some basic Information Commands```")
      .addFields(
       { name: 'FirstMessage' , value: 'To Check 1st message by a user in that server.', inline: true },
       { name: 'Invites' , value: 'To check no on invites by a user.', inline: true },
       { name: 'Ping' , value: 'To check bot latency.', inline: true },
       { name: 'Prefix' , value: 'To check bot Prefix.', inline: true },
       { name: 'ServerInfo' , value: 'Display server information.', inline: true },
       { name: 'UserInfo' , value: 'Display user information.', inline: true },
       { name: 'weather' , value: 'To check weather.', inline: true },
       { name: 'BotInfo' , value: 'Display bot information.', inline: true },
       { name: 'New' , value: 'Check whats new.', inline: true },
      )
      .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL() | "Use the reactions below for navigation ")      

//fun embed
const funembed = new Discord.MessageEmbed()
      .setTitle("Categories » Fun")
      .setColor("#66e89a")
      .setDescription("```yaml\nList of some basic Fun Commands```")
      .addFields(
       { name: 'Fortune' , value: 'Challange your destiny to give you answer.', inline: true },
       { name: 'Drake' , value: 'Put any text in famous drake meme.', inline: true },
       { name: 'Fakereply' , value: 'Prank your friends by making a fake reply.', inline: true },
       { name: 'Gayrate' , value: 'Check your and as well as your friends gay rate.', inline: true },
       { name: 'illegal' , value: 'Make anything illegal with Donald Trump.', inline: true },
       //{ name: 'nickname' , value: 'Change your friends nickname.', inline: true },
       { name: 'nuke' , value: 'NUKE HEHE', inline: true },
       { name: 'PP' , value: 'Check your friends and yours PP.', inline: true },
       { name: 'Trivia' , value: 'Check your knowledge.', inline: true },
       { name: 'Why' , value: 'Find some intresting question.', inline: true },
       { name: 'Wyr/Would You Rather' , value: 'Choose between two', inline: true },
      )
      .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL() | "Use the reactions below for navigation ")      

//game embed
const gameembed = new Discord.MessageEmbed()
      .setTitle("Categories » Game")
      .setColor("#66e89a")
      .setDescription("```yaml\nList of some basic Game Commands```")
      .addFields(
       { name: 'Akinator' , value: 'Try to guess some one with akinator.', inline: true },
       { name: 'Connect4' , value: 'Connect Four block to win against with your friend.', inline: true },
       { name: 'FastType' , value: 'Check your typing speed.', inline: true },
       { name: 'GuessTheNumber' , value: 'Try to find missing number.', inline: true },
       { name: 'GuessThePokimon' , value: 'Every time its not pikachu.', inline: true },
       { name: 'LieSwatter' , value: 'Be a detecative.', inline: true },
       { name: 'NeverEverI' , value: 'Simple NeverEverI game.', inline: true },
       { name: 'QuickClick' , value: 'Check your clicking reflex.', inline: true },
       { name: 'RPS' , value: 'ROCK PAPER SESIOR', inline: true },
       { name: 'Snake' , value: 'Play the classic snake game', inline: true },
       { name: 'Suffel' , value: 'suffeling game ooi.', inline: true },
       { name: 'TTT' , value: 'TIC TAC TOE', inline: true },
       { name: 'WordFind' , value: 'Hunt some words.', inline: true },
      )
      .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL() | "Use the reactions below for navigation ")      

//rp embded
const rpembed = new Discord.MessageEmbed()
      .setTitle("Categories » RolePlay")
      .setColor("#66e89a")
      .setDescription("```yaml\nList of some basic Role Play Commands```")
      .addFields(
       { name: 'Blush' , value: 'Blushing emote.', inline: true },
       { name: 'Cry' , value: 'Crying emote.', inline: true },
       { name: 'Cuddle' , value: 'Cuddling emote.', inline: true },
       { name: 'Feed' , value: 'Feeding emote.', inline: true },
       { name: 'Hug' , value: 'Huging emote.', inline: true },
       { name: 'Kill' , value: 'Killing emote.', inline: true },
       { name: 'Lick' , value: 'Licking emote.', inline: true },
       { name: 'Nom' , value: 'NOM NOM', inline: true },
       { name: 'Pat' , value: 'Pat pat', inline: true },
       { name: 'Poke' , value: 'Emote to irritate someone.', inline: true },
       { name: 'Pout' , value: 'Pout emote', inline: true },
       { name: 'Punch' , value: 'Punching emote', inline: true },
       { name: 'Nitro' , value: 'Get DISCORD NITRO', inline: true },
       { name: 'Slap' , value: 'Slaping emote', inline: true },
       { name: 'Sleep' , value: 'Sleeping Emote', inline: true },
       { name: 'Smug' , value: 'Smug', inline: true },
       { name: 'Thank' , value: 'Thanks someone', inline: true },
       { name: 'Tickle' , value: 'Tickling tickling', inline: true }
      )
      .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL() | "Use the reactions below for navigation ")      

//Externalembed
const extembed = new Discord.MessageEmbed()
      .setTitle("Categories » External")
      .setColor("#66e89a")
      .setDescription("```yaml\nList of some basic External Commands```")
      .addFields(
       { name: 'Radio' , value: 'Listen to radio.', inline: true },
       { name: 'TTS' , value: 'Listen to a number.', inline: true },
       { name: 'GitHub' , value: 'Get imfo of a github user.', inline: true },
       { name: 'Avatar' , value: 'Get a enlarge view of Avatar.', inline: true },
      )
      .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL() | "Use the reactions below for navigation ")     

//nsfw embed
const nsfwembed = new Discord.MessageEmbed()
      .setTitle("Categories » Run the command to check NSFW action")
      .setColor("#66e89a")
      .setDescription("```yaml\nList of some basic Run the command to check NSFW action Commands```")
      .addFields(
       { name: '4K' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'Anal' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'Ass' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'BlowJob' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'Bondage' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'Boobs' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'CumArt' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'CumSlut' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'Feet' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'Fendom' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'Futanari' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'GASM' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'Gif' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'GoneWild' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'HAnal' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'HBoobs' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'Hentai' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'Himdriff' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'HKitsune' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'Holo' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'Keta' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'Kitsune' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'Kuni' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'Lesbian' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'LEWD' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'Run the command to check NSFW actionNeko' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'Paizuri' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'Pussy' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'SoloGirl' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'Spank' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'Tentacle' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'Thigh' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'Tits' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'Trap' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'Yaoi' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'Yuri' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'FeetGif' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'GirlsSoloGif' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'HentaiGif' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'Run the command to check NSFW actionNekoGif' , value: 'Run the command to check NSFW action', inline: true },
       { name: 'PussyWank' , value: 'Run the command to check NSFW action', inline: true }
      )
      .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL() | "Use the reactions below for navigation ")  

//image embed
const imageembed = new Discord.MessageEmbed()
      .setTitle("Categories » Image")
      .setColor("#66e89a")
      .setDescription("```yaml\nList of some basic Image Commands```")
      .addFields(
       { name: 'Cat' , value: 'Get random cat image.', inline: true },
       { name: 'Cofee' , value: 'Get random cofee image.', inline: true },
       { name: 'Dog' , value: 'Get random Dog image.', inline: true },
       { name: 'Food' , value: 'Get random food image', inline: true },
       { name: 'FoxGirl' , value: 'Get random image of a fox girl.', inline: true },
       { name: 'GECG' , value: 'Random genetically engineered catgirl image', inline: true },
       { name: 'Goose' , value: 'Get random goose image.', inline: true },
       { name: 'Kemonomini' , value: 'Random pic of kiminomini', inline: true },
       { name: 'Neko' , value: 'Get random pics Of NEKO', inline: true },
       { name: 'NekoGif' , value: 'Get Random gif of neko', inline: true },
       { name: 'NekoPFP' , value: 'Get neko pfp', inline: true },
       { name: 'Run the command to check NSFW actionpfp' , value: 'Get a random Run the command to check NSFW action pfp', inline: true },
       { name: 'pfp' , value: 'Get random pfp', inline: true },
       { name: 'Waifu' , value: 'Get random image of waifu', inline: true },
       { name: 'Walpaper' , value: 'Get random anime walpaper', inline: true },
      )
      .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL() | "Use the reactions below for navigation ")             

//reddit embed
const redditembed = new Discord.MessageEmbed()
      .setTitle("Categories » Reddit")
      .setColor("#66e89a")
      .setDescription("```yaml\nList of some basic Reddit Commands```")
      .addFields(
       { name: 'Meme' , value: 'Get Random meme from reddit.', inline: true },
       { name: 'NOTE:' , value: '```For more reddit you can request to our support server```' }
      )
      .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL() | "Use the reactions below for navigation ")      

//text embed
const textembed = new Discord.MessageEmbed()
      .setTitle("Categories » Text")
      .setColor("#66e89a")
      .setDescription("```yaml\nList of some basic Text Commands```")
      .addFields(
       { name: 'Ascii' , value: 'convert a text into ascii.', inline: true },
       { name: 'Blue' , value: 'Get a blue text.', inline: true },
       { name: 'Bold' , value: 'Convert any text in bold font.', inline: true },
       { name: 'CatText' , value: 'OwO', inline: true },
       { name: 'Green' , value: 'Get a green text.', inline: true },
       { name: 'Italic' , value: 'convert any text into Italic font.', inline: true },
       { name: 'Red' , value: 'Convert a text into red colour.', inline: true },
       { name: 'Reverse' , value: 'Get a reverse text.', inline: true },
       { name: 'Spoiler' , value: 'Get a Spoiler Text.', inline: true },
       { name: 'Yellow' , value: 'Convert a text into yellow colour.', inline: true },
      )
      .setFooter(`Requested by ${message.author.username}`, message.author.displayAvatarURL() | "Use the reactions below for navigation ")    



//help cmd function
  let v = await  message.channel.send({
        embed: helpembed,
        components: [row1, row2, row3]
    })



//button function

   let collector = v.createButtonCollector(b => b, {time: 300000}) 
      
   collector.on('collect', button =>{
        button.reply.defer()
       if(button.id == 'backbutton'){
           button.message.edit({
             embed: helpembed,
             components: [row1, row2, row3]    
           })
       }      

       if(button.id == 'modbutton'){
           button.message.edit({
             embed: modembed,
             button: backbutton   
           })
       }    

       if(button.id == 'gimmicsbutton'){
           button.message.edit({
             embed: gimmicsembed,
             button: backbutton
           })
       }      

       if(button.id == 'utilitybutton'){
           button.message.edit({
             embed: utilityembed,
             button: backbutton 
           })
       }     

       if(button.id == 'imagebutton'){
           button.message.edit({
             embed: imageembed,
             button: backbutton 
           })
       }          

       if(button.id == 'economybutton'){
           button.message.edit({
             embed: economyembed,
              button: backbutton 
           })
       }      

       if(button.id == 'infobutton'){
           button.message.edit({
             embed: infoembed,
             button: backbutton
           })
       }     

       if(button.id == 'funbutton'){
           button.message.edit({
             embed: funembed,
             button: backbutton
           })
       }      

       if(button.id == 'gamebutton'){
           button.message.edit({
             embed: gameembed,
             button: backbutton
           })
       }      

       if(button.id == 'rpbutton'){
           button.message.edit({
             embed: rpembed,
             button: backbutton
           })
       }      

       if(button.id == 'extbutton'){
           button.message.edit({
             embed: extembed,
            button: backbutton
           })
       }      

       if(button.id == 'nsfwbutton'){
           button.message.edit({
             embed: nsfwembed,
             button: backbutton
           })
       }     

       if(button.id == 'redditbutton'){
           button.message.edit({
             embed: redditembed,
             button: backbutton
           })
       }      

       if(button.id == 'textbutton'){
           button.message.edit({
             embed: textembed,
             button: backbutton 
           })
       }                                                             
     
     })

  }
}