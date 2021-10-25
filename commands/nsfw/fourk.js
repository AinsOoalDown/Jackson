const { MessageEmbed } = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    name: "fourk",
    description: "Random fourk images",
    usage: "fourk <number>",
    groups: ["nsfw"],
    DM: true,
    aliases: ["4k"],
    cooldown: { type: "map", time: 0 },

    run: async (client, message, args, command) => {
        asdfasdf = [];
        if (!args[0]) { o = 1; } else { o = args[0]; }
        for (var i = 0; i < o; i++) {
            const embed = new MessageEmbed()
                .setTitle("fourk".charAt(0).toUpperCase() + "fourk".slice(1))
                .setColor(0x4B0082)
                .setImage(await nsfw.fourk());
            asdfasdf.push(embed);

        }
        let reee;
        for (ii = 0; ii < i; ii++) {
            reee += message.reply(asdfasdf[ii]);
        }
        return reee;
    }
};