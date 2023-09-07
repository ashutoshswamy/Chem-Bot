const discord = require("discord.js");

/**
 * @param {discord.Client} client
 * @param {discord.Message} message
 * @param {String[]} args
 */

module.exports.run = async (client, message, args) => {
  const amount = args[0];

  if (!amount) {
    message.reply({
      content:
        "<:cross_mark:932144253709189170> | Please enter the amount of messages you want to delete.",
    });
  } else if (isNaN(amount)) {
    message.reply({
      content: "<:cross_mark:932144253709189170> | Amount should be a integer.",
    });
  } else if (amount <= 1) {
    message.reply({
      content: "<:cross_mark:932144253709189170> | Minimum amount is 2.",
    });
  } else if (amount >= 100) {
    message.reply({
      content: "<:cross_mark:932144253709189170> | Maximum amount is 99.",
    });
  } else {
    message.channel.bulkDelete(amount);
    const clearEmbed = new discord.MessageEmbed()
      .setColor("BLURPLE")
      .setDescription(`${message.author} has cleared **${amount}** messages`);

    message.channel.send({
      embeds: [clearEmbed],
    });
  }
};

module.exports.config = {
  name: "clear",
  aliases: ["deletemessages", "clearmessages"],
};
