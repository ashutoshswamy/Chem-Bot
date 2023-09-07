const discord = require("discord.js");
const ms = require("ms");

/**
 * @param {discord.Client} client
 * @param {discord.Message} message
 * @param {String[]} args
 */

module.exports.run = async (client, message, args) => {
  const pingEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setDescription(
      `<:Arrow:964215679387566151> Websocket - **${
        client.ws.ping
      }ms**\n<:Arrow:964215679387566151> Uptime - **${ms(client.uptime)}**`
    );

  message.reply({
    embeds: [pingEmbed],
  });
};

module.exports.config = {
  name: "ping",
  aliases: ["uptime"],
};
