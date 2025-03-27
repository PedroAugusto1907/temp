const { Client } = require('discord.js');
const { Node } = require('poru');

module.exports = {
    name: "nodeError",
    once: false,

    /** 
    @param {Client} client
    @param {Node} node
    */

    execute(client, node, event) {
        console.log(`[INFO] Erro no node ${node.name}`);
        console.log(`${event}`);
    },
};