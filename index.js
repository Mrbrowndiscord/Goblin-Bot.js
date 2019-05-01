const Discord = require('discord.js');
const bot = new Discord.Client();

const token = 'NTEzNzA3MTIyOTQxNDkzMjU5.XMgCXQ.88w7EaxBJsuTnkacfIWxvs_4eiA'

const PREFIX = '!';

var version = '1.0.1';

bot.on('ready', () => {
    console.log('This bot is online!');
    bot.user.setActivity('Avengers Endgame', { type: 'WATCHING' }).catch(console.error);

})

bot.on('guildMemberAdd', member => {
    const channel = member.guild.channels.find(channel => channel.name === "welcome")
    if (!channel) return;
    channel.send(`Welcome to our server, ${member}, please read the rules in the rules channel :hugging: :tada:`)
});


bot.on("message", (message) => {
    if (message.content.startsWith("/kick")) {

        if (!message.member.roles.find("name", "Admin"))
        return;
        // Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        // Kick
        member.kick().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " has been successfully kicked :point_right: ");
        }).catch(() => {
             // Failmessage
            message.channel.send("Access Denied");
        });
    }
});


bot.on("message", (message) => {
    if (message.content.startsWith("/ban")) {

        if (!message.member.roles.find("name", "Admin"))
        return;
        // Easy way to get member object though mentions.
        var member= message.mentions.members.first();
        // Ban
        member.ban().then((member) => {
            // Successmessage
            message.channel.send(":wave: " + member.displayName + " has been successfully Banned :point_right: ");
        }).catch(() => {
             // Failmessage
            message.channel.send("Access Denied");
        });
    }
});


bot.on('message', msg => {
    if (msg.content === "HELLO") {
        msg.reply('HELLO FRIEND!');
    }
})

bot.login(token);