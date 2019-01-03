const Discord = require('discord.js');
const client = new Discord.Client();

function catchErr (err, message) {
    client.user.get('447676992431849483').send("There was an error at channel " + message.channel + " in guild " + message.guild);
    client.user.get('447676992431849483').send("ERROR ```" + err + "```");
    //member.guild.channels.get('519233402055163905').send("There was an error at channel " + message.channel + " in guild " + message.guild);
    //member.guild.channels.get('519233402055163905').send("ERROR ```" + err + "```");
}

client.on('ready', () => {
client.user.setActivity("b0t")
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

client.on('message', async msg => {
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
    msg.reply("Kérlek, szöveges formátumban jelentsd a raidet. Pl.: !red GYM neve - reccsenés időpontja - tier").then(m => m.delete(60000));
  }
	    
});
const jelentkezem = "🖖";
const nemjelentkezem = "👎";
const prefix = "!";
client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "red")) {
    message.delete(1).catch();
    message.channel.send(`Trainerek figyelem! @everyone @here \n ${message.content.slice(5)}`).then(function (message) {
    message.react(jelentkezem);
    //message.react(nemjelentkezem);
    message.channel.send(`Az aktuális Raid-re jelentkezők száma : *** 0 fő. ***`);	    
    
	       
            }).catch(function() {
              //Something
             });
  }
		
});

client.on('messageReactionAdd', (reaction, user) => {
    
    if(reaction.emoji.name === jelentkezem && user.username != 'Slowbro' ) {
	var  jelentkezok = reaction.count-1;
 
    console.log(`${user.username} reacted with "${reaction.emoji.name}". Az aktuális Raid-re jelentkezők száma : *** ${jelentkezok} fő. ***`);
        	    
    const channel = client.channels.find(channel => channel.name === 'red🔴'); // red🔴
        
    //channel.send(`Az aktuális Raid-re jelentkezők száma : *** ${jelentkezok} fő. ***`);  //red 458620540555493376
    
    channel.fetchMessage(client.user.lastMessage).then(async msg => {
        await channel.send(`Az aktuális Raid-re jelentkezők száma : *** ${jelentkezok} fő. ***`);
        if (msg) msg.delete().catch(O_o=>{});
      });
    }
});	

client.on('messageReactionRemove', (reaction, user) => {
    
    if(reaction.emoji.name === jelentkezem && user.username != 'Slowbro' ) {
	var  jelentkezok = reaction.count-1;
    
    console.log(`${user.username} unreacted with "${reaction.emoji.name}". Az aktuális Raid-re jelentkezők száma : *** ${jelentkezok} fő. ***`);
    
    const channel = client.channels.find(channel => channel.name === 'red🔴');
        
    //channel.send(`Az aktuális Raid-re jelentkezők száma : *** ${jelentkezok} fő. ***`);  //red 458620540555493376
    
    channel.fetchMessage(client.user.lastMessage).then(async msg => {
        await channel.send(`Az aktuális Raid-re jelentkezők száma : *** ${jelentkezok} fő. ***`);
        if (msg) msg.delete().catch(O_o=>{});
      });
    }
});	

const prefix_say = "!!";
client.on('message', async message => {
    
	if (!message.content.startsWith(prefix_say) || message.author.bot) return;
	
	if (message.content.startsWith(prefix_say + "say")) {
	
     await message.delete().catch(O_o=>{});
    var args = message.content.split(" ");
    console.log(args);
    message.channel.send(message.content.slice(5));
	}	
});

/*const prefix_clear = "!!";
client.on('message', async message => {
    
	try {
	
    if (!message.content.startsWith(prefix_clear) || message.author.bot) return;
	
    if (message.content.startsWith(prefix_clear + "clear")) {
    var args = message.content.split(" ");
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No.");
    if(!args[1]) return message.channel.send("no");
    message.channel.bulkDelete(args[1]).then(() => {
    message.channel.send(`***${args[1]} üzenet törölve.***`).then(msg => msg.delete(2000)).catch(function() { });
    
      });
        
	}
		}
catch (err){
    catchErr(err, message)
}
});*/

/*const prefix_team = "!!";
client.on('message', async message => {
  if (!message.content.startsWith(prefix_team) || message.author.bot) return;
 
  if (message.content.startsWith(prefix_team + "team") && message.channel.id === '458617725770661898') {
    message.delete();
    const a = message.guild.roles.get('458317524581351426'); // valor
    const b = message.guild.roles.get('458610003482509322'); // mystic
    const c = message.guild.roles.get('458611006508105728'); // instinct

    const filter = (reaction, user) => ['🇻', '🇲', '🇮'].includes(reaction.emoji.name) && user.id === message.author.id;

    const embed = new Discord.RichEmbed()
        .setTitle('Választható csapatok:')
        .setThumbnail(client.user.displayAvatarURL)
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
		msg.delete(2000);
        return message.channel.send(`Nem választottál csapatot !`).then(m => m.delete(3000));
        });
	
    });

  }
  
}); */

const prefix_team = "!!";
client.on('message', async message => {
  if (!message.content.startsWith(prefix_team) || message.author.bot) return;
 
  if (message.content.startsWith(prefix_team + "team") && message.channel.id === '458617725770661898'){
  		message.delete(10);
	  var args = message.content.split(" ");
		console.log(args);
	  if (args[1] === 'valor'){
	  var role = message.guild.roles.get('458317524581351426');
		  message.member.addRole(role.id);
	  }
	  else if (args[1] === 'mystic'){
	  var role = message.guild.roles.get('458610003482509322');
		  message.member.addRole(role.id);
	  }
	  else if (args[1] === 'instinct'){
	  var role = message.guild.roles.get('458611006508105728');
		  message.member.addRole(role.id);
	  }
  }
	  
});	  

client.on('guildMemberAdd', member => {

    //const welcome = channels.find(channel => channel.name === "welcome");
    //const szabalyzat = channels.find(channel => channel.name === "szabalyzat");

    const welcome = client.channels.get('458617725770661898'); //welcome
    const szabalyzat = client.channels.get('460716935491878912'); //szabalyzat
	
    const a = member.guild.roles.get('458317524581351426'); // valor
    const b = member.guild.roles.get('458610003482509322'); // mystic
    const c = member.guild.roles.get('458611006508105728'); // instinct
	
    const embed = new Discord.RichEmbed()
        .setTitle('Választható csapatok:')
        .setThumbnail(client.user.displayAvatarURL)
        .setDescription(`
                
        🇻 valor ${a.toString()}
        🇲 mystic ${b.toString()}
        🇮 instinct ${c.toString()}
        `)
        .setColor(0xdd9323)
        //.setFooter(`ID: ${member.author.id}`);	
		
    member.send(embed);
    
    member.send(`
    Helló ${member} ! Üdv a Slowbrok szerveren.
    \nElső lépések:\n
    -   A ${welcome} szobában válaszd ki a csapatodat. Ezt úgy tudod megtenni, hogy beírod : ***!!team*** majd a csapatod nevét\n
	pl.:\n 
        !!team valor \n 
        !!team mystic \n 
        !!team instinct
    
    -   Ne felejtsd el elolvasni a ${szabalyzat} -ot !
`);
	
	member.guild.channels.get('458618198212739083').send(embed);

	member.guild.channels.get('458618198212739083').send(`
    Helló ${member} ! Üdv a Slowbrok szerveren.
    \nElső lépések:\n
    -   A ${welcome} szobában válaszd ki a csapatodat. Ezt úgy tudod megtenni, hogy beírod : ***!!team*** majd a csapatod nevét\n
	pl.:\n 
        !!team valor \n 
        !!team mystic \n 
        !!team instinct
    
    -   Ne felejtsd el elolvasni a ${szabalyzat} -ot !
`);
	
});
const prefix_tempmute = "!!";
client.on('message', async message => {

if (!message.content.startsWith(prefix_tempmute) || message.author.bot) return;    

if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("No can do.");

if (message.content.startsWith(prefix_tempmute + "tempmute")){
  var args = message.content.split(" ");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
  if(!tomute) return message.reply("Couldn't find user.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Can't mute them!");
  //let reason = args.slice(2).join(" ");
  //if(!reason) return message.reply("Please supply a reason.");

  let muterole = message.guild.roles.find(`name`, "muted");
  //start of create role
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "muted",
        color: "#000000",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }
  //end of create role
  let mutetime = args[1];
  if(!mutetime) return message.reply("You didn't specify a time!");

  message.delete().catch(O_o=>{});

  try{
    await tomute.send(`Hi! You've been muted for ${mutetime}. Sorry!`)
  }catch(e){
    message.channel.send(`A user has been muted... but their DMs are locked. They will be muted for ${mutetime}`)
  }

  let muteembed = new Discord.RichEmbed()
  .setDescription(`Mute executed by ${message.author}`)
  .setColor(#ffa500)
  .addField("Muted User", tomute)
  .addField("Muted in", message.channel)
  .addField("Time", message.createdAt)
  .addField("Length", mutetime)
  //.addField("Reason", reason);

  let reportschannel = message.guild.channels.find(`name`, "reports");
  if(!reportschannel) return message.reply("Please create a reports channel first!");
  reportschannel.send(muteembed);

  await(tomute.addRole(muterole.id));

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> has been unmuted!`);
  }, ms(mutetime));


//end of module
}
});

client.login(process.env.token);

