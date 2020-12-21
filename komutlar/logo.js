const Discord = require("discord.js");
const db = require("quick.db");


exports.run = async (client, message, args) => {

const eğlence = new Discord.MessageEmbed()
.setColor("RANDOM")
.setAuthor("Roliz")
.setTitle("Roliz Logo Komutları")
 .setTimestamp()
.setDescription("**!dinamik** = Dinamik logo oluşturur. \n **!altın** = Altın logo oluşturur.\n **!basit** = Basit logo oluşturur. \n **!elmas** = Elmas logo oluşturur. \n **!sarı** = Sarı logo oluşturur. \n **!neonmavi** = Neon mavi logo oluşturur. \n **!kalın** = Kalın logo oluşturur. \n **!habbo** = Habbo yazı tipinde logo oluşturur. \n **!iarrow** = Ok işaretli logo oluşturur. \n **!green** = Yeşil logo oluşturur. \n **!alev** = Alevli logo oluşturur. \n **!red** = Kırmızı logo oluşturur.")
.setImage("https://cdn.discordapp.com/attachments/777509193988046868/779356018521014322/roliilogoa.png")
message.channel.send(eğlence)
}

exports.conf = {
  enabled: true, 
  guildOnly: false, 
   aliases: ["logo"],
  permLevel: `Yetki gerekmiyor.` 
};

exports.help = {
  name: 'logo',
  category: 'kullanıcı',
  description: 'Yardım Menüsü.',
   usage:'!logo'
}