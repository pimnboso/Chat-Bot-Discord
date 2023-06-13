const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  message.delete()
  message.channel.send("https://tenor.com/view/rgb-rainbow-line-gif-16940502")
  message.channel.send(`${message.author} Convide seus amigos para o nosso servidor 😀 :\nhttps://discord.gg/3hDgqfauaU`)
  return message.channel.send("https://tenor.com/view/rgb-rainbow-line-gif-16940502")
}