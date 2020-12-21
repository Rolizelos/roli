const Discord = require("discord.js");
const moment = require("moment");
const os = require('os');
process.setMaxListeners(0);
require("moment-duration-format");

exports.run = async (bot, message, args) => {
  
   const jokerappzaman = moment.duration(bot.uptime).format(" D [gün], H [saat], m [dakika], s [saniye]");
   const Jokerapp = new Discord.MessageEmbed()
  //Jokerapp
  .setColor('BLACK')
  .setFooter('Bot İsmi', bot.user.avatarURL)
  .addField("» **Botun Sahibi**", "<@545651586559377410>")
  .addField("» **Geliştirici** ","<@545651586559377410>")
  .addField("» **Bellek kullanımı**", (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2) + ' MB', true)  
  .addField("» **Çalışma süresi**", jokerappzaman)
  .addField("» **Kullanıcılar**" , bot.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
  .addField("» **Discord.JS sürüm**", "v"+Discord.version, true)
  .addField("» **Node.JS sürüm**", `${process.version}`, true)
  .addField("» **CPU**", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
  .addField("» **Bit**", `\`${os.arch()}\``, true)
  .addField("» **İşletim Sistemi**", `\`\`${os.platform()}\`\``) 
  .addField("**» Bot Davet**", " [Davet Et](https://discord.com/oauth2/authorize?client_id=&permissions=8&scope=bot)", )
  .addField("**» Destek Sunucusu**", " [Sunucumuza Katıl]()", )
   
 return message.channel.send(Jokerapp);
  };

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot-bilgi","botbilgi","i"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "bot bilgilerini vermektedir.",
  usage: "istatistik"
};