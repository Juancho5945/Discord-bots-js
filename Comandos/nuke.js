///Este es un comando de Nuke descripcion: Elimina el canal actual hace un clon del canal con los mismos permisos y el bot enviara un mensaje "Canal nukeado"///

if (message.content.startsWith(prefix +"nuke" )){
  
    if(!message.member.hasPermission("MANAGE_CHANNELS")) return message.channel.send(":error:|You can't use this")
    if(!message.guild.me.hasPermission("MANAGE_CHANNELS")) return message.channel.send(":error:|I don't have permissions")
    let link = "https://cdn.discordapp.com/attachments/786627691267751976/787745289523691541/6c485efad8b910e5289fc7968ea1d22f.gif"
const nuke = new Discord.MessageAttachment(link, "nuke.gif")
var posicion = message.channel.position

message.channel.clone().then((canal) => {

        message.channel.delete()

        canal.setPosition(posicion)


        canal.send(`Canal Limpio`, nuke)

    });
}

///Permisos///
('El permiso que necesita el "BOT" es Gestionar canales o "ADMINISTRADOR" para hacer esa accion')