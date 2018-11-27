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
  if (msg.attachments.size > 0 ) {
    msg.reply('Sokallom!');
    
  }
});

client.login(process.env.token);
