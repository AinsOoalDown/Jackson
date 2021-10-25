const { MessageEmbed } = require("discord.js");
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

module.exports = {
    name: "nekotits",
    description: "Random image of nekotits",
    usage: "nekotits <number>",
    groups: ["nsfw"],
    DM: true,
    cooldown: { type: "map", time: 0 },
    aliases: ["nsfw"],
    run: async (client, message, args) => {
        asdfasdf = [];
        if (!args[0]) { o = 1; } else { o = args[0]; }
        for (let i = 0; i < o; i++) {
            const embed = new MessageEmbed()
                .setTitle("nekotits".charAt(0).toUpperCase() + "nekotits".slice(1))
                .setColor(0x4B0082)
                .setImage(await nsfw.nekotits());
            asdfasdf.push(embed);
        }
        let reee;
         for (i = 0; i < asdfasdf.lenth; i++) {
            reee += message.reply(asdfasdf[i]);
        }
        return reee;
    }
};