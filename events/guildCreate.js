const { MessageEmbed } = require("discord.js")

exports.run = async (client, guild) => {
    let channel = client.channels.cache.get("818899863940366406");
    const embed = new MessageEmbed()
        .setColor(0x4B0082)
        .setTitle(`New Guild - ${guild.name}`);
    channel.send(embed);

    channel = guild.systemChannel;
    if(!channel) return;
    channel.send('Hello! my name is Jackson, my prefix is `jack`!\n-Crenshaw#1312');
}