const { Client } = require('discord.js');
const { Node } = require('poru');

module.exports = {
    name: "nodeDisconnect",
    once: false,

    /** 
    @param {Client} client
    @param {Node} node
    */

    execute(client, node, event) {
        console.log(`[INFO] Node desconectado ${node.name}`);
        console.log(`${event}`);
    },
};