const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete()
  var string = args.join(" ");
  var colors = [
    {
      name: "「❤」Vermelho",
      id: "830543838678351922"
    },
    {
      name: "「💚」Verde",
      id: "830543831199514644"
    },
    {
      name: "「💙」Azul",
      id: "830543855857827862"
    },
    {
      name: "「💛」Amarelo",
      id: "830543851613323294"
    }
  ];
  var names = colors.map(function(item) {
    return item["name"].toLowerCase();
  });
  var ids = colors.map(function(item) {
    return item["id"];
  });

  var role = message.guild.roles.cache.find(r => r.name.toLowerCase() === string.toLowerCase());

  if (!args[0]) {
      return await message.channel.send(`${message.author} escreva o nome da cor após o comando. Cores disponiveis: 「💚」Verde, 「❤」Vermelho,「💙」Azul e 「💛」Amarelo , so copie e cole apos o rt-cor . E para remover digite rt-cor remover`);
  } else if (args[0].toLowerCase()  === "remover") {
      await message.member.roles.remove(ids);
      return await message.channel.send(`${message.author} suas cores foram resetadas ao padrão.`);
  } else if (!names.includes(string.toLowerCase()) || !role) {
    return message.channel.send(
      `${message.author} não existe cores com o nome ${string} neste servidor.`
    );
  } else {
    try {
      await message.member.roles.remove(ids);
      await message.member.roles.add(role);
      return await message.channel.send(`${message.author} boa agora você ganhou a cor ${string}`);
    } catch (err) {
      console.error("Erro: " + err);
    }
  }
};