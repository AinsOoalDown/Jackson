const { MessageEmbed } = require("discord.js");
const fetch = require('node-fetch');
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();


module.exports = {
    name: "fourk",
    description: "Random fourk images",
    usage: "fourk <number>",
    groups: ["nsfw"],
    DM: true,
    aliases: Aliases,
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
        var reee;
        for (ii = 0; ii < i; ii++) {
            reee += message.reply(asdfasdf[ii]);
        }
        return reee;
    }
};