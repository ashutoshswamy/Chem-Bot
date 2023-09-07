const discord = require("discord.js");
const axios = require("axios");

/**
 * @param {discord.Client} client
 * @param {discord.Message} message
 * @param {String[]} args
 */

module.exports.run = async (client, message, args) => {
  const url = "https://meme-api.herokuapp.com/gimme";

  axios.default.get(url).then((res) => {
    const memeEmbed = new discord.MessageEmbed()
      .setColor("BLURPLE")
      .setTitle(res.data.title)
      .addField("Author", `${res.data.author}`, true)
      .addField("Likes", `${res.data.ups} :thumbsup:`, true)
      .setImage(res.data.url)
      .setTimestamp();

    const row = new discord.MessageActionRow().addComponents(
      new discord.MessageButton()
        .setLabel("Post Link")
        .setStyle("LINK")
        .setURL(res.data.postLink)
    );

    message.reply({
      embeds: [memeEmbed],
      components: [row],
    });
  });
};

module.exports.config = {
  name: "meme",
  aliases: ["maymay"],
};
