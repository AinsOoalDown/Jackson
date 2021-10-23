const { MessageEmbed } = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    name: "ass",
    description: "Random image of ass",
    usage: "ass <number>",
    groups: ["nsfw"],
    DM: true,
    cooldown: { type: "map", time: 0 },
    aliases: ["butt", "booty"],
    run: async (client, message, args) => {
        asdfasdf = [];
        if (!args[0]) { o = 1; } else { o = args[0]; }
        for (var i = 0; i < o; i++) {
            let embed = new MessageEmbed()
                .setTitle('ass')
                .setColor(0x4B0082)
                .setImage(await nsfw.ass());
            asdfasdf.push(embed);
        }
        let reee;
        for (ii = 0; ii < i; ii++) {
            reee += message.reply(asdfasdf[ii]);
        }
        return reee;

    }
};