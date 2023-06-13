//https://twitter.com/pixeldsn
//https://twitter.com/RabiscosTortos
//https://twitter.com/pauletiemy
const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  message.delete()
  message.channel.send("https://tenor.com/view/rgb-rainbow-line-gif-16940502")
  message.channel.send(`${message.author} O nosso twitter é:\nhttps://twitter.com/RabiscosTortos`)
  message.channel.send(`${message.author} O twitter de nosso podcaster é:\nhttps://twitter.com/pixeldsn`)
  message.channel.send(`${message.author} O twitter de nossa podcaster é:\nhttps://twitter.com/pauletiemy`)
  return message.channel.send("https://tenor.com/view/rgb-rainbow-line-gif-16940502");
}