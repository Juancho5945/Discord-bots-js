/// Inicio de un proyecto Index.js///

const express = require('express')
const app = express()
 
app.get('/', function (req, res) {
  res.send(`Listo`)
})
 let port = process.env.PORT || 3000;
app.listen(port)
 
require('dotenv').config()
///////////////////////////////////////////////////////
const config = require('./config.json')
const Discord = require("discord.js");
const client = new Discord.Client({ws: { properties: {$browser: "Discord Android" }, intents: 32767 }})
const prefix = "PREFIX DEL config.json"

client.on('ready', () => {
    console.log(`Estoy Preparado Como!${client.user.tag}`);
    const estados = [
`${client.guilds.cache.size} servidores`,
`${client.users.cache.size} usuarios `,
`Primer status`,
`Segundo Status`,
]
setInterval(() => {
  client.user.setPresence({
    status: "online",
    activity: {
  name: estados[( Math.floor(Math.random() * estados.length))],
    type: "WATCHING",
    }
})
}, 18000)
});
client.on('message', async (message) => { 
   
    if(message.author.bot) return;

   const args = message.content.slice(prefix.length).trim().split(/ +/g);
   const command = args.shift().toLowerCase();

if (message.content.startsWith(prefix +"ping" )){////aqui empieza el comando
message.channel.send('pong')////cuando ponga (prefix)hola enviará ''las tienes owo''
}
});
client.login(config.token);