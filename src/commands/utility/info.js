const discord = require("discord.js");

/**
 * @param {discord.Client} client
 * @param {discord.Message} message
 * @param {String[]} args
 */

module.exports.run = async (client, message, args) => {
  const infoEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setThumbnail(
      client.user.displayAvatarURL({
        dynamic: true,
      })
    )
    .setTitle("Chem Bot Info")
    .setDescription("Here's some basic information about myself")
    .addField("My Prefix", "!", false)
    .addField("My Usertag", `${client.user.tag}`, false)
    .addField("My Developer's Usertag", "<@787019465568419871>", false)
    .addField("I was developed on", "December 13th 2020", false)
    .setFooter({
      text: "Invite me to your server by using the !invite command",
    })
    .setTimestamp();

  message.reply({
    embeds: [infoEmbed],
  });
};

module.exports.config = {
  name: "info",
  aliases: ["botinfo"],
};
