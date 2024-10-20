 module.exports = {
     app: {
         token: process.env.DISCORD_TOKEN || 'xxx', // Token du bot
         playing: 'HELLO Guy ❤️', // Message de jeu affiché
         global: true, // Configuration globale
         guild: process.env.GUILD_ID || 'xxx', // ID de la guilde
         extraMessages: false, // Messages supplémentaires activés
         loopMessage: false, // Boucle activée
         lang: 'fr', // Langue
         enableEmojis: false, // Émojis activés
     },

     emojis: {
         back: '⏪',
         skip: '⏩',
         ResumePause: '⏯️',
         savetrack: '💾',
         volumeUp: '🔊',
         volumeDown: '🔉',
         loop: '🔁',
     },

     opt: {
         DJ: {
             enabled: false,
             roleName: '',
             commands: [],
         },
         Translate_Timeout: 10000, // Délai de traduction
         maxVol: 100, // Volume maximum
         spotifyBridge: true, // Pont Spotify activé
         volume: 75, // Volume initial
         leaveOnEmpty: true, // Quitter si vide
         leaveOnEmptyCooldown: 30000, // Temps de cooldown pour quitter
         leaveOnEnd: true, // Quitter à la fin
         leaveOnEndCooldown: 30000, // Temps de cooldown pour quitter à la fin
         discordPlayer: {
             ytdlOptions: {
                 quality: 'highestaudio', // Qualité de l'audio
                 highWaterMark: 1 << 25, // Limite de mémoire
             },
         },
     },
 }; // <-- le point-virgule est ici, après la fermeture de module.exports
