const Discord = require("discord.js")

exports.run = async (client, message, args) => {
  message.delete({timeout: 6000})
  var array1 = ["cara", "coroa"];

  var rand = Math.floor(Math.random() * array1.length);

  if (!args[0] || (args[0].toLowerCase() !== "cara" && args[0].toLowerCase() !== "coroa")) {
    message.channel.send(`${message.author} Coloque ` + "`cara`" + " ou " + "`coroa`" + " na frente do comando.");
  } 
else if (args[0].toLowerCase() == array1[rand]) {
    message.channel.send(`${message.author} Deu ` + array1[rand] + "." + " Boa cara, você ganhou dessa vez 😀");
  } 
else if (args[0].toLowerCase() != array1[rand]) {
    message.channel.send(`${message.author} Deu ` + array1[rand] + "." + " Aff cara, você perdeu dessa vez 😔"
    );
  }
};