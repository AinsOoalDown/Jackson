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
        aliases: Aliases,
        cooldown: Cooldown,
        
        run: async(client, message, args, command) => {
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

imageTemplate("fourk", "Random fourk images", "fourk <number>", ["nsfw"], true, { type: "map", time: 0 }, ["4k"], nsfw.fourk);
/*
module.exports = {
    name: "fourk",
    description: "Random fourk images",
    usage: "fourk <number>",
    groups: ["nsfw"],
    DM: true,
    cooldown: { type: "map", time: 0 },
    aliases: ["4k"],
    run: await imageTemplatee(),
    }
*/