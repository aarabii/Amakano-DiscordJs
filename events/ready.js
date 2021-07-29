const express = require("express")
const app = express()

module.exports = async(client) => {


  
  const arrayOfStatus = [
   `${client.users.cache.size} USERS IN ${client.guilds.cache.size} SERVERS`,
   'Support Server: https://discord.gg/jhfMMSUTa4',
   'Hentai',
  ];

  let index = 0;
  setInterval(() => {
    if (index === arrayOfStatus.length) index = 0;
    const status = arrayOfStatus[index];
    client.user.setActivity(status, { type: "WATCHING" });
    index++;
  }, 5000);
  


 app.get("/", (req, res) => {
   res.send("Lets's Fucking Go xD!")
 })

 app.listen(3000, () => {
   console.log(`Hi, ${client.user.username} is now online!`);
 })
  
}