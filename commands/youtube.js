const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  message.delete()
  message.channel.send("https://tenor.com/view/rgb-rainbow-line-gif-16940502")
  message.channel.send(`${message.author} O nosso canal no youtube é: https://www.youtube.com/channel/UCm7UyJnM5XQMtY6LgNYyyCw`)
  //E o nosso canal de cortes é: https://www.youtube.com/channel/UCqAt6-IcvcuvUTXhEYDHrHA
  message.channel.send(`${message.author} E o nosso canal de cortes é: https://www.youtube.com/channel/UCqAt6-IcvcuvUTXhEYDHrHA`)
  message.channel.send(`${message.author} E o canal do nosso podcaster é: https://www.youtube.com/channel/UC1VKDPZl2BICt8cCX4U53gw`)
  return message.channel.send("https://tenor.com/view/rgb-rainbow-line-gif-16940502")
}