const discord = require("discord.js");

/**
 * @param {discord.Client} client
 * @param {discord.Message} message
 * @param {String[]} args
 */

module.exports.run = async (client, message, args) => {
  const atomEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("Atom")
    .setDescription(
      "Atom, smallest unit into which matter can be divided without the release of electrically charged particles. It also is the smallest unit of matter that has the characteristic properties of a chemical element. As such, the atom is the basic building block of chemistry."
    )
    .setFooter({
      text: "Data from Britannica",
    })
    .setTimestamp();

  const row = new discord.MessageActionRow().addComponents(
    new discord.MessageButton()
      .setLabel("More Info")
      .setEmoji("ℹ️")
      .setStyle("LINK")
      .setURL("https://www.britannica.com/science/atom")
  );

  message.reply({
    embeds: [atomEmbed],
    components: [row],
  });
};

module.exports.config = {
  name: "atom",
  aliases: [],
};
