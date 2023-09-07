const discord = require("discord.js");
const ms = require("ms");

/**
 * @param {discord.Client} client
 * @param {discord.Message} message
 * @param {String[]} args
 */

module.exports.run = async (client, message, args) => {
  const permission = message.member.permissions.has("MUTE_MEMBERS");
  const user = message.mentions.members.first();
  const muteDuration = args[1];
  const reason = args.slice(2).join(" ") || "No reason provided";

  if (!permission) {
    message.reply({
      content:
        "<:cross_mark:932144253709189170> | You don't have the permissions to use this command.",
    });
  } else if (!user) {
    message.reply({
      content:
        "<:cross_mark:932144253709189170> | Please mention a user to mute.",
    });
  } else if (!muteDuration) {
    message.reply({
      content:
        "<:cross_mark:932144253709189170> | Please enter the mute duration.",
    });
  } else {
    user.timeout(ms(muteDuration), reason).then(() => {
      const muteEmbed = new discord.MessageEmbed()
        .setColor("BLURPLE")
        .setTitle("Muted a user")
        .setDescription(
          `<:Arrow:964215679387566151> User muted - ${user}\n<:Arrow:964215679387566151> Mute duration - **${ms(
            muteDuration
          )}ms**\n<:Arrow:964215679387566151> Reason for mute - **${reason}**`
        )
        .setFooter({
          text: `Muted by ${message.author.tag}`,
        })
        .setTimestamp();

      message.reply({
        embeds: [muteEmbed],
      });
    });
  }
};

module.exports.config = {
  name: "mute",
  aliases: ["timeout"],
};
