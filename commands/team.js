const Discord = require("discord.js");

exports.run = async (client, message, args) => {
    
    await message.delete().catch(O_o=>{});

    const a = message.guild.roles.get('458317524581351426'); // valor
    const b = message.guild.roles.get('458610003482509322'); // mystic
    const c = message.guild.roles.get('458611006508105728'); // instinct

    const filter = (reaction, user) => ['🇻', '🇲', '🇮'].includes(reaction.emoji.name) && user.id === message.author.id;

    const embed = new RichEmbed()
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

};

module.exports.help = {
  name:"team"
};
