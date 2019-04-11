const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const faker = require('faker');
let prefix = config.prefix;

client.on("message", (message) => {

    if (!message.content.startsWith(prefix)) return;
    if (message.author.bot) return;

    if (message.content.startsWith(prefix + "hola")) {
        return message.channel.send("Que diseh su pollita");
    }

    if (message.content.startsWith(prefix + "adios")) {
        return message.channel.send("Po llevate esta 8==D");
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
            let got;
            switch (random) {
                case 0:
                    got = "Targarien";
                    break;
                case 1:
                    got = "Lannister";
                    break;
                case 2:
                    got = "Stark";
                    break;
                case 3:
                    got = "Baratheon";
                    break;
            }
            return message.member.setNickname(randomName.substr(0, randomName.indexOf(' ')) + " " + got);
        }
    }

    if (message.content.startsWith(prefix + "hp")) {
        if (letraNombre = null) {
            return message.channel.send("No hay nombres en nuestra base de datos que empiecen por esa letra, por favor cambieselo o pongase otra letra");
        } else {
            randomName = faker.name.findName();
            let random = Math.floor(Math.random() * Math.floor(4));
            let hp;
            switch (random) {
                case 0:
                    hp = "Griffyndor";
                    break;
                case 1:
                    hp = "Slytherin";
                    break;
                case 2:
                    hp = "Hufflepuff";
                    break;
                case 3:
                    hp = "Ravenclaw";
                    break;
            }
            return message.member.setNickname(randomName.substr(0, randomName.indexOf(' ')) + " " + hp);
        }
    }

    if (message.content.startsWith(prefix + "help")) {
        return message.channel.send("Lista de comandos:" +
            "\n !help: Para volver a abrir este listado" +
            "\n !hola: Saludas al bot y este te saluda" +
            "\n !adios: Te despides del bot y este te despide" +
            "\n !renombrar: El bot te cambia el nombre y apellidos por uno aleatorio" +
            "\n !got: El bot te cambia el nombre por uno aleatorio y te asigna una casa principal de Juego de Tronos" +
            "\n !hp: El bot te cambia el nombre por uno aleatorio y te asigna una casa de Harry Potter" +
            "\n !reportes: Si el bot te fala escribe este comando seguido de un espacio y tu mensaje para poder mejorarlo");
    }
    console.log(message.author.lastMessage.content);


    if (message.content.startsWith(prefix + "reportes" + "")) {
        message.member.setNickname("Gilipollah de mierda");
        return message.channel.send("Tu eres mongolo, que queja tiene tu de miii!! Te cojo y te revientooo," +
            "\n  procura que no te vea el coche que te lo quemo contotuputamadre yaa. Ji no? po te cambio el nombre so tonto");
    }

    if (message.content.startsWith(prefix)) {
        message.channel.send("Le kiere mete un sufijo o no poneh el prefijo solo?! O me via tene que cagantotusmuerto");
    }

});

client.login(config.token);