///Este es un comando "Say"///

if (message.content.startsWith(prefix +"say" )){

    let texto = args.join(" ")
    if (!texto) return message.channel.send("<:error:817941361486594078>|Ingresa un texto no? :v").then(msg => msg.delete({ timeout: 5000 }))
       if(texto.includes("@everyone")) return message.channel.send("<:error:817941361486594078>|No voy a retornar un mensaje con un everyone")
    message.channel.send(texto)
      message.delete({ timeout: 5 }).catch()
       console.log(`${message.author.username} dice: ${texto}`)
     }

///Al enviar un mensaje no retornar un @everyone por que el bot te dira 'No puedes enviar un mensaje con @everyone'///