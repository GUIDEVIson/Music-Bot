const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'หวัดดีหนุ่มๆ') {
    msg.reply('หวัดดีเผื่อสาวๆ ด้วย');
  }
});

client.login(TOKEN);


