const Discord = require('discord.js');
exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('ORANGE')
.setAuthor(`${client.user.username} yetkili-basvuru`,client.user.avatarURL())
.setDescription(`Roliz`)
.setTimestamp()
.addField('Başvurun En Yakın Zamanda Cevaplanacaktır,','')
.addField('Örnek Başvuru:','')
 .addField('ADIM:','')
 .addField('YAŞIM:','')
 .addField('AKTİFLİK SÜREM:,','')
 .addField('DAHA ÖNCE BİR SUNUCUDA YETKİLİ OLDUM MU:','')
 .addField('DİSCORD HAKKINDA NE KADAR BİLGİNİZ VAR:,','')
.setFooter(`Bu komut ${message.author.username} tarafından istendi!`, message.author.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['yetkili-basvuru'], 
  permLevel: 0 
};

exports.help = {
  name: 'yetkili-basvuru',
  description: 'Tüm komutları gösterir.',
  usage: 'yetkili-basvuru'
};