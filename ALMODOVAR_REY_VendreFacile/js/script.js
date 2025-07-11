// Fonctions pour la page d'accueil
function chargementAnnonces() {
    console.log("Chargement des annonces...");
    // Simulation du chargement
    setTimeout(() => {
        showNotification("Annonces chargées avec succès!", "success");
    }, 1000);
}

function rechercheEffectuee() {
    const searchTerm = document.getElementById('searchInput').value;
    const category = document.getElementById('categoryFilter').value;
    const location = document.getElementById('locationFilter').value;
    
    console.log("Recherche effectuée:", { searchTerm, category, location });
    showNotification("Recherche effectuée: " + searchTerm, "info");
}

function filtrageApplique() {
    const priceMin = document.getElementById('priceMin').value;
    const priceMax = document.getElementById('priceMax').value;
    
    console.log("Filtrage appliqué:", { priceMin, priceMax });
    showNotification("Filtres appliqués", "info");
}

// Fonctions pour les annonces
function ajoutAnnonce() {
    console.log("Ajout d'une nouvelle annonce");
    window.location.href = "publication.html";
}

function modificationAnnonce(id) {
    console.log("Modification de l'annonce:", id);
    showNotification("Redirection vers la modification", "info");
}

function suppressionAnnonce(id) {
    if (confirm("Êtes-vous sûr de vouloir supprimer cette annonce ?")) {
        console.log("Suppression de l'annonce:", id);
        showNotification("Annonce supprimée", "success");
    }
}

function ajoutFavori(id) {
    console.log("Ajout aux favoris:", id);
    const btn = event.target;
    btn.classList.add('active');
    showNotification("Ajouté aux favoris", "success");
}

function retraitFavori(id) {
    if (confirm("Retirer cette annonce de vos favoris ?")) {
        console.log("Retrait des favoris:", id);
        showNotification("Retiré des favoris", "info");
        // Simulation de la suppression de la carte
        const card = event.target.closest('.favorite-card');
        if (card) {
            card.style.animation = 'fadeOut 0.5s ease-in-out';
            setTimeout(() => card.remove(), 500);
        }
    }
}

// Fonctions pour la publication
function redactionAnnonce() {
    console.log("Rédaction d'une annonce");
    showNotification("Formulaire de rédaction ouvert", "info");
}

function validationAnnonce() {
    console.log("Validation de l'annonce");
    
    // Simulation de la validation
    const title = document.getElementById('title').value;
    const price = document.getElementById('price').value;
    const description = document.getElementById('description').value;
    
    if (!title || !price || !description) {
        showNotification("Veuillez remplir tous les champs obligatoires", "error");
        return;
    }
    
    showNotification("Annonce validée et publiée!", "success");
    setTimeout(() => {
        window.location.href = "index.html";
    }, 2000);
}

// Fonctions pour le profil utilisateur
function inscriptionUtilisateur() {
    console.log("Inscription d'un nouvel utilisateur");
    showNotification("Inscription réussie!", "success");
}

function connexionUtilisateur() {
    console.log("Connexion utilisateur");
    showNotification("Connexion réussie!", "success");
}

function deconnexionUtilisateur() {
    console.log("Déconnexion utilisateur");
    showNotification("Déconnexion réussie", "info");
}

function modificationProfil() {
    console.log("Modification du profil");
    showNotification("Profil modifié avec succès", "success");
}

function suppressionCompte() {
    if (confirm("Êtes-vous sûr de vouloir supprimer votre compte ? Cette action est irréversible.")) {
        console.log("Suppression du compte");
        showNotification("Compte supprimé", "info");
    }
}

// Fonctions pour la messagerie
function creationConversation() {
    console.log("Création d'une nouvelle conversation");
    showNotification("Nouvelle conversation créée", "success");
}

function envoiMessage() {
    const messageInput = document.getElementById('messageInput');
    const message = messageInput.value.trim();
    
    if (!message) return;
    
    console.log("Envoi du message:", message);
    
    // Ajouter le message à la conversation
    const messagesContainer = document.getElementById('messagesContainer');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'message sent';
    messageDiv.innerHTML = `
        <div class="message-content">
            <p>${message}</p>
            <span class="message-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
        </div>
    `;
    
    messagesContainer.appendChild(messageDiv);
    messageInput.value = '';
    
    // Scroll vers le bas
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
    
    // Simulation d'une réponse automatique
    setTimeout(() => {
        const responseDiv = document.createElement('div');
        responseDiv.className = 'message received';
        responseDiv.innerHTML = `
            <div class="message-content">
                <p>Merci pour votre message ! Je vous réponds dès que possible.</p>
                <span class="message-time">${new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
            </div>
        `;
        messagesContainer.appendChild(responseDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }, 2000);
}

function lectureMessage() {
    console.log("Lecture du message");
}

function suppressionConversation() {
    if (confirm("Supprimer cette conversation ?")) {
        console.log("Suppression de la conversation");
        showNotification("Conversation supprimée", "info");
    }
}

function propositionPrix() {
    const prix = prompt("Quel prix souhaitez-vous proposer ?");
    if (prix) {
        console.log("Proposition de prix:", prix);
        showNotification("Proposition de prix envoyée: " + prix + "€", "success");
    }
}

// Fonctions pour les favoris
function affichageFavoris() {
    console.log("Affichage des favoris");
    showNotification("Favoris actualisés", "info");
}

// Fonctions pour le paiement
function initialisationPaiement() {
    console.log("Initialisation du paiement");
    
    // Afficher le modal de paiement
    const modal = document.getElementById('paymentModal');
    modal.style.display = 'flex';
    
    // Simulation du traitement du paiement
    setTimeout(() => {
        paiementEffectue();
    }, 3000);
}

function paiementEffectue() {
    console.log("Paiement effectué avec succès");
    
    const statusDiv = document.getElementById('paymentStatus');
    statusDiv.innerHTML = `
        <div class="status-icon success">
            <i class="fas fa-check-circle"></i>
        </div>
        <h3>Paiement réussi !</h3>
        <p>Votre commande a été confirmée.</p>
        <button onclick="transactionConfirmee()" class="btn-pay">Continuer</button>
    `;
}

function paiementEchoue() {
    console.log("Échec du paiement");
    
    const statusDiv = document.getElementById('paymentStatus');
    statusDiv.innerHTML = `
        <div class="status-icon error">
            <i class="fas fa-times-circle"></i>
        </div>
        <h3>Paiement échoué</h3>
        <p>Une erreur est survenue lors du paiement.</p>
        <button onclick="document.getElementById('paymentModal').style.display='none'" class="btn-pay">Réessayer</button>
    `;
}

function transactionConfirmee() {
    console.log("Transaction confirmée");
    showNotification("Transaction confirmée avec succès!", "success");
    
    // Fermer le modal
    document.getElementById('paymentModal').style.display = 'none';
    
    // Rediriger vers la page d'accueil
    setTimeout(() => {
        window.location.href = "index.html";
    }, 2000);
}

// Fonctions utilitaires
function showNotification(message, type = "info") {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.classList.add('show');
    }, 100);
    
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

function toggleProfileSection(sectionId) {
    // Masquer toutes les sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Afficher la section sélectionnée
    document.getElementById(sectionId).classList.add('active');
    
    // Mettre à jour le menu
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
    event.target.classList.add('active');
}

// Événements pour les conversations
function selectConversation(conversationId) {
    document.querySelectorAll('.conversation-item').forEach(item => {
        item.classList.remove('active');
    });
    
    event.target.closest('.conversation-item').classList.add('active');
    
    console.log("Conversation sélectionnée:", conversationId);
}

// Gestion des images dans les annonces
function changeMainImage(imageSrc) {
    document.getElementById('mainImage').src = imageSrc;
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    console.log("Page chargée");
    
    // Charger les annonces sur la page d'accueil
    if (window.location.pathname.includes('index.html') || window.location.pathname === '/') {
        chargementAnnonces();
    }
    
    // Gestion de l'envoi de message avec Enter
    const messageInput = document.getElementById('messageInput');
    if (messageInput) {
        messageInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                envoiMessage();
            }
        });
    }
    
    // Formatage automatique du numéro de carte
    const cardNumberInput = document.getElementById('cardNumber');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function() {
            let value = this.value.replace(/\s/g, '');
            let formattedValue = value.replace(/(.{4})/g, '$1 ').trim();
            this.value = formattedValue;
        });
    }
    
    // Formatage de la date d'expiration
    const expiryInput = document.getElementById('expiryDate');
    if (expiryInput) {
        expiryInput.addEventListener('input', function() {
            let value = this.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.substring(0, 2) + '/' + value.substring(2, 4);
            }
            this.value = value;
        });
    }
});

// Animation CSS additionnelle
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeOut {
        from {
            opacity: 1;
            transform: translateY(0);
        }
        to {
            opacity: 0;
            transform: translateY(-20px);
        }
    }
`;
document.head.appendChild(style);
