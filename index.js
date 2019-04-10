const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const faker = require('faker');
let prefix = config.prefix;

client.on("ready", () => {
    console.log("Estoy listo!");
});

client.on("message", (message) => {

    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;

    if (message.content.startsWith(prefix + "hola")) {
        return message.channel.send("Klk manin");
    }

    if (message.content.startsWith(prefix + "adios")) {
        return message.channel.send("Nos vemuo Kbsa");
    }

    if (message.content.startsWith(prefix + "changeName")) {
        let randomName = faker.name.findName();
        return message.member.setNickname(randomName);
    }

    if (message.content.startsWith(prefix)) {
        message.channel.send("Le kiere mete un sufijo o no poneh el prefijo solo?! O me via tene que cagantotusmuerto");
    }

});

client.login(config.token);