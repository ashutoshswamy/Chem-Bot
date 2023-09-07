const discord = require("discord.js");

/**
 * @param {discord.Client} client
 * @param {discord.Message} message
 * @param {String[]} args
 */

module.exports.run = async (client, message, args) => {
  const periodictableEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("Periodic Table")
    .setImage("https://i.imgur.com/jtj8GFg.png")
    .setTimestamp();

  message.reply({
    embeds: [periodictableEmbed],
  });
};

module.exports.config = {
  name: "periodictable",
  aliases: [],
};
