const discord = require("discord.js");

/**
 * @param {discord.Client} client
 * @param {discord.Message} message
 * @param {String[]} args
 */

module.exports.run = async (client, message, args) => {
  const permission = message.member.permissions.has("BAN_MEMBERS");
  const user = message.mentions.members.first();
  const reason = args.slice(1).join(" ") || "No reason provided";

  if (!permission) {
    message.reply({
      content:
        "<:cross_mark:932144253709189170> | You don't have the permissions to use this command.",
    });
  } else if (!user) {
    message.reply({
      content:
        "<:cross_mark:932144253709189170> | Please mention a user to ban.",
    });
  } else if (!user.bannable) {
    message.reply({
      content: "<:cross_mark:932144253709189170> | You can't ban this user.",
    });
  } else {
    user
      .ban({
        reason: reason,
      })
      .then(() => {
        const banEmbed = new discord.MessageEmbed()
          .setColor("BLURPLE")
          .setTitle("Banned a user")
          .setDescription(
            `<:Arrow:964215679387566151> User banned - ${user}\n<:Arrow:964215679387566151> Reason for ban - **${reason}**`
          )
          .setFooter({
            text: `Banned by ${message.author.tag}`,
          })
          .setTimestamp();

        message.reply({
          embeds: [banEmbed],
        });
      });
  }
};

module.exports.config = {
  name: "ban",
  aliases: [],
};
