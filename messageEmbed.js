///Este es un paquete de comandos "Embed" que puedes usar///

///Embed con Una Imagen "URL"///

if (message.content.startsWith(prefix +"xd" )){
    const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription('**XD**')
  .setImage('Imagen URL')
  .setFooter(client.user.username, client.user.avatarURL())
  .setTimestamp()
  message.channel.send(embed)
  }

///Embed escrito y con una imagen "URL"///

  if (message.content.startsWith(prefix +"comando" )){
    const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription('Descripcion')
  .setImage('Imagen URL')
  .setFooter(client.user.username, client.user.avatarURL())
  .setTimestamp()
  message.channel.send(embed)
  }

///Embed Escrito///

if (message.content.startsWith(prefix +"comando" )){
    const embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setDescription('Descripcion')
  .setFooter(client.user.username, client.user.avatarURL())
  .setTimestamp()
  message.channel.send(embed)
  }

///Estos comandos son utiles y muy faciles de usar no eliminar cada uno de ellos por que no serviran///