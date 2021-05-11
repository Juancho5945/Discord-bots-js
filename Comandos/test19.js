///Este es un comando de simulacion del covid-19 es un juego no es real///

if (message.content.startsWith(prefix +"test19" )){ //definimos el nombre del comando

    let rpts = [":warning: **A dado positivo al test de coronavirus!** :warning: ", ":partying_face: **A dado negativo al test de coronavirus!** :partying_face: "] //aqui ponemos las opciones que pueden salir en este caso negativo o positivo
  
    let mencionado = message.mentions.users.first(); //esto es para que el comando funcione con las menciones
  
    if (!mencionado) return message.reply(`Tienes que mencionar a la persona que quieres que se le realize el test de Covid-19`) //la respuesta que dira el bot si no hemos cumplido con el requisito de mencionar a algÃºn usuario
  
    const embedDatos = new Discord.MessageEmbed() //creamos el embed
      .setTitle(`Resultado del test de coronavirus del usuario **${mencionado.username}**`)
      .setDescription(rpts[Math.floor(Math.random() * rpts.length)]); //aqui ponemos en uso los resultados que pusimos anteriormente que son el positivo y el negativo
  
      message.channel.send({ embed: embedDatos }); //lo definimos
    }

///Advertencia///
('despues de agregar el comando no agregar ningun tipo de const config de nada por que el comando fallara')