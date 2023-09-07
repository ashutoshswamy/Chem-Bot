const discord = require("discord.js");

/**
 * @param {discord.Client} client
 * @param {discord.Message} message
 * @param {String[]} args
 */

module.exports.run = async (client, message, args) => {
  const topic = args[0];

  const helpEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setThumbnail(
      client.user.displayAvatarURL({
        dynamic: true,
      })
    )
    .setTitle("Help Interface for Chem Bot")
    .setDescription(
      "These are all the help modules available for Chem Bot. If you want detailed info about any command type **!help [command-name]**"
    )
    .addField("Chemistry", "`!help chemistry`", true)
    .addField("Moderation", "`!help moderation`", true)
    .addField("Fun", "`!help fun`", true)
    .addField("Utility", "`!help utility`", true)
    .setFooter({
      text: "Use ! prefix before every command",
    })
    .setTimestamp();

  const chemistryEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("Chemistry commands")
    .setDescription(
      "`chemistry` - This command gives a brief info about chemistry\n`atom` - This command gives a brief info about an atom\n`molecule` - This command gives a brief info about a molecule\n`ion` - This command gives a brief info about an ion\n`elementinfo` - This command gives a brief info about an particular element\n`bondinfo` - This command gives a brief info about an particular chemical bond\n`periodictable` - This command shows a periodic table"
    )
    .setFooter({
      text: "Use ! prefix before every command",
    })
    .setTimestamp();

  const moderationEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("Moderation commands")
    .setDescription(
      "`kick` - This command is for kicking a user from the server\n`ban` - This command is for permanantly banning a user from the server\n`softban` - This command is for banning a user from the server for a particular number of days\n`mute` - This command is used for muting a user\n`clear` - This command is used for deleting messages in a channel"
    )
    .setFooter({
      text: "Use ! prefix before every command",
    })
    .setTimestamp();

  const funEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("Fun commands")
    .setDescription(
      "`meme` - This command shows a meme\n`dadjoke` - This command shows a dadjoke\n`chucknorris` - This command shows a chuck norris joke"
    )
    .setFooter({
      text: "Use ! prefix before every command",
    })
    .setTimestamp();

  const utilityEmbed = new discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("Utility commands")
    .setDescription(
      "`info` - This command gives a basic info about me\n`ping` - This command shows the uptime and latency of the bot\n`invite` -  This command gives a link to invite me to your Discord server\n`help` - This command shows the help module"
    )
    .setFooter({
      text: "Use ! prefix before every command",
    })
    .setTimestamp();

  if (!topic || topic.toLowerCase() === "modules") {
    message.reply({
      embeds: [helpEmbed],
    });
  } else if (topic.toLowerCase() === "chemistry") {
    message.reply({
      embeds: [chemistryEmbed],
    });
  } else if (topic.toLowerCase() === "moderation") {
    message.reply({
      embeds: [moderationEmbed],
    });
  } else if (topic.toLowerCase() === "fun") {
    message.reply({
      embeds: [funEmbed],
    });
  } else if (topic.toLowerCase() === "utility") {
    message.reply({
      embeds: [utilityEmbed],
    });
  } else {
    message.reply({
      content: "Please enter a valid help module name.",
    });
  }
};

module.exports.config = {
  name: "help",
  aliases: ["commands", "commandshelp"],
};
