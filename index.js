const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
token: process.env.Token,
prefix: process.env.Prefix
})

//Events
bot.onMessage()

//Command Example (ping)
bot.command({
name: "ping",
code: `Pong! $pingms`
})

//Ready Event
bot.readyCommand({
    channel: "",
    code: `$log[Ready on $userTag[$clientID]]`
})

bot.command({
    name: 'help',
    code: `Hello! This bot will be temporarily be **SHUTDOWN**, but this doesn't mean it's permanent. I just can't handle the pressure of my two bots because i'm the only one maintaining it. This bot will be continued after my study. You can join our [support server](https://discord.gg/cgjW7Xr2ns) for follow-ups and questions. Thank You for following me on this journey!`
})

