const discord = require("discord.js");

/**
 * @param {discord.Client} client
 * @param {discord.Message} message
 * @param {String[]} args
 */

module.exports.run = async (client, message, args) => {
  const ionEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("Ion")
    .setDescription(
      "Ion, any atom or group of atoms that bears one or more positive or negative electrical charges. Positively charged ions are called cations; negatively charged ions, anions. Ions are formed by the addition of electrons to, or the removal of electrons from, neutral atoms or molecules or other ions; by combination of ions with other particles; or by rupture of a covalent bond between two atoms in such a way that both of the electrons of the bond are left in association with one of the formerly bonded atoms."
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
      .setURL("https://www.britannica.com/science/ion-physics")
  );

  message.reply({
    embeds: [ionEmbed],
    components: [row],
  });
};

module.exports.config = {
  name: "ion",
  aliases: [],
};
