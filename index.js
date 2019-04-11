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

    let condition;
    let conditionTwo;
    let randomName;
    if (message.content.startsWith(prefix + "renombrar")) {
        do {
            if (letraNombre = null) {
                condition = 0;
                conditionTwo = 0;
            } else {
                randomName = faker.name.findName();
                let letraNombreRandom = randomName.substr(0, 1);
                let letraNombre = message.author.username.substr(0, 1);
                if (letraNombre == letraNombreRandom && letraNombre != null && letraNombreRandom != null) {
                    condition = 0;
                } else {
                    condition = 1;
                }
            }
        } while (condition != 0) {
            if (conditionTwo == 0) {
                return message.channel.send("No hay nombres en nuestra base de datos que empiecen por esa letra, por favor cambieselo o pongase otra letra");
            } else {
                return message.member.setNickname(randomName);
            }
        }

    }

    if (message.content.startsWith(prefix + "got")) {
        if (letraNombre = null) {
            return message.channel.send("No hay nombres en nuestra base de datos que empiecen por esa letra, por favor cambieselo o pongase otra letra");
        } else {
            randomName = faker.name.findName();
            let random = Math.floor(Math.random() * Math.floor(4));
            let GoT;
            switch (random) {
                case 0:
                    GoT = "Targarien";
                    break;
                case 1:
                    GoT = "Lannister";
                    break;
                case 2:
                    GoT = "Stark";
                    break;
                case 3:
                    GoT = "Baratheon";
                    break;
            }
            return message.member.setNickname(randomName.substr(0,randomName.indexOf(' ')) + " " + GoT);
        }
    }

    if (message.content.startsWith(prefix + "help")) {
        return message.channel.send("Lista de comandos:" +
        "\n !hola: Saludas al bot y este te saluda" +
        "\n !adios: Te despides del bot y este te despide" +
        "\n !renombrar: El bot te cambia el nombre y apellidos por uno aleatorio" +
        "\n !got: El bot te cambia el nombre por un aleatorio y te asigna una casa principal de juego de tronos");
    }

    if (message.content.startsWith(prefix)) {
        message.channel.send("Le kiere mete un sufijo o no poneh el prefijo solo?! O me via tene que cagantotusmuerto");
    }

});

client.login(config.token);