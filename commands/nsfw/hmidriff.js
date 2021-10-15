const { MessageEmbed } = require("discord.js");
const fetch = require('node-fetch');
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

function imageTemplate(Name, Description, Usage, Groups, dm, Cooldown, Aliases, Image) {
    module.exports = {
        name: Name,
        description: Description,
        usage: Usage,
        groups: Groups,
        DM: dm,
        cooldown: Cooldown,
        aliases: Aliases,
        run: async(client, message, args) => {
            asdfasdf = [];
            if (!args[0]) { o = 1; } else { o = args[0]; }
            for (var i = 0; i < o; i++) {
                const embed = new MessageEmbed()
                    .setTitle(Name.charAt(0).toUpperCase() + Name.slice(1))
                    .setColor(0x4B0082)
                    .setImage(await Image());
                asdfasdf.push(embed);
 

            }
            var reee;
            for (ii = 0; ii < i; ii++) {
                reee += message.reply(asdfasdf[ii]);
            }
            return reee;
        }
    };
}
imageTemplate("hmidriff", "Random image of a hmidriff", "hmidriff <number>", ["nsfw"], true, { type: "map", time: 0 }, ["hentaimidriff"], nsfw.hentaimidriff);