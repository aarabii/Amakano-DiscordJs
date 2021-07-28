let Discord = require('discord.js');
const https = require('https');
const url = 'https://www.reddit.com/r/memes/hot/.json?limit=100';

module.exports = {
  name: "meme",
  aliases: [],
  usage: "meme",
  description: "send meme",
  run: (client, message, args) => {

 https.get(url, result => {
 var body = '';
 result.on('data', chunk => {
 body += chunk;
 });

 result
 .on('end', () => {
 var response = JSON.parse(body);
 var index =
 response.data.children[Math.floor(Math.random() * 99) + 1].data;

 var link = 'https://reddit.com' + index.permalink;

 if (index.post_hint !== 'image') {
 var text = index.selftext;
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('RANDOM')
 .setURL(link);

 message.channel.send(textembed);
 }

 var imaget = index.preview.images[0].source.url.replace('&amp;', '&');
 var title = index.title;
 var subRedditName = index.subreddit_name_prefixed;

 if (index.post_hint !== 'image') {
 const textembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setColor('RANDOM')
 .setURL(link);

 message.channel.send(textembed);
 }
 const imageembed = new Discord.MessageEmbed()
 .setTitle(`${title}`)
 .setImage(imaget)
 .setColor('RANDOM')
 .setURL(link);
 message.channel.send(imageembed);
 })
 .on('error', function(e) {
 console.log('Got an error: ', e);
 });
 });
 }
}