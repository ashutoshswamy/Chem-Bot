const discord = require("discord.js");

/**
 * @param {discord.Client} client
 * @param {discord.Message} message
 * @param {String[]} args
 */

module.exports.run = async (client, message, args) => {
  const row = new discord.MessageActionRow().addComponents(
    new discord.MessageButton()
      .setLabel("Invite Me")
      .setEmoji("😊")
      .setStyle("LINK")
      .setURL("https://bit.ly/3JK91s3")
  );

  message.reply({
    content: "Click the below button to Invite Me to your server!",
    components: [row],
  });
};

module.exports.config = {
  name: "invite",
  aliases: ["botinvite"],
};
