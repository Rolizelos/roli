const Discord = require('discord.js')

exports.run = function(client, message, args) {
  
  
const kinda = new Discord.MessageEmbed() 
                            
.setTitle("Roliz bot medya")
.setDescription("**Botun Destek Sunucusu :** [Tıkla Gel!](https://discord.gg/TQnNm2UuB4)\n**Botu Davet Et :** [Davet Et](https://discord.com/oauth2/authorize?client_id=761475156487962625&scope=bot&permissions=805829694)\n**YouTube :** [Tıkla Gel!](https://youtube.com/channel/UCdwVT8KjsAW3EaypRsP4fYw)\n**Web :** [Tıkla Gel!](https://rolizelos.glitch.me)")
return message.channel.send(kinda)
}

exports.conf = {
enabled: false,
guildOnly: false,
aliases: ["medya"],
permLevel: 0
  
};
  
exports.help = {
name: 'medya'
};