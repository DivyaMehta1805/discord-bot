require('dotenv').config();
console.log(process.env.DISCORDJS_BOTT_TOKEN);
const { Client }= require('discord.js');
const client = new Client();
const prefix="$";

client.login(process.env.DISCORDJS_BOTT_TOKEN);
client.on('message',(message)=>{
    if(message.author.bot)
    return;
    if(message.content=='hello')
    {
        message.channel.send('welcome here');
    }
    if(message.content=='bye')
    {
        message.channel.send('I would miss you');
    }
    if(message.content.startsWith(prefix))
    {
        const [cmdnme,...args]=message.content
        .substring(prefix.length)
        .trim()
        .split(/\s+/);
        if(cmdnme=='kick')
        {
            message.channel.send("user kicked");
        }
    }
})
