const discord = require("discord.js");
const djokes = require("discord-jokes");

/**
 * @param {discord.Client} client
 * @param {discord.Message} message
 * @param {String[]} args
 */

module.exports.run = async (client, message, args) => {
  djokes.getRandomDadJoke(function (joke) {
    const dadjokeEmbed = new discord.MessageEmbed()
      .setColor("BLURPLE")
      .setTitle(`Dad Joke for ${message.author.username}`)
      .setDescription(`**${joke}**`)
      .setFooter({
        text: "Joke from a random dad",
      })
      .setTimestamp();

    message.reply({
      embeds: [dadjokeEmbed],
    });
  });
};

module.exports.config = {
  name: "dadjoke",
  aliases: ["djoke"],
};
