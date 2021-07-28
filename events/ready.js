const express = require("express")
const app = express()

module.exports = async(client) => {


  client.on('ready', () => {

      client.user.setActivity('Server', { type: 'WATCHING' });
    
  })


 app.get("/", (req, res) => {
   res.send("Lets's Fucking Go xD!")
 })

 app.listen(3000, () => {
   console.log(`Hi, ${client.user.username} is now online!`);
 })
  
}