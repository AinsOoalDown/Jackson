const { MessageEmbed } = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    name: "hentaiass",
    description: "Random image of a hentai ass",
    usage: "hentaiass <number>",
    groups: ["nsfw"],
    DM: true,
    cooldown: { type: "map", time: 0 },
    aliases: ["hass"],
    run: async (client, message, args) => {
        asdfasdf = [];
        if (!args[0]) { o = 1; } else { o = args[0]; }
        for (var i = 0; i < o; i++) {
            const embed = new MessageEmbed()
                .setTitle("hentaiass".charAt(0).toUpperCase() + "hentaiass".slice(1))
                .setColor(0x4B0082)
                .setImage(await nsfw.hentaiass());
            asdfasdf.push(embed);
        }
        let reee;
        for (ii = 0; ii < i; ii++) {
            reee += message.reply(asdfasdf[ii]);
        }
        return reee;
    }
};