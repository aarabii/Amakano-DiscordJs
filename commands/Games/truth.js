const Discord = require("discord.js");


module.exports = {
 name: ["truth"],
 aliases: ['t'],
 run: async(client, message, args) => {

const user = message.mentions.users.first() || message.author   

const truth = [
  'If you could be invisible, what is the first thing you would do?',
  'What is a secret you kept from your parents?',
  'What is one thing you wish you could change about yourself?',
  'Who is your secret crush in this server?',
  'If a genie granted you three wishes, what would you ask for?',
  'What is your biggest regret?',
  'Reveal all the details of your first kiss.',
  'When was the last time you lied?',
  'What is the weirdest thing you dreamt of doing with a girl/boy?',
  "What's the most romantic thing you've ever done?",
  "Have you ever been in a friends with benefits situation?",
  'How old were you when you found out how babies are made?',
  'Have you ever publicly peed yourself?',
  'If you could rob a bank and get away with it, would you',
  'If you were to become famous, what would it be for?',//
  'What is your most favorite s#x position?',
  'What are your memories of the best s#x ever in your life?',
  'Do you have a crazy one-night stand story? What happened?',
  'What is the strangest thing you have ever done with your special one?',
  'What do you love the most during foreplay?',
  'Have you ever watched someone close to you having s#x? How did it feel like?',
  'Have you ever heard or felt like you have heard your parents doing it?',
  'What is your horror s#x story? ',
  'Have you ever peed in the pool?',
  'Have you ever farted in an elevator?',
  'Who do you think is the worst-dressed person in this server?',
  'What was your most embarrassing moment in public?',
  'What color underwear are you wearing right now?',
  'What was the last thing you texted?',
  'Have you ever tasted nose/ear wax?',
  'Have you ever tasted your sweat?',
  'What is the most illegal thing you have ever done?',
  'Who is your favorite: Mom or Dad and why?',
  'Would you rather lose your sex organs forever or gain 200 pounds?',
  'What’s the most embarrassing thing you’ve said or done in front of someone you like?',
  'Do you ever admire yourself in the mirror?',//
  'Would you date someone shorter than you?',
  'What did you learn in school that you wish you could forget?',
  "If one of your friends were cheating with your other friend's boyfriend, what would you do?",
  'If you had to date someone in this server, who would it be and why?',
  'Have you ever started a rumor about someone else?',
  'What would you do if you found out you were cheated on?',
  'If you could get surgery to look like any celebrity, who would it be?',
  'What’s the dumbest thing you’ve done to impress a crush?',
  'How old were you when you found out how babies are made?',
  'What’s the longest time you’ve stayed in the bathroom, and why did you stay for that long?',
  'What is the song that you get it on to the most?',
  'Who was your best partner and why?',
  'Where is the weirdest place that you’ve ever gone solo?',
  'What is your favorite "special" toy?',
  'When was the first time you came?',
  'When was your first kiss?',
  'Do you have an “I’m getting laid tonight” outfit? What is it?',
  'What’s your favorite body part on yourself? On your partner?',
  'Have you ever cheated?',
  'Have you ever wanted to cheat?',
  'How many people have you slept with?',
  'Who’s the hottest person at work?',
  'What would be more thrilling: angry sex or makeup sex?',
  'Who here are you most jealous of?',
];

const randomtruth = truth[Math.floor(Math.random() * truth.length)]

message.channel.send(
  new Discord.MessageEmbed()
    .setTitle("**Amakano || Truth**")
    .setDescription(`${user} Here is the random question for you:\n\n\n**${randomtruth}**`)
    .setColor('#53fa43')
    .setThumbnail('https://media.tenor.com/images/b2f04c9d19c4378840741fcdcd41fc5f/tenor.gif')
    .setFooter(message.author.username)
)

 }
}