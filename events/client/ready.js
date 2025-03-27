const { Events, Client, ActivityType } = require('discord.js');
const { readFileSync } = require("node:fs");
const avatar = readFileSync("./bot-img.gif")

module.exports = {
    name: Events.ClientReady,
    once: true,

    /** 
   @param {Client} client
   */

    execute(client) {
        try {
            client.user.setActivity('cabeça de gelo', { type: ActivityType.Listening });
            console.log(`Status definido com sucesso`);

            // client.user.setAvatar(avatar)
            // console.log(`Avatar definido com sucesso`);

            client.poru.init(client);
            console.log(`Poru iniciado com sucesso`);

            console.log(`TUDO PRONTO! Logado como ${client.user.tag}`);
        } catch (e) {
            console.log(`Erro ao BOT POT: ${e}`);
        } 
	},
};