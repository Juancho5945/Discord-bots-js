///Este es un comando de reporte de "Bugs" Muy util para tu bot///

if (message.content.startsWith(prefix +"bugreport" )){
    
    let error = args.slice(0).join(" ")
    if(!error) return message.channel.send("<:noo:822962195494731796> |Debes poner el bug que debes reportar")

    message.channel.send("<:warning:822962189191086140> |Seguro que quieres enviar el reporte? si elijes que si, el bug se le enviara al servidor de mi creador, no se aceptara mal uso de este").then(m =>{

      m.react("✅")
      m.react("❎")

      const filtro = (reaction, user) => {
      return ["✅", "❎"].includes(reaction.emoji.name) && user.id == message.author.id;
      }

      m.awaitReactions(filtro, {max: 1, time: 20000, errors: ["time"]}).catch(() => {

      m.edit("<:noo:822962195494731796> |No elejiste una opcion")

      }).then(coleccionado =>{

        const reaccion = coleccionado.first();

        if(reaccion.emoji.name === "✅") {
          message.channel.createInvite({unique:true}).then(Invite =>{
          client.channels.cache.get('channel Id').send(`ID del Owner`).then(de =>{de.delete({ timeout:200 })})
    client.channels.cache.get('Channel ID').send(new Discord.MessageEmbed()
                                                        .setTitle("Nuevo Reporte:")
                                                        .setDescription("Alguien ha reportado un error")
                                                        .addField("Usuario:", message.author.tag)
                                                        .addField("Tag del usuario:", message.author)
                                                        .addField("Server:", message.guild.name)
                                                        .addField("Invite:", `https://discord.gg/${Invite.code}`)
                                                        .addField("Error:", error)
                                                        .setColor("DARK_RED")
                                                        .setTimestamp())
          })
    m.edit(`Bug enviado correctamente`)}
        else if(reaccion.emoji.name === "❎") {

m.edit("<:noo:822962195494731796> |Reporte cancelado.")

}

      })

    })


  }

///Solo modificar donde esta escrito "channel-id" y "user-id" Id Del Owner del bot