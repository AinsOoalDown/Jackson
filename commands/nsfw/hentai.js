const { MessageEmbed } = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    name: "hentai",
    description: "Random image of hentai",
    usage: "hentai <number>",
    groups: ["nsfw"],
    DM: true,
    cooldown: { type: "map", time: 0 },
    aliases: [""],
    run: async (client, message, args) => {
        asdfasdf = [];
        if (!args[0]) { o = 1; } else { o = args[0]; }
        for (var i = 0; i < o; i++) {
            const embed = new MessageEmbed()
                .setTitle("hentai".charAt(0).toUpperCase() + "hentai".slice(1))
                .setColor(0x4B0082)
                .setImage(await nsfw.hentai());
            asdfasdf.push(embed);
        }
        let reee;
        for (ii = 0; ii < i; ii++) {
            reee += message.reply(asdfasdf[ii]);
        }
        return reee;
    }
};