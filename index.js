const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
client.user.setActivity("Pokemon Go")
  console.log(`Logged in as ${client.user.tag}!`);

  console.log("Servers:");
    client.guilds.forEach((guild) => {
        console.log(" - " + guild.name)

        guild.channels.forEach((channel) => {
            console.log(` -- ${channel.name} - (${channel.type}) - ${channel.id}`)
        })
    })    
});



client.on('message', msg => {
  var helloResponses = [
	"Sokallom.",
	"Tagság megvonás 1 hétig!", 
	"Többet ne forduljon elő!",
	"Posztolás gyakorlásától való eltiltás az idők végezetéig.",
	"Jogosulatlan előnyszerzés miatt transferelned kell."
];
var response = helloResponses[Math.floor(Math.random()*helloResponses.length)];
  if (msg.attachments.size > 0 ) {
    msg.reply(response);
    
  }
});

client.login(process.env.token);
