///Este es un comando de Ping & Pong///

if (message.content.startsWith(prefix +"ping" )){

    let ping = Math.floor(message.client.ws.ping);
    
    message.channel.send(":ping_pong: Pong!")
      .then(m => {

          m.edit(`:incoming_envelope: Ping Mensajes: \`${Math.floor(Date.now() - m.createdTimestamp)} ms\`\n:satellite_orbital: Ping DiscordAPI: \`${ping} ms\``);
      
      });
    
  }

///Demuestra la latencia del bot si esta bugeado o no///