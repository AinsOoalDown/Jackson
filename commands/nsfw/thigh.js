const { MessageEmbed } = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    name: "thigh",
    description: "Random image of thighs",
    usage: "thigh <number>",
    groups: ["nsfw"],
    DM: true,
    cooldown: { type: "map", time: 0 },
    aliases: ["legs", "thighs"],
    run: async (client, message, args) => {
        asdfasdf = [];
        if (!args[0]) { o = 1; } else { o = args[0]; }
        for (var i = 0; i < o; i++) {
            const embed = new MessageEmbed()
                .setTitle("thigh".charAt(0).toUpperCase() + "thigh".slice(1))
                .setColor(0x4B0082)
                .setImage(await nsfw.thigh());
            asdfasdf.push(embed);
        }
        let reee;
        for (ii = 0; ii < i; ii++) {
            reee += message.reply(asdfasdf[ii]);
        }
        return reee;
    }
};