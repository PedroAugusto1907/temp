const { Client } = require('discord.js');

module.exports = {
    name: "queueEnd",
    once: false,

    /** 
    @param {Client} client
    @param {Player} player
    @param {Track} track
    */

    async execute(client, player, track, data) {
        await player.msgCollector.stop();
    },
};
