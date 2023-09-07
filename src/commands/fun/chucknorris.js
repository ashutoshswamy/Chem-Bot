const discord = require("discord.js");
const djokes = require("discord-jokes");

/**
 * @param {discord.Client} client
 * @param {discord.Message} message
 * @param {String[]} args
 */

module.exports.run = async (client, message, args) => {
  djokes.getRandomCNJoke(function (joke) {
    const chucknorrisEmbed = new discord.MessageEmbed()
      .setColor("BLURPLE")
      .setTitle(`Chuck Norris Joke for ${message.author.username}`)
      .setDescription(`**${joke}**`)
      .setTimestamp();

    message.reply({
      embeds: [chucknorrisEmbed],
    });
  });
};

module.exports.config = {
  name: "chucknorris",
  aliases: ["cnjoke", "chucknorrisjoke"],
};
