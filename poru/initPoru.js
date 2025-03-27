
const { Poru } = require('poru');
const { Client } = require('discord.js');
const { lavalinkHostDiscloud, lavalinkIdentifierDiscloud, lavalinkPasswordDiscloud, lavalinkPort, lavalinkSecure } = require('../config.json')

/**
 * @param {Client} client
 */

async function initPoru(client) {
    const nodes = [
        {
            name: lavalinkIdentifierDiscloud,
            host: lavalinkHostDiscloud,
            port: lavalinkPort,
            secure: lavalinkSecure,
            password: lavalinkPasswordDiscloud,
        },
    ];
    
    const PoruOptions = {
        library: "discord.js",
        defaultPlatform: "ytsearch",
        reconnectTries: Infinity
    };

    client.poru = new Poru(client, nodes, PoruOptions);
}

module.exports = { initPoru }