const Discord = require('discord.js');
const client = new Discord.Client();
const jelentkezem = "🖖";
const nemjelentkezem = "👎";
const prefix = "!";


function catchErr (err, message) {
    client.user.get('447676992431849483').send("There was an error at channel " + message.channel + " in guild " + message.guild);
    client.user.get('447676992431849483').send("ERROR ```" + err + "```");
    //member.guild.channels.get('519233402055163905').send("There was an error at channel " + message.channel + " in guild " + message.guild);
    //member.guild.channels.get('519233402055163905').send("ERROR ```" + err + "```");
}

client.on('ready', () => {

  let statuses = [
    `Pokemon Go`,
    `b0t`,
    `Tagok: ${client.users.size} fő`,
    `Szerver: Slowbrok Kaposvár`
  ];

  setInterval(function() {
    let status = statuses[Math.floor(Math.random()*statuses.length)];
    client.user.setActivity(status);
  }, 5000);


  console.log(`Logged in as ${client.user.tag} on ${client.guilds.size} server(s)!`);
	console.log(`ID: ${client.user.id}`);
   
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
  "Ezt most megtarthatod...",
  "Ez ugye csak valami rossz vicc akart lenni?",
	"Jó kis poké, nagyon szeretem!",
	"Csűrtél rá egy grétikét? "
];
var response = helloResponses[Math.floor(Math.random()*helloResponses.length)];
  if (msg.attachments.size > 0 && msg.channel.id === '504535266069970945') {
    msg.reply(response).then().catch(console.error);
  }  
	  
  if (msg.attachments.size > 0 && msg.channel.id === '458620540555493376') {
    msg.delete(1);
    msg.reply("Kérlek, szöveges formátumban jelentsd a raidet. Pl.: !red GYM neve - reccsenés időpontja - tier").then(m => m.delete(60000));
  }

  if (!msg.content.startsWith('!pvp') && msg.channel.id === '523763306478043137') {
    if (msg.author.bot) return;
    msg.delete(1);
    msg.reply("Csak a **!pvp** parancs használata a megengedett.").then(m => m.delete(60000));
  }

});

/*client.on('message', (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "red")) {
    message.delete(1).catch();
    message.channel.send(`Trainerek figyelem! @everyone @here ${message.author} jelenti: \n ${message.content.slice(5)}`).then(function (message) {
    message.react(jelentkezem);
    //message.react(nemjelentkezem);
    //message.channel.send(`Az aktuális Raid-re jelentkezők száma : *** 0 fő. ***`);	    
    }).catch(function() {
              //Something
    });
  }
		
});*/

/*client.on('message', (message) => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;
   
    if (message.content.startsWith(prefix + "raid")) {
	    if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nincs hozzá jogosultságod.").then(m => m.delete(60000));
      var args = message.content.split(" ");
      console.log(args);

      let raidembed = new Discord.RichEmbed()
      .setDescription(`Raid jelentő: ${message.author}`)
      .setColor(0xdd9323)
      .addField("Gym neve: ", args[1])
      .addField("Reccsenés időpontja: ", args[2])
      .addField("Tier / Boss: ", args[3]);
      
      const channel_red = client.channels.get('458620540555493376'); //red🔴
      message.delete(1).catch();
      channel_red.send(`Trainerek figyelem! @everyone @here !`);
      channel_red.send(raidembed).then(function (message) {
      message.react(jelentkezem);
      //message.react(nemjelentkezem);
      //channel_red.send(`Az aktuális Raid-re jelentkezők száma : *** 0 fő. ***`);	    
      
             
              }).catch(function() {
                //Something
               });
    }
  });*/

client.on('messageReactionAdd', (reaction, user) => {
    const channel_reports = client.channels.get('519233402055163905'); //reports
    if(reaction.emoji.name === jelentkezem && user.username != 'Slowbro' ) {
	var  jelentkezok = reaction.count-1;
 
    console.log(`${user.username} reacted with ${reaction.emoji.name}. `);
    channel_reports.send(`${user.username} reacted with ${reaction.emoji.name}. `);
	    
    //const channel = client.channels.find(channel => channel.name === 'red🔴'); // red🔴
        
    //channel.send(`Az aktuális Raid-re jelentkezők száma : *** ${jelentkezok} fő. ***`);  //red 458620540555493376
    
    /*channel.fetchMessage(client.user.lastMessage).then(async msg => {
        await channel.send(`Az aktuális Raid-re jelentkezők száma : *** ${jelentkezok} fő. ***`);
        if (msg) msg.delete().catch(O_o=>{});
      });*/
    }
});	

client.on('messageReactionRemove', (reaction, user) => {
    const channel_reports = client.channels.get('519233402055163905'); //reports
    if(reaction.emoji.name === jelentkezem && user.username != 'Slowbro' ) {
	var  jelentkezok = reaction.count-1;
    
    console.log(`${user.username} unreacted with ${reaction.emoji.name}. `);
    channel_reports.send(`${user.username} unreacted with ${reaction.emoji.name}. `);
    //const channel = client.channels.find(channel => channel.name === 'red🔴');
        
    //channel.send(`Az aktuális Raid-re jelentkezők száma : *** ${jelentkezok} fő. ***`);  //red 458620540555493376
    
    /*channel.fetchMessage(client.user.lastMessage).then(async msg => {
        await channel.send(`Az aktuális Raid-re jelentkezők száma : *** ${jelentkezok} fő. ***`);
        if (msg) msg.delete().catch(O_o=>{});
      });*/
    }
});	

/*client.on('messageDelete', message => {
  const channel_reports = client.channels.get('519233402055163905'); //reports
  if(message.author.bot) return;
  channel_reports.send(`${message.member.user.username} üzenete:\n***${message.cleanContent}*** \ntörölve lett a(z) ${message.channel} szobából.`);
  //console.log(message.delete.user.username);	
});*/

/*client.on("messageDelete", async msg => {
  if(msg.author.bot) return;
  //let logs = await msg.guild.fetchAuditLogs({type: 72});
  //let entry = logs.entries.first();
  //console.log(logs);
  //console.log(entry);
  let embed = new Discord.RichEmbed()
    .setTitle("**TÖRÖLT ÜZENET**")
    .setColor("#fc3c3c")
    .addField("Szerző", msg.author.tag, true)
    .addField("Csatorna", msg.channel, true)
    .addField("Üzenet", msg.content)
    //.addField("Végrehajtó", entry.executor)
    //.addField("Reason", entry.reason || "Unspecified")
    .setFooter(`Message ID: ${msg.id} | Author ID: ${msg.author.id}`);

    const channel_reports = client.channels.get('519233402055163905');
  channel_reports.send(embed);
});*/

/*client.on('message', async message => {
    const channel_reports = client.channels.get('519233402055163905'); //reports
    
    if (!message.content.startsWith(prefix) || message.author.bot) return;
    	
	if (message.content.startsWith(prefix + "say")) {
    	
     await message.delete().catch(O_o=>{});
     if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nincs hozzá jogosultságod.").then(m => m.delete(60000));
    var args = message.content.split(" ");
    
    console.log(args);
    console.log(args[1].length);
    
    if(args[1] === '<#514574722495676417>') { //silph 
        const channel_say =client.channels.get('514574722495676417'); 
      channel_say.send(message.content.slice(5+args[1].length));
      let botembed = new Discord.RichEmbed()
    .setTitle("**BOT ÜZENET**")
    .setColor("0xdd9323")
    .addField("Szerző", message.author.tag, true)
    .addField("Forrás Csatorna", message.channel, true)
    .addField("Üzenet", message.content.slice(5+args[1].length))
    .addField("Cél Csatorna", channel_say)
    //.addField("Reason", entry.reason || "Unspecified")
    .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);
      channel_reports.send(botembed);
    }
    else if(args[1] === '<#504535266069970945>') { //ekuki
        const channel_say =client.channels.get('504535266069970945'); 
      channel_say.send(message.content.slice(5+args[1].length));
      let botembed = new Discord.RichEmbed()
    .setTitle("**BOT ÜZENET**")
    .setColor("0xdd9323")
    .addField("Szerző", message.author.tag, true)
    .addField("Forrás Csatorna", message.channel, true)
    .addField("Üzenet", message.content.slice(5+args[1].length))
    .addField("Cél Csatorna", channel_say)
    //.addField("Reason", entry.reason || "Unspecified")
    .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);
      channel_reports.send(botembed);
    }
    else if(args[1] === '<#459575823805054976>') { //barát
        const channel_say =client.channels.get('459575823805054976'); 
      channel_say.send(message.content.slice(5+args[1].length));
      let botembed = new Discord.RichEmbed()
    .setTitle("**BOT ÜZENET**")
    .setColor("0xdd9323")
    .addField("Szerző", message.author.tag, true)
    .addField("Forrás Csatorna", message.channel, true)
    .addField("Üzenet", message.content.slice(5+args[1].length))
    .addField("Cél Csatorna", channel_say)
    //.addField("Reason", entry.reason || "Unspecified")
    .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);
      channel_reports.send(botembed);
    }
    else if(args[1] === '<#458620540555493376>') { //red
        const channel_say =client.channels.get('458620540555493376'); 
        channel_say.send(message.content.slice(5+args[1].length));
        let botembed = new Discord.RichEmbed()
    .setTitle("**BOT ÜZENET**")
    .setColor("0xdd9323")
    .addField("Szerző", message.author.tag, true)
    .addField("Forrás Csatorna", message.channel, true)
    .addField("Üzenet", message.content.slice(5+args[1].length))
    .addField("Cél Csatorna", channel_say)
    //.addField("Reason", entry.reason || "Unspecified")
    .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);
        channel_reports.send(botembed);
    }
    else if(args[1] === '<#474077389186400276>') { //hirek
        const channel_say =client.channels.get('474077389186400276'); 
        channel_say.send(message.content.slice(5+args[1].length));
        let botembed = new Discord.RichEmbed()
    .setTitle("**BOT ÜZENET**")
    .setColor("0xdd9323")
    .addField("Szerző", message.author.tag, true)
    .addField("Forrás Csatorna", message.channel, true)
    .addField("Üzenet", message.content.slice(5+args[1].length))
    .addField("Cél Csatorna", channel_say)
    //.addField("Reason", entry.reason || "Unspecified")
    .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);
        channel_reports.send(botembed);
    }
    else if(args[1] === '<#458620489540304929>') { //chat
        const channel_say =client.channels.get('458620489540304929'); 
        channel_say.send(message.content.slice(5+args[1].length));
        let botembed = new Discord.RichEmbed()
    .setTitle("**BOT ÜZENET**")
    .setColor("0xdd9323")
    .addField("Szerző", message.author.tag, true)
    .addField("Forrás Csatorna", message.channel, true)
    .addField("Üzenet", message.content.slice(5+args[1].length))
    .addField("Cél Csatorna", channel_say)
    //.addField("Reason", entry.reason || "Unspecified")
    .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);
	      channel_reports.send(botembed);
    }
    else if(args[1] === '<#458625848572903435>') { //biznisz
      const channel_say =client.channels.get('458625848572903435'); 
      channel_say.send(message.content.slice(5+args[1].length));
      let botembed = new Discord.RichEmbed()
    .setTitle("**BOT ÜZENET**")
    .setColor("0xdd9323")
    .addField("Szerző", message.author.tag, true)
    .addField("Forrás Csatorna", message.channel, true)
    .addField("Üzenet", message.content.slice(5+args[1].length))
    .addField("Cél Csatorna", channel_say)
    //.addField("Reason", entry.reason || "Unspecified")
    .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);
      channel_reports.send(botembed);
    }
    else message.channel.send(message.content.slice(5));
    let channel_say = message.channel;
    let botembed = new Discord.RichEmbed()
    .setTitle("**BOT ÜZENET**")
    .setColor("0xdd9323")
    .addField("Szerző", message.author.tag, true)
    .addField("Forrás Csatorna", message.channel, true)
    .addField("Üzenet", message.content.slice(5))
    .addField("Cél Csatorna", channel_say)
    //.addField("Reason", entry.reason || "Unspecified")
    .setFooter(`Message ID: ${message.id} | Author ID: ${message.author.id}`);
      channel_reports.send(botembed);
}  
    	
});*/

/*client.on('message', async message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "team") && message.channel.id === '458617725770661898'){
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
	  
});*/	  

/*client.on('guildMemberAdd', member => {

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
    -   A ${welcome} szobában válaszd ki a csapatodat. Ezt úgy tudod megtenni, hogy beírod : ***!team*** majd a csapatod nevét\n
	pl.:\n 
        !team valor \n 
        !team mystic \n 
        !team instinct
    
    -   Ne felejtsd el elolvasni a ${szabalyzat} -ot !
`);
	
	member.guild.channels.get('458618198212739083').send(embed);

	member.guild.channels.get('458618198212739083').send(`
    Helló ${member} ! Üdv a Slowbrok szerveren.
    \nElső lépések:\n
    -   A ${welcome} szobában válaszd ki a csapatodat. Ezt úgy tudod megtenni, hogy beírod : ***!team*** majd a csapatod nevét\n
	pl.:\n 
        !team valor \n 
        !team mystic \n 
        !team instinct
    
    -   Ne felejtsd el elolvasni a ${szabalyzat} -ot !
`);

    const channel_reports = client.channels.get('519233402055163905'); //reports

    let memberjoin = new Discord.RichEmbed()
    .setDescription(`Új felhasználó csatlakozott a szerverhez!`)
    .setColor(0xdd9323)
    .addField("Új tag: ", member)
    .addField(`Dátum: , ${new Date().toLocaleString()}`);
    
    channel_reports.send(memberjoin);
	
});*/

/*client.on('guildMemberRemove', member => {

    const channel_reports = client.channels.get('519233402055163905'); //reports

    let memberleave = new Discord.RichEmbed()
    .setDescription(`Felhasználó elhagyta a süllyedő hajót!`)
    .setColor(0xdd9323)
    .addField("Tag: ", member)
    .addField(`Dátum: , ${new Date().toLocaleString()}`);
    
    channel_reports.send(memberleave);
});*/


client.on('message', async message => {

if (!message.content.startsWith(prefix) || message.author.bot) return;    
if (message.content.startsWith(prefix + "tempmute")){
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Nincs hozzá jogosultságod.");
  var args = message.content.split(" ");
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
  if(!tomute) return message.reply("Nincs ilyen felhasználó.");
  if(tomute.hasPermission("MANAGE_MESSAGES")) return message.reply("Őt nem lehet némítani!");
  //let reason = args.slice(2).join(" ");
  //if(!reason) return message.reply("Please supply a reason.");

  /* let muterole = message.guild.roles.find(`name`, "muted");
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
  //end of create role */
  let mutetime = args[2];
  if(!mutetime) return message.reply("Nem adtál meg időt.");

  message.delete().catch(O_o=>{});

  try{
    await tomute.send(`Helló. Rosszalkodás miatt némítva lettél egy kis időre. Sorry!`)
  }catch(e){
    message.channel.send(`A user has been muted... but their DMs are locked. They will be muted for ${mutetime}`)
  }

  let muteembed = new Discord.RichEmbed()
  .setDescription(`Némító: ${message.author}`)
  .setColor(0xdd9323)
  .addField("Némított felhasználó", tomute)
  .addField("Hol lett némítva", message.channel)
  .addField("Némítás ideje", message.createdAt)
  .addField("Némítás hossza", mutetime);
  
  let reportschannel = message.guild.channels.find(channel => channel.name === 'reports');
  if(!reportschannel) return message.reply("Please create a reports channel first!");
  reportschannel.send(muteembed);

  await(tomute.addRole(muterole.id));

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    message.channel.send(`<@${tomute.id}> némítása feloldva!`);
  }, (60000*(mutetime)));


//end of module
}
});

/*client.on('message', async message => {

  if (!message.content.startsWith(prefix) || message.author.bot) return;    
    
  if (message.content.startsWith(prefix + "counters")){
      message.delete().catch(O_o=>{});
    
      var args = message.content.split(" ");
      console.log(args);
      
      let boss = args.slice(1).join(' ');
      console.log(boss);
      
      if (boss.length < 1) return message.channel.send(`Nem adtál meg Tier Boss-t.`).then(m => m.delete(60000));
      let api = "https://fight.pokebattler.com/raids/defenders/" + boss.toUpperCase() + "/levels/RAID_LEVEL_5/attackers/levels/40/strategies/CINEMATIC_ATTACK_WHEN_POSSIBLE/DEFENSE_RANDOM_MC?sort=OVERALL&weatherCondition=NO_WEATHER&dodgeStrategy=DODGE_REACTION_TIME&aggregation=AVERAGE&randomAssistants=-1";
      //message.channel.send(`https://www.pokebattler.com/raids/defenders/${boss.toUpperCase()}/levels/RAID_LEVEL_5/attackers/levels/40/strategies/CINEMATIC_ATTACK_WHEN_POSSIBLE/DEFENSE_RANDOM_MC?sort=OVERALL&weatherCondition=NO_WEATHER&dodgeStrategy=DODGE_REACTION_TIME&aggregation=AVERAGE&randomAssistants=-1`);
    
      console.log(api);
    
    }
  });*/


client.login(process.env.token);
