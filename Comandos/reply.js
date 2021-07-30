Howdy 👋 Este no es un comando ni nada solo es una pocion para que el bot te responda a medios de reply!
  

╭━━━━━━━━━━━━━━━━━━━━━━━━━━━━• INSTALACION NPM  •━━━━━━━━━━━━━━━━━━━━━━━━━━━━╮  
lo primero que debes hacer es instalar estas dependencias
En la consola escribes: npm i discord-reply
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━• INSTALACION NPM  •━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯


╭━━━━━━━━━━━━━━━━━━━━━━━━━━━━• INSTALL COMMAND  •━━━━━━━━━━━━━━━━━━━━━━━━━━━━╮
Luego de que este instalado copias esto y lo pegas en la 1 casilla asi
1 const inlinereply = require('discord-reply'); (Aqui va el discord-reply)
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━• INSTALL COMMAND  •━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯


╭━━━━━━━━━━━━━━━━━━━━━━━━━━━━• INSTALL COMMAND  •━━━━━━━━━━━━━━━━━━━━━━━━━━━━╮
Despues haz este cambio
Reemplazas message channel.send(embed) a return message.lineReply(embed)
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━• INSTALL COMMAND  •━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯


╭━━━━━━━━━━━━━━━━━━━━━━━━━━━━• SIN MENCION USER •━━━━━━━━━━━━━━━━━━━━━━━━━━━━╮
Para que el bot no te mencione por ejemplo @! Sunky ❤ usa esto
message.lineReplyNoMention(embed);
╰━━━━━━━━━━━━━━━━━━━━━━━━━━━━• SIN MENCION USER •━━━━━━━━━━━━━━━━━━━━━━━━━━━━╯

Gracias por seguir esta guia

Mas informacion en https://www.npmjs.com/package/discord-reply
