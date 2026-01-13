const { Telegraf } = require('telegraf');
const axios = require('axios');

// Niche wali line mein apna token ' ' ke beech daalein
const bot = new Telegraf('8388150899:AAGQ9qn13FoFABTESSL6D_Lj(... baki ka token)'); 

bot.start((ctx) => ctx.reply('Bot Shuru Ho Gaya Hai!'));
bot.command('info', async (ctx) => {
    const response = await axios.get('https://ipapi.co/json/');
    ctx.reply(`IP: ${response.data.ip}`);
});
bot.launch();
