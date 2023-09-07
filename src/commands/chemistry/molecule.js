const discord = require("discord.js");

/**
 * @param {discord.Client} client
 * @param {discord.Message} message
 * @param {String[]} args
 */

module.exports.run = async (client, message, args) => {
  const moleculeEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("Molecule")
    .setDescription(
      "Molecule, a group of two or more atoms that form the smallest identifiable unit into which a pure substance can be divided and still retain the composition and chemical properties of that substance."
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
      .setURL("https://www.britannica.com/science/molecule")
  );

  message.reply({
    embeds: [moleculeEmbed],
    components: [row],
  });
};

module.exports.config = {
  name: "molecule",
  aliases: [],
};
