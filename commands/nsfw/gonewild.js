const { MessageEmbed } = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    name: "gonewild",
    description: "Random image of people gonewild",
    usage: "gonewild <number>",
    groups: ["nsfw"],
    DM: true,
    aliases: ["gone wild", "gone_wild", "gwild"],
    cooldown: { type: "map", time: 0 },

    run: async (client, message, args, command) => {
        asdfasdf = [];
        if (!args[0]) { o = 1; } else { o = args[0]; }
        for (let i = 0; i < o; i++) {
            const embed = new MessageEmbed()
                .setTitle("gonewild".charAt(0).toUpperCase() + "gonewild".slice(1))
                .setColor(0x4B0082)
                .setImage(await nsfw.gonewild());
            asdfasdf.push(embed);
        }
        let reee;
         for (i = 0; i < asdfasdf.lenth; i++) {
            reee += message.reply(asdfasdf[i]);
        }
        return reee;
    }
};