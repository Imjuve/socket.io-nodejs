const express = require('express');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const path = require('path');

// Serveur les fichiers statiques à partir du répertoire 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Serve the files from the 'node_modules' directory
app.use('/node_modules', express.static(path.join(__dirname, 'node_modules'))); 

io.on('connection', (socket) => {
    console.log('Un client s\'est connecté'); 

    socket.on('disconnect', (socket) => {
        console.log('Disconnected');
    });
    // Écouter les messages entrants et les diffuser à tous les clients connectés
    socket.on('message', (msg) => {
        io.emit('message', msg); // Diffuser à tous les clients connectés (y compris l'émetteur) 
    });
});


// Démarrer le serveur sur le port 3000 
http.listen(3000, () => {  

    console.log('Serveur à l\'écoute sur le port 3000');  // eslint-disable-line no-console 
});
