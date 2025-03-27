const { Client } = require('discord.js');

module.exports = {
    name: "trackEnd",
    once: false,

    /** 
    @param {Client} client
    @param {Player} player
    @param {Track} track
    */

    async execute(client, player, track, data) {
        if (player.loop === 'NONE') {
            await player.msgCollector.stop();
        }
    },
};
