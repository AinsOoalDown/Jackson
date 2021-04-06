const database = require("quick.db");
const config = require('../config/config.js');
const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = async (client, message) => {
    // user isn't bot
    if (message.author.bot) return;

    let args = [];
    let clientMention = `<@!${client.user.id}>`;
    if (message.content == (clientMention))  return await client.commands.get("help").run(client, message, args);

    // prefix
    let prefix;
    if (message.guild) prefix = await database.get(`${message.guild.id}.prefix`);
    if (!prefix) {
        prefix = client.config.prefix
        if (message.guild) await database.set(`${message.guild.id}.prefix`, client.config.prefix);
    }
    client.prefix = prefix;
    if (message.content.startsWith(clientMention)) prefix = clientMention;
    if (!message.content.startsWith(prefix)) return;

    // setup args
    args = message.content.slice(prefix.length).trim().split(/ +/g);
    const cmd = args.shift().toLowerCase(); 
    
    // Jelly bean data :3
    if (message.guild) client.jellybean = await database.get(`${message.guild.id}.jellybeandata`);


    // does the command exsist?
    let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));
    if (!command) return message.reply("Command not found");
        
    // Cool down, by user, not guild sice.... it makes sense);
    if (command.cooldown.time !== 0){
        // get the commands the user has cooldown on
        let commandsWithCooldown = client.cooldowns.get(`${message.author.id}_cooldowns`);
        if (!commandsWithCooldown) {
            client.cooldowns.set(`${message.author.id}_cooldowns`, []);
            commandsWithCooldown = [];
        }
        // the command name is there, so tell user they're on cooldown
        if (commandsWithCooldown.indexOf(command.name) > -1) return client.err(message, "Cooldown", `This command has a cooldown of ${command.cooldown.time} seconds`);

        // add the command to their cooldown list otherwise
        if (command.cooldown.type == "map"){
            commandsWithCooldown.push(command.name)
            client.cooldowns.set(`${message.author.id}_cooldowns`, commandsWithCooldown);
            // delete after cooldown is up 
                setTimeout(async function (){
                    let removed = commandsWithCooldown.filter(remove => remove !== command.name);
                    client.cooldowns.set(`${message.author.id}_cooldowns`, removed);
                }, (1000 * command.cooldown.time));
            // mongoDB cooldown, works even after restart
        } else {
            return
        }
    }

    try {

        // errors and overrides, the running the command
        if (command.DM === false && !message.guild) return client.err(message, "DMs", "This command cannot be ran in DMs");
        if (command.groups[0] == "nsfw" && message.guild === null) {
            if (!message.channel.nsfw && message.channel.type != "dm") return client.err(message, "NSFW", "This is not a NSFW channel");
        }
        // owner only
        if (command.groups[0] == "owner" && message.author.id !== client.config.userID) return client.err(message, "Crenshaw Only -lol no-", "This command can only be run by the bot hoster");
        if (command.groups[0] == "owner" && message.author.id == client.config.userID) {
            console.log(client.config.userID);
            console.log(message.author.id);
        }

        // no overrides or nsfw filters stopped the command, run normally
        command.run(client, message, args, command);
        await message.channel.stopTyping(true);
        // checks if the user sent the command in DMs and logs it accordingly
        if (message.channel.type!="dm"){
            return console.log(`Ran ${command.name} \[${args.join(" ")}\]- ${message.author.username}#${message.author.discriminator} \(${message.author.id}\) (guild - ${message.guild.name})`);
        }
        if(message.channel.type=="dm"){
            return console.log(`Ran ${command.name} \[${args.join(" ")}\]- ${message.author.username}#${message.author.discriminator} \(${message.author.id}\) (guild - ${message.channel.type})`);
        }
    } catch (err) {
        console.log(err);
    }
}