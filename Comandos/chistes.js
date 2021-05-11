///Este es un comando que el bot cuenta chistes retorcidos///

///Necesario un npm///

if (message.content.startsWith(prefix +"chiste" )){
    const random = require('chistes-aleatorios'); //Traemos el modulo/npm
    
    const chiste = await random.chistes(); //Extraemos el chiste aleatorio, y lo dejamos en una constante llamada chiste, para que funcione el await, debe de estar en una funcion asincrona, osea async.
    
    message.channel.send(chiste); //Enviamos el chiste
    }

///En el comando mismo trae el npm para instalarlo a tu bot///