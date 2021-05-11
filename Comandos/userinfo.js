///Este es un comando de Userinfo///

if (message.content.startsWith(prefix +"userinfo" )){


    //hacemos un let para definir los estados
    
    
        let estados = {
          "online": "<:online:837326922232233984> En Línea",
          "idle": "<:idles:837326921925656647> Ausente",
          "dnd": "<:busy:837326921809133578> No molestar",
          "offline": "<:offline:837326922118856705> Desconectado/invisible"
        };
    
    
    //Definimos usuario, puede ser el autor o el mencionado, ustedes pueden cambiarlo si quieren y poner que se obtenga tambien por id; sería así: message.guild.members.cache.get(args[0])
    
    
        const member = message.mentions.members.first() || message.member
    
    
    //Definimos la fecha en años, meses, días, horas, minutos y segundos
    
    
        function formatDate (template, date) {
          var specs = 'YYYY:MM:DD:HH:mm:ss'.split(':')
          date = new Date(date || Date.now() - new Date().getTimezoneOffset() * 6e4)
          return date.toISOString().split(/[-:.TZ]/).reduce(function (template, item, i) {
            return template.split(specs[i]).join(item)
          }, template)
        }
    
    
    //Ahora viene los importante. Ustedes tienen que poner los emojis de cada badge, no valen los mios porque son de un servidor privado así que descarguenlos de internet y cogan la id del emoji como yo hice y su nombre; para hacer es así \:emoji:
    
    //Aclaro otra duda para los nuevos o los que no lo saben, NITRO no es una badge de discord
    
    //Hacemos un let, si el nombre de la badge es x : "saldrá este"
    
    
        let badges1 = {
            
          'EARLY_SUPPORTER': '<:early_supporter:837326924606734425> ',
          'DISCORD_EMPLOYEE': '<:Discord_staff:837326922152280094>',
          'DISCORD_PARTNER': '<:discord_partner:837326922081501262>',
          'HYPESQUAD_EVENTS': 
          '<:Hypesquad:837326922554802246>',
          'HOUSE_BRAVERY': 
          '<:Bravery:837326922107191297>',
          'HOUSE_BRILLIANCE': '<:Brilliance:837326922211262524>',
          'BUGHUNTER_LEVEL_1': '<:BugHunter:837326922119118849>',
          'BUGHUNTER_LEVEL_2': '<:9552_BugHunterLvl2:837326921241985075>',
          'VERIFIED_DEVELOPER': '<:bot_developer:837326921556819978>',
          'HOUSE_BALANCE':
          '<:Balance:837326921859203092>',
          'VERIFIED_BOT': 
          '<:verified_bots:837329592922406964>',
        }
        
    
    //Creamos un object, es decir, leerá la badge del usuario y si tiene ese nombre, se ejecutara el let anterior
        
    
        let obj = {
        "HOUSE_BRAVERY" : "Bravery" , "VERIFIED_BOT" : "Bot verificado" , "VWERIFIED_DEVELOPER" : "Desarrollador de bots verificado" , "HOUSE_BRILLIANCE" : "Brilliance" , "DISCORD_PARTNER" : "Socio de discord"
        }
    
    
    //Definimos embed, yo lo he hecho como Discord.Message(), porque requerí antes Discord; si ustedes pusieron: const { MessageEmbed } = require('discord.js'), solo pondrán new MessageEmbed()
    
    
        const embed = new Discord.MessageEmbed()
            .setColor("RANDOM") //La misma mierda de siempre xD defines el color en random
            .setDescription("**INFORMACIÓN DEL USUARIO:**") //Defines la descripcion
            .addField("**🎫 Nombre**:", "**" + `${member.user.tag}` + "**")//Que envíe el tag del usuario
            .addField("**🎟 ID**:", `${member.user.id}` )//Id del usuario
            .addField("**📌 Apodo del usuario**:", `${member.nickname !== null ? `${member.nickname}` : 'Ninguno'}`, true) //Si tiene o no apodo el usuario dentro del servidor
            .addField("**🛎 Fecha de Ingreso al Servidor:**", formatDate('DD/MM/YYYY, a las HH:mm:ss', member.joinedAt))//La fecha de ingreso del usuario al servidor
            .addField("**📥 Cuenta Creada:**", formatDate('DD/MM/YYYY, a las HH:mm:ss', member.user.createdAt))//Cuando fue creada la cuenta
            .addField("**🏳️ Insignias:**", member.user.flags.toArray().length ? member.user.flags.toArray().map(badge => badges1[badge]).join(' ') : "No tengo badges")//Lo que hemos definido antes las badges del usuario
            .addField("**🎮  Jugando**:", member.user.presence.game != null ? user.presence.game.name : "Nada", true)//Si esta jugando a algo, que indique el juego
            .addField("**🎖 Roles:**", member.roles.cache.map(roles => `\`${roles.name}\``).join(', '))//Los roles que posee dicho usuario(Si la cantidad de roles del usuario excede el numero de caracteres que soporta un field, dará un error de sintaxis a la consola, si es así encuentren una manera de hacerlo ustedes mismos)
            .addField("**🎨 Estado**:", "**" + estados[member.user.presence.status] + "**")//Estado del usuario
            .addField("**🚀 ¿Boostea?**:", member.premiumSince ? '**Estoy boosteando <a:Bosst:793195950205173840>**' : '**No estoy boosteando**')//si esta o no boosteando el servidor
            .setThumbnail (member.user.displayAvatarURL({ format: "png", dynamic: true, size: 1024 }))//y el avatar del usuario
            .setFooter(`${message.author.username}`, `${message.author.displayAvatarURL()}`)//nombre y avatar del usuario en el footer
         message.channel.send(embed)
    }

///Sugerencia///
('1) Los emojis que estan en el comando no serviran en el bot que agregue por que los emojis de mi bot estan agregados al servidor')
('2) Para los emojis usted primero escribe (``) despues busca el emoji en el discord y copia el emoji por ejemplo <:rexpup:835594540911558738> se copia y se pega en donde estan los <>')