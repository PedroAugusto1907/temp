const { TOKEN } = require('./config.json');
const { Client, GatewayIntentBits } = require('discord.js');
const { initPoru } = require('./poru/initPoru');
const { loadCommands } = require('./handlers/commandsHandler');
const { loadClientEvents } = require('./handlers/clientEventsHandler');
const { loadPoruEvents } = require('./handlers/poruEventsHandler');


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildVoiceStates
    ]
});

initPoru(client);
loadCommands(client);
loadPoruEvents(client);
loadClientEvents(client);

client.login(TOKEN);

["unhandledRejection", "uncaughtException", "uncaughtExceptionMonitor"].forEach((event) => {
    process.on(event, (error) => {
        console.error(`[INFO] Erro não tratado no evento ${event}:`, error);
    });
});