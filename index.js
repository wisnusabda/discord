const Discord = require('discord.js')
const bot = new Discord.Client;

const token = 'NzkxNjg5MTM0MjM3ODEwNzE5.X-Sz9g.HSmzCb_6ilfcSFdIY496dUNqWl0';
var PREFIX = '!';

bot.on('ready', () => {
    console.log('Bot Online')
})

bot.on('message', message => {
    if (message.content === "!helpbot") {
        message.channel.send({embed: {
            title: "Embed",
            color: 10181046,
            description: "!helpbot h3h3",
           fields: [{
               name : "Command #1",
               value : "You can put all the *usual* **__Markdown__** inside of them."
           }]
          }});
    };
});
  

bot.login(token);

