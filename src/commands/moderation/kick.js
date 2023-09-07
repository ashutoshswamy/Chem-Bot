const discord = require("discord.js");

/**
 * @param {discord.Client} client
 * @param {discord.Message} message
 * @param {String[]} args
 */

module.exports.run = async (client, message, args) => {
  const permission = message.member.permissions.has("KICK_MEMBERS");
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
        "<:cross_mark:932144253709189170> | Please mention a user to kick.",
    });
  } else if (!user.kickable) {
    message.reply({
      content: "<:cross_mark:932144253709189170> | You can't kick this user.",
    });
  } else {
    user.kick(reason).then(() => {
      const kickEmbed = new discord.MessageEmbed()
        .setColor("BLURPLE")
        .setTitle("Kicked a user")
        .setDescription(
          `<:Arrow:964215679387566151> User kicked - ${user}\n<:Arrow:964215679387566151> Reason for kick - **${reason}**`
        )
        .setFooter({
          text: `Kicked by ${message.author.tag}`,
        })
        .setTimestamp();

      message.reply({
        embeds: [kickEmbed],
      });
    });
  }
};

module.exports.config = {
  name: "kick",
  aliases: [],
};
