const discord = require("discord.js");
const ultrax = require("ultrax");

/**
 * @param {discord.Client} client
 * @param {discord.Message} message
 * @param {String[]} args
 */

module.exports.run = async (client, message, args) => {
  const elementName = args[0];

  if (!elementName) {
    message.reply({
      content:
        "<:cross_mark:932144253709189170> | Please enter the element name.",
    });
  } else {
    let query = elementName;

    const reponse = new ultrax.Wikipedia({
      query: query,
      color: "BLURPLE",
      message: message,
    });

    reponse.fetch();
  }
};

module.exports.config = {
  name: "elementinfo",
  aliases: ["einfo"],
};
