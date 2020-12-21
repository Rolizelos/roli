const Discord = require('discord.js')

exports.run = function(client, message, args) {
  
  
const kinda = new Discord.MessageEmbed() 
                            
.setTitle("Roliz bot davet")
.setDescription("**Botun Destek Sunucusu :** [Tıkla Gel!](https://discord.gg/TQnNm2UuB4)\n**Botu Davet Et :** [Davet Et](https://discord.com/oauth2/authorize?client_id=761475156487962625&scope=bot&permissions=805829694)")
return message.channel.send(kinda)
}

exports.conf = {
enabled: false,
guildOnly: false,
aliases: ["botu-ekle"],
permLevel: 0
  
};
  
exports.help = {
name: 'davet'
};