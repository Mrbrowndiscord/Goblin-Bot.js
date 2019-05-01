const Discord = require('discord.js');
const bot = new Discord.Client();

const PREFIX = '!';

var version = '1.0.1';

bot.on('ready', () => {
    console.log('This bot is online!');
    bot.user.setActivity('Avengers Endgame', { type: 'WATCHING' }).catch(console.error);

})

bot.login(process.env.BOT_TOKEN);
