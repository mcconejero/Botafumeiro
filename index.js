const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const faker = require('faker');
const dialogflow = require('dialogflow');

const projectId = 'newagent-604f6';

const sessionClient = new dialogflow.SessionsClient({
    keyFilename: './key.json'
});

function getIntent(text, client, member) {
    const sessionPath = sessionClient.sessionPath(projectId, client.id);

    const request = {
        session: sessionPath,
        queryInput: {
            text: {
                text,
                languageCode: 'es-ES',
            },
        },
    };    

    sessionClient.detectIntent(request, (err, response) => {
        if (err) {
            console.error(err);
        }
        let condition;
        let randomName;      
        if (response.queryResult.parameters.fields.entity_of_name.stringValue == "got") {
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
            return member.setNickname(randomName.substr(0, randomName.indexOf(' ')) + " " + got);
        } else if (response.queryResult.parameters.fields.entity_of_name.stringValue == "hp") {
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
            console.log(randomName);
            return member.setNickname(randomName.substr(0, randomName.indexOf(' ')) + " " + hp);
        } else {
            do {
                randomName = faker.name.findName();
                let letraNombreRandom = randomName.substr(0, 1);
                let letraNombre = client.username.substr(0, 1);
                if (letraNombre == letraNombreRandom && letraNombre != null && letraNombreRandom != null) {
                    condition = 0;
                } else {
                    condition = 1;
                }
            } while (condition != 0) {
                return member.setNickname(randomName);
            }

        }
    })

}

client.on("message", (message) => {

    getIntent(message.content, message.author, message.member)

});

client.login(config.token);