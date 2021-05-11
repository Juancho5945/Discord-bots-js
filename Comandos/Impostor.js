///Este es un comando donde te diviertes con tus amigos jugando "Among Us"///
if (message.content.startsWith(prefix +"impostor" )){ //El comando

    const mencionado = message.mentions.members.first() //Definimos mencionado
    
    let random = [
    "No era el impostor",
    "Era el impostor"
    ] //Hacemos frases para ver si es o no
    
    
    if(!mencionado)//Si el autor no menciono a nadie
    
     return message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.
    
    　　　.　　　 　　.　　　　　。　　 。　. 　
    
    .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
    
    　　ﾟ　　 ${message.author.username} ${random[Math.floor(Math.random() * random.length)]} 　 。　.
    
    　　'　　　 ${Math.floor(Math.random() * 3) + 1} Impostores restantes 　 　　。
    
    　　ﾟ　　　.　　　. ,　　　　.　 .`) //Enviamos el mensaje
    
    //Pero si menciona
    
    message.channel.send(`. 　　　。　　　　•　 　ﾟ　　。 　　.
    
    　　　.　　　 　　.　　　　　。　　 。　. 　
    
    .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
    
    　　ﾟ　　 ${mencionado.user.username} ${random[Math.floor(Math.random() * random.length)]} 　 。　.
    
    　　'　　　 ${Math.floor(Math.random() * 3) + 1} Impostores restantes 　 　　。
    
    　　ﾟ　　　.　　　. ,　　　　.　 .`)
    }

    ///El comando debe ir al directorio Index.js///