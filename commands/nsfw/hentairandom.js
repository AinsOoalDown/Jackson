const { MessageEmbed } = require("discord.js");
const fetch = require('node-fetch');
const NSFW = require("discord-nsfw");
const { choose } = require('../../config/funcs.js');
const nsfw = new NSFW();

module.exports = {
    name: "hentairandom",
    description: "Gets hentai image",
    usage: "hentai [ass|thigh|midriff]",
    groups: ["nsfw"],
    DM: true,
    cooldown: { type: "map", time: 5 },
    aliases: ["rhen", "rhentai", "randomh", "randomhentai"],
    run: async(client, message, args) => {
        const embed = new MessageEmbed()
            .setTitle('Random Hentai')
            .setColor(0x4B0082);

        // get hentai kind
        let hentai = await choose(args, ["ass", "thigh", "midriff"], null);
        embed.setFooter(`Hentai Type: ${hentai}`);

        // get the hentai
        let pic = "";
        if (hentai == "ass") {
            pic = await nsfw.hentaiass();
        } else if (hentai == "thigh") {
            pic = await nsfw.hentaithigh();
        } else if (hentai == "midriff") {
            pic = await nsfw.hmidriff();
        }
        embed.setImage(pic);
        return message.reply(embed);
    }
};