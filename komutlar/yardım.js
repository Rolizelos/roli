const Discord = require('discord.js');
exports.run = function(client, message) {
const embed = new Discord.MessageEmbed()
.setColor('ORANGE')
.setAuthor(`${client.user.username} Yardım`,client.user.avatarURL())
.setDescription(`Toplamda Botta **${client.commands.size}** Adet Komut Bulunuyor!`)
.setTimestamp()
.addField('!saat','Saati Gösterir')
.addField('!çekiliş','Sunucuda Çekiliş Yapar')
.addField('!üyedurum','Sunucudaki Üye Durumunu Gösterir')
.addField('!sunucu-kur','Sunucu Kurulumu Yapar')
.addField('!logo','Logo Komutlarını Gösterir')
.addField('!espri','Rastgele Espri Yapar')
.addField('!avatar ',' Avatarınızı Atar')
.addField('!afk ',' Afk Olursunuz')
.addField('!istatistik ',' Botun İstatistiklerini Gösterir')
.addField('!davet ',' Botu Davet Edersiniz')
.addField('!everhereengel ',' Everyone-here atılmasını engeller')
.addField('!hatabildir ',' Hata Bulunca Hatayı Bildirebilirsiniz')
.addField('!isim-değiştir ',' Etiketlediğiniz Kullanıcının İsmi Üzerinde oynama yapabilirsiniz')
.addField('!istek ',' İstediğiniz Bir Öneri Olunca Bildirebilirsiniz')
.addField('!korona ',' Güncel Korona Vakalarını Aktarır')
.addField('!kullanıcı-bilgi ',' kullanıcı bilgilerinizi sıralar')
.addField('!küfür-engel aç/kapat ',' Küfür Engeli Açabilirsiniz/Kapatabilirsiniz)')
.addField('!ping ',' Botun Pingini Gönderir')
.addField('!prefix ',' Prefix Değiştirebilirsiniz')//Prefix kodunu Eklerseniz buraları düzenleyin eklemicekseniz ise silin komudu ve burayı
.addField('!reklam-engel aç/kapat ',' Reklam Engellersiniz')
.addField('!sa-as ',' biri sa yazdığında bot cevap verir')
.addField('!sunucu-bilgi ',' Bir sunucunun Bilgilerini atar')
.addField('!yavaş-mod ',' Slow Mode açar 10 saniye boyunca yazma engeli ekler')
.setFooter(`Bu komut ${message.author.username} tarafından istendi!`, message.author.avatarURL)
.setTimestamp()
.setThumbnail(client.user.avatarURL)
message.channel.send(embed)
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['jokerappabiadamsın'], 
  permLevel: 0 
};

exports.help = {
  name: 'yardım',
  description: 'Tüm komutları gösterir.',
  usage: 'yardım'
};