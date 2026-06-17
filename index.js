const mineflayer = require('mineflayer');
const express = require('express');
const app = express();

const PORT = process.env.PORT || 10000;
app.get('/', (req, res) => res.send('البوت شغال 100%!'));
app.listen(PORT, () => console.log(`سيرفر الويب شغال على بورت ${PORT}`));

function createBot() {
    const bot = mineflayer.createBot({
        host: 'born-mc.aternos.me', 
        port: 52633,               
        username: 'Born_Bot',    
        version: '1.21.1'
    });

    bot.on('spawn', () => {
        console.log('كفووو! البوت دخل سيرفر BORN-MC الحين وهو واقف AFK!');
    });

    bot.on('error', (err) => {
        console.log('خطأ في البوت: ', err.message);
    });

    bot.on('end', () => {
        console.log('فصل البوت.. جاري إعادة الاتصال...');
        setTimeout(createBot, 10000);
    });
}

createBot();
