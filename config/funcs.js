const database = require("quick.db");
const got = require('got');
const config = require('./config.js');
const { MessageEmbed } = require("discord.js");
const fetch = require('node-fetch');
const NSFW = require("discord-nsfw");
const nsfw = new NSFW();

// choose, if in args use args
exports.choose = async (args, options, not) => {
    let choice = options[Math.floor(Math.random() * options.length)];
    if (!args)
        return choice;
    for (let option of options) {
        if (args.find(arg => option == arg && not !== arg))
            choice = option;
    }
    return choice;
}

//Image sending template
exports.imageTemplate = async (Name, Description, Usage, Groups, dm, Cooldown, Aliases, Image) => {
    module.exports = {
        name: Name,
        description: Description,
        usage: Usage,
        groups: Groups,
        DM: dm,
        cooldown: Cooldown,
        aliases: Aliases,
        run: async(message, args) => {
            asdfasdf = [];
            if (!args[0]) { number = 1; } else { number = args[0]; }
            for (var i = 0; i < number; i++) {
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
    }
}
exports.imageTemplatee = async(message, command, args) =>{
    asdfasdf = [];
     if (!args[0]) { o = 1; } else { o = args[0]; }
     for (var i = 0; i < o; i++) {
         const embed = new MessageEmbed()
             .setTitle(command.name.charAt(0).toUpperCase() + command.name.slice(1))
             .setColor(0x4B0082)
             .setImage(await nsfw.fourk());
         asdfasdf.push(embed);

     }
     console.log(command.name)
     var reee;
     for (ii = 0; ii < i; ii++) {
         reee += message.reply(asdfasdf[ii]);
     }
     return reee;
}
// add user to guild database with starting jelly beans of 0
exports.createAccount = async (message) => {
    let user = message.mentions.users.first() || message.author;
    await database.set(`${message.guild.id}.${user.id}`, {"jellybeans": 0});
    return await database.get(`${message.guild.id}.${user.id}`);
}

// get last X messages
exports.fetchMessages = async function (channel, amount) {
    let messagesFormatted = "";
    await channel.messages.fetch({ limit: amount }).then(messages => {
        messagesFormatted = Array.from(messages.values());
    });
    return messagesFormatted;
}

// Reddit
exports.getRedditPost = async (subReddits) => {
    try {
        const random = subReddits[Math.floor(Math.random() * subReddits.length)];
        let res = "";
        let response = await got(`https://www.reddit.com/r/${random}/random/.json`)
        const [list] = JSON.parse(response.body);
        const [post] = list.data.children;
        return post.data
    } catch (error) {
        return
    }
}
