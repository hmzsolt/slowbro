const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
client.user.setActivity("Pokemon Go")
  console.log(`Logged in as ${client.user.tag}!`);
	console.log(`${client.user.id}`);

 /* console.log("Servers:");
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)

        guild.channels.forEach((channel) => {
            console.log(` -- ${channel.name} - (${channel.type}) - ${channel.id}`)
        })
    })   */ 
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
const jelentkezem = "👍";
const nemjelentkezem = "👎";
const prefix = "!";
client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;
 
  if (message.content.startsWith(prefix + "red")) {
    message.delete(1);
    message.channel.send(" Trainerek figyelem! @everyone @here ");
    message.channel.send(message.content.slice(5)).then(function (message) {
              message.react(jelentkezem);
              message.react(nemjelentkezem);

		//console.log("Az aktuális Raid-re jelentkezők száma : ");
	    
            }).catch(function() {
              //Something
             });
        } 
	//console.log(`Az aktuális Raid-re jelentkezők száma : ", ${message.react(jelentkezem).count-1} `);	
	
});
var  jelentkezok = 0;
client.on('messageReactionAdd', (reaction, user) => {
    if(reaction.emoji.name === jelentkezem) {
	  var  jelentkezok = reaction.count-1;
	user.send("Az aktuális Raid-re jelentkezők száma : ");
	user.send(jelentkezok);
	console.log("Az aktuális Raid-re jelentkezők száma : ");
	console.log(jelentkezok);   
	  
    }	

	//message.channel.send("Az aktuális Raid-re jelentkezők száma :", `${jelentkezok}`);
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



client.login(process.env.token);
