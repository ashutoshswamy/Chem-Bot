const discord = require("discord.js");

/**
 * @param {discord.Client} client
 * @param {discord.Message} message
 * @param {String[]} args
 */

module.exports.run = async (client, message, args) => {
  const chemistryEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("Chemistry")
    .setDescription(
      "Chemistry, the science that deals with the properties, composition, and structure of substances (defined as elements and compounds), the transformations they undergo, and the energy that is released or absorbed during these processes."
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
      .setURL("https://www.britannica.com/science/chemistry")
  );

  message.reply({
    embeds: [chemistryEmbed],
    components: [row],
  });
};

module.exports.config = {
  name: "chemistry",
  aliases: [],
};
