const { REST, Routes } = require('discord.js');
const { app } = require('./config'); // L'identifiant du bot et du serveur sont dans le fichier config
const fs = require('fs');

const commands = [];
// Charge toutes les commandes depuis le dossier commands
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push(command.data.toJSON());
}

// Déploiement des commandes pour le serveur spécifié
const rest = new REST({ version: '10' }).setToken(app.token);

(async () => {
    try {
        console.log('Enregistrement des commandes slash...');

        await rest.put(
            Routes.applicationGuildCommands(app.clientId, app.guild),
            { body: commands },
        );

        console.log('Les commandes slash ont été enregistrées avec succès.');
    } catch (error) {
        console.error(error);
    }
})();
