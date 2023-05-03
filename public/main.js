
// Code exécuté côté client (navigateur) uniquement 
document.addEventListener('DOMContentLoaded', () => {
  const socket = io(); // Connexion au serveur WebSocket en utilisant SocketIO (inclus dans le fichier index.html) 

  const messages = document.getElementById('messages');  // Liste des messages reçus
  const inputMessage = document.getElementById('inputMessage'); // Champ de saisie du message
  const sendMessage = document.getElementById('sendMessage');  // Bouton "Envoyer" 

  // Envoyer un message lorsque l'utilisateur clique sur le bouton "Envoyer"
  sendMessage.addEventListener('click', () => {
    const message = inputMessage.value;
    inputMessage.value = '';
    socket.emit('message', message);
  });

  // Afficher les messages entrants
  socket.on('message', (msg) => {
    const messageElement = document.createElement('div');
    messageElement.textContent = msg;
    messages.appendChild(messageElement);
  });
});

//  function pour tirer pile ou face en ternaire

function pileOuFace() {
  // 1 chance sur 2 de retourner 'pile' ou 'face'
  return Math.random() < 0.5 ? 'pile' : 'face';

}

//  function pour tirer un nombre aléatoire entre 1 et 6

function lancerDe() {
  // 1 chance sur 6 de retourner un nombre entre 1 et 6
  return Math.floor(Math.random() * 6) + 1;
}

// function pour recuperer les champs nom & prénoms d'un formulaire envoyé en methode post

function getFormValues(form) {
  
}