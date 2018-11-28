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

var helloResponses = [`Sokallom.`, `Tagság megvonás 1 hétig!`, `Többet ne forduljon elő!`];
var response = helloResponses[Math.floor(Math.random()*helloResponses.length)];

client.on('message', msg => {
  if (msg.attachments.size > 0 ) {
    msg.reply(response);
    
  }
});

client.login(process.env.token);
