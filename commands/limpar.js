const Discord = require("discord.js");

exports.run = async (client, message, args) => {
  message.delete()
  if (!message.member.permissions.has("MANAGE_MESSAGES"))
    return message.channel.send(
      `${message.author} Cara você não pode apagar mensagens no chat 😂, falta você ter a permissão de Gerenciar **Mensagens** para usar esse comando`
    );
  const deleteCount = parseInt(args[0], 10);
  if (!deleteCount || deleteCount < 1 || deleteCount > 99)
    return message.channel.send(
      `${message.author} forneça um número de mensagens para serem excluídas`
    );

  const fetched = await message.channel.messages.fetch({
    limit: deleteCount + 1
  });
  message.channel.bulkDelete(fetched);
  message.channel
    .send(`${args[0]} mensagens foram limpas nesse chat!`).then(msg => msg.delete({timeout: 5000}))
    .catch(error =>
      console.log(`Não foi possível deletar mensagens devido a: ${error}`)
    );
};