const discord = require("discord.js");

/**
 * @param {discord.Client} client
 * @param {discord.Message} message
 * @param {String[]} args
 */

module.exports.run = async (client, message, args) => {
  const bondName = args[0];

  const covalentBondEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("Covalent Bond")
    .setDescription(
      "Covalent Bond, in chemistry, the interatomic linkage that results from the sharing of an electron pair between two atoms. The binding arises from the electrostatic attraction of their nuclei for the same electrons. A covalent bond forms when the bonded atoms have a lower total energy than that of widely separated atoms."
    )
    .setFooter({
      text: "Data from Britannica",
    })
    .setTimestamp();

  const row1 = new discord.MessageActionRow().addComponents(
    new discord.MessageButton()
      .setLabel("More Info")
      .setEmoji("ℹ️")
      .setStyle("LINK")
      .setURL("https://www.britannica.com/science/covalent-bond")
  );

  const ionicBondEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("Ionic Bond")
    .setDescription(
      "Ionic Bond, also called Electrovalent Bond, type of linkage formed from the electrostatic attraction between oppositely charged ions in a chemical compound. Such a bond forms when the valence (outermost) electrons of one atom are transferred permanently to another atom. The atom that loses the electrons becomes a positively charged ion (cation), while the one that gains them becomes a negatively charged ion (anion)."
    )
    .setFooter({
      text: "Data from Britannica",
    })
    .setTimestamp();

  const row2 = new discord.MessageActionRow().addComponents(
    new discord.MessageButton()
      .setLabel("More Info")
      .setEmoji("ℹ️")
      .setStyle("LINK")
      .setURL("https://www.britannica.com/science/ionic-bond")
  );

  const metallicBondEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("Metallic Bond")
    .setDescription(
      "Metallic Bond, force that holds atoms together in a metallic substance. Such a solid consists of closely packed atoms. In most cases, the outermost electron shell of each of the metal atoms overlaps with a large number of neighbouring atoms. As a consequence, the valence electrons continually move from one atom to another and are not associated with any specific pair of atoms. In short, the valence electrons in metals, unlike those in covalently bonded substances, are nonlocalized, capable of wandering relatively freely throughout the entire crystal. The atoms that the electrons leave behind become positive ions, and the interaction between such ions and valence electrons gives rise to the cohesive or binding force that holds the metallic crystal together."
    )
    .setFooter({
      text: "Data from Britannica",
    })
    .setTimestamp();

  const row3 = new discord.MessageActionRow().addComponents(
    new discord.MessageButton()
      .setLabel("More Info")
      .setEmoji("ℹ️")
      .setStyle("LINK")
      .setURL("https://www.britannica.com/science/metallic-bond")
  );

  if (!bondName) {
    message.reply({
      content:
        "<:cross_mark:932144253709189170> | Please enter the name of the bond.",
    });
  } else if (bondName === "covalent".toLowerCase()) {
    message.reply({
      embeds: [covalentBondEmbed],
      components: [row1],
    });
  } else if (
    bondName === "ionic".toLowerCase() ||
    bondName === "electrovalent".toLowerCase()
  ) {
    message.reply({
      embeds: [ionicBondEmbed],
      components: [row2],
    });
  } else if (bondName === "metallic".toLowerCase()) {
    message.reply({
      embeds: [metallicBondEmbed],
      components: [row3],
    });
  } else {
    message.reply({
      content:
        "<:cross_mark:932144253709189170> | Invalid bond name. Valid bond names are - `covalent, ionic and metallic`.",
    });
  }
};

module.exports.config = {
  name: "bondinfo",
  aliases: ["chemicalbondinfo"],
};
