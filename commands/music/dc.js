const { SlashCommandBuilder } = require('@discordjs/builders')
const { CommandInteraction, EmbedBuilder } = require('discord.js');

module.exports = {
    data: new SlashCommandBuilder()
        .setName('dc')
        .setDescription('Desconecta o bot')
    ,
    /** 
    @param {CommandInteraction} interaction
    */

    async execute(interaction, client) {
        const { member, guild } = interaction;
        const player = client.poru.players.get(guild.id)

        if (!player) {
            return interaction.reply({ content: 'O bot não está conectado', ephemeral: true });
        }

        if (player.voiceChannel !== member.voice.channelId) {
            return interaction.reply({ content: 'Você não está no mesmo canal de voz que o bot', ephemeral: true });
        }     

        try {
            player.destroy();
            return interaction.reply({ content: 'Bot desconectado', ephemeral: true });

        } catch (e) {
            console.log(e)
            const errorEmbed = new EmbedBuilder()
                .setColor('Red')
                .setDescription('Erro ao executar comando');

            return interaction.reply({ content: '', embeds: [errorEmbed], ephemeral: true });
        }
    }
}