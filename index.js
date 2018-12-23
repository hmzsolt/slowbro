const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
client.user.setActivity("Pokemon Go")
  console.log(`Logged in as ${client.user.tag} on ${client.guilds.size} server(s)!`);
	console.log(`ID: ${client.user.id}`);

/*  console.log("Servers:");
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)
					
	guild.roles.forEach((role) => {
		console.log(` -- ${role.name} - ${role.id}`)
					
  	guild.channels.forEach((channel) => {
            console.log(` --- ${channel.name} - (${channel.type}) - ${channel.id}`)
		})        
	})
    }) */   
});

client.on('message', msg => {
  var helloResponses = [
	"Sokallom.",
	"Tagság megvonás 1 hétig!", 
	"Többet ne forduljon elő!",
	"Posztolás gyakorlásától való eltiltás az idők végezetéig.",
	"Jogosulatlan előnyszerzés miatt transferelned kell.",
	"Ugye ezt nem gondoltad komolyan?!",
	"2 perced van felhúzni lvl 40-ig, vagy transferelned kell!",
	"Ezt most megtarthatod..." 
];
var response = helloResponses[Math.floor(Math.random()*helloResponses.length)];
  if (msg.attachments.size > 0 && msg.channel.id === '504535266069970945') {
    msg.reply(response).then().catch(console.error);
  
	  
  }  
	  
  if (msg.attachments.size > 0 && msg.channel.id === '458620540555493376')   {
    msg.delete(1);
    msg.reply("Kérlek, szöveges formátumban jelentsd a raidet. Pl.: !red GYM neve - reccsenés időpontja - tier");
  }
	
	    
});
const jelentkezem = "🖖";
const nemjelentkezem = "👎";
const prefix = "!";
client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "red")) {
    message.delete(1).catch();
    message.channel.send(" Trainerek figyelem! @everyone @here ");
    message.channel.send(message.content.slice(5)).then(function (message) {
    message.react(jelentkezem);
    //message.react(nemjelentkezem);
    
	       
            }).catch(function() {
              //Something
             });
  }
	//console.log(``);	

	if (!message.author.bot && message.channel.id === '458620540555493376'){
		client.channels.get('506538067847544833').send(" Trainerek figyelem! @everyone @here ");
		client.channels.get('506538067847544833').send(message.content.slice(5)).then(function (message) {
        	message.react(jelentkezem);
		    
            }).catch(function() { });;
	}
	
	if (!message.author.bot && message.channel.id === '506538067847544833'){
		client.channels.get('458620540555493376').send(" Trainerek figyelem! @everyone @here ");
		client.channels.get('458620540555493376').send(message.content.slice(5)).then(function (message) {
        	message.react(jelentkezem);
		    
            }).catch(function() { });;
	}
	
});


var  jelentkezok = 0;
client.on('messageReactionAdd', (reaction, user, message) => {
    if(reaction.emoji.name === jelentkezem && user.username != 'Slowbro' ) {
	  var  jelentkezok = reaction.count-1;
	//user.send("Az aktuális Raid-re jelentkezők száma : ");
	//user.send(jelentkezok);
	
	console.log(`${user.username} reacted with "${reaction.emoji.name}".`);
	console.log(`Az aktuális Raid-re jelentkezők száma : *** ${jelentkezok} fő. ***`);
	    
	return console.log(`Az aktuális Raid-re jelentkezők száma : *** ${jelentkezok} fő. ***`);    
	//console.log(jelentkezok);  
	    
    }	
	/*if(reaction.emoji.name != jelentkezem && !message.author.bot ) {
	  
	return reaction.remove(user); 	}*/
});

client.on('messageReactionRemove', (reaction, user, message) => {
    if(reaction.emoji.name === jelentkezem && user.username != 'Slowbro' ) {
	  var  jelentkezok = reaction.count-1;
		
	console.log(`${user.username} dereacted with "${reaction.emoji.name}".`);
	console.log(`Az aktuális Raid-re jelentkezők száma : *** ${jelentkezok} fő. ***`);
	
	    
	//return user.send(`Az aktuális Raid-re jelentkezők száma : *** ${jelentkezok} fő. ***`);    
	  
    }	
		
});

/*client.on('message', function(message) {
    if (message.content == "^clear") {
        if (message.member.hasPermission("MANAGE_MESSAGES")) {
            message.channel.fetchMessages()
               .then(function(list){
                    message.channel.bulkDelete(list);
                }, function(err){message.channel.send("ERROR: ERROR CLEARING CHANNEL.")})                        
        }
    }

});*/

/*const fs = require("fs");

fs.readdir('./events/', (err, files) => {
  if (err) return console.error;
  files.forEach(file => {
    if (!file.endsWith('.js')) return;
    const evt = require(`./events/${file}`);
    let evtName = file.split('.')[0];
    console.log(`Loaded event '${evtName}'`);
    client.on(evtName, evt.bind(null, client));
  });
});

fs.readdir('./commands/', async (err, files) => {
    if (err) return console.error;
    files.forEach(file => {
      if (!file.endsWith('.js')) return;
      let props = require(`./commands/${file}`);
      let cmdName = file.split('.')[0];
      console.log(`Loaded command '${cmdName}'`);
      client.commands.set(cmdName, props);
    });
  });*/

const prefix_team = "!!";
client.on('message', async message => {
  if (!message.content.startsWith(prefix_team) || message.author.bot) return;
 
  if (message.content.startsWith(prefix_team + "team")) {
     await message.delete().catch(O_o=>{});

    const a = message.guild.roles.get('458317524581351426'); // valor
    const b = message.guild.roles.get('458610003482509322'); // mystic
    const c = message.guild.roles.get('458611006508105728'); // instinct


    const filter = (reaction, user) => ['🇻', '🇲', '🇮'].includes(reaction.emoji.name) && user.id === message.author.id;

    const embed = new Discord.RichEmbed()
        .setTitle('Választható csapatok:')
        .setThumbnail('https://raw.githubusercontent.com/hmzsolt/slowbro/master/f2vxtZYdIU3C_ZWZkoBorqacLg6NM8f3hAJ_UqDDr-0.png')
        .setDescription(`
                
        🇻 Valor ${a.toString()}

        🇲 Mystic ${b.toString()}

        🇮 Instinct ${c.toString()}
        `)
        .setColor(0xdd9323)
        .setFooter(`ID: ${message.author.username}`);
        
    message.channel.send(embed).then(async msg => {

        await msg.react('🇻');
        await msg.react('🇲');
        await msg.react('🇮');

        msg.awaitReactions(filter, {
            max: 1,
            time: 30000,
            errors: ['time']
        }).then(collected => {

            const reaction = collected.first();

            switch (reaction.emoji.name) {
                case '🇻':
                    if (message.member.roles.has(a.id)) {
                        msg.delete(2000);
                        return message.channel.send('Van már ilyen rangod!').then(m => m.delete(3000));
                    }
                    message.member.addRole(a).catch(err => {
                        console.log(err);
                        return message.channel.send(`Hiba: **${err.message}**.`);
                    });
                    message.channel.send(`Sikeresen hozzá lettél adva a **${a.name}** csapathoz!`).then(m => m.delete(3000));
                    msg.delete();
                    break;
                case '🇲':
                    if (message.member.roles.has(b.id)) {
                        msg.delete(2000);
                        return message.channel.send('Van már ilyen rangod!').then(m => m.delete(3000));
                    }
                    message.member.addRole(b).catch(err => {
                        console.log(err);
                        return message.channel.send(`Hiba: **${err.message}**.`);
                    });
                    message.channel.send(`Sikeresen hozzá lettél adva a **${b.name}** csapathoz!`).then(m => m.delete(3000));
                    msg.delete();
                    break;
                case '🇮':
                    if (message.member.roles.has(c.id)) {
                        msg.delete(2000);
                        return message.channel.send('Van már ilyen rangod!').then(m => m.delete(3000));
                    }
                    message.member.addRole(c).catch(err => {
                        console.log(err);
                        return message.channel.send(`Hiba: **${err.message}**.`);
                    });
                    message.channel.send(`Sikeresen hozzá lettél adva a **${c.name}** csapathoz!`).then(m => m.delete(3000));
                    msg.delete();
                    break;
            }
        }).catch(collected => {
            return message.channel.send(`Nem választottál csapatot !`).then(m => m.delete(3000));
        });

    });
    
  }
  
});   

client.login(process.env.token);

