///Este es un comando "help"///

if (message.content.startsWith(prefix +"help" )){
    const embed = new Discord.MessageEmbed()
  .setAuthor('Nombre del bot')
  .setDescription('Primera descripcion.\nSegunda descripcion \nTercera Descripcion \n Cuarta descripcion')
  .setFooter(client.user.username, client.user.avatarURL())
  .setTimestamp()
  .setImage('Imagen URL')
    .addField('Nombre de la seccion', '`Nombre de comando`') //Cada "Field" es un subtítulo y dependiendo de cuantos tipos de comandos puede hacer tu bot, añade mas .addField o elimina los que no necesite.//
    .addField('Nombre de la seccion', '`Nombre de Comando`' )
    .addField('Nombre de la seccion', '`Nombre de comando`' )
    .addField('Nombre de la seccion', '`Nombre de Comando`' )
    .addField('Nombre de la seccion', '`Nombre de comando`' )
    .setColor("RANDOM");
    message.author.send(embed);
    return message.channel.send(` ${message.author},**revisa tus mensajes privados.**`)
  }

  ///Recomendaciones al  ingresar el comando///
  ('1) El "Nombre de comando" se puede clonar cuantas pueda tambien tiene sus secciones para cada comando')
  ('2) la .setDescription tiene una llave \n que no puede ser eliminado por que el comando puede fallar')
  ('3) El comando help llevara todos los comandos actuales a mensaje privado o como dice todos "MD" no quitar este tipo de comando por que esto es para evitar el spam del comando')