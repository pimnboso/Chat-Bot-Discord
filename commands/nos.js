const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  message.delete()
  return message.channel.send(`${message.author}` + "  `Rabiscos Tortos Podcast é um podcast que possui como anfitriões Paula e Pixel, é uma conversa descontraída sem tempo limite para acabar. Nós queremos conversar com diversos tipos de convidados, sendo elas com as ideias mais malucas, dando um foco especial em artistas independentes. Enquanto conversam Pixel estará fazendo uma arte sobre o episódio.\n" + "\nA conversa será postada semanalmente com a exclusividade de ser postada primeiro no YouTube e tendo a imagem depois da estreia é postado nos outros agregadores.`\nhttps://cdn.discordapp.com/attachments/830161122060927010/830161612220006430/icon-rabiscos-tortos-oficial.jpg");
}