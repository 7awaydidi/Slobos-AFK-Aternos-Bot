const mineflayer = require('mineflayer');

function createBot() {
    const bot = mineflayer.createBot({
        host: 'Slobos.aternos.me', // اكتب هنا الأيبي حق سيرفرك
        port: 52633,               // اكتب هنا البورت حق سيرفرك
        username: 'Slobos_Bot',    // اسم البوت
        version: '1.21.1'          // إصدار ماين كرافت
    });

    bot.on('spawn', () => {
        console.log('كفووو! البوت دخل السيرفر بنجاح وهو واقف AFK الحين!');
    });

    bot.on('error', (err) => {
        console.log('حدث خطأ بسيط: ', err.message);
    });

    bot.on('end', () => {
        console.log('البوت فصل.. جاري إعادة الاتصال بعد 10 ثواني...');
        setTimeout(createBot, 10000);
    });
}

createBot();
