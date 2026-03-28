let voitureChoisie = "";

// réponses aléatoires pour faire "IA"
const reponsesDefaut = [
    "Je suis là pour vous aider 🚗",
    "Pouvez-vous préciser votre demande ?",
    "Je peux vous aider à trouver une voiture 🔥",
    "Parlez-moi d’un modèle 😉"
];

function sendMessage() {
    let input = document.getElementById("userInput").value;
    let message = input.toLowerCase();
    let response = "";

    if (input.trim() === "") return;

    // ===== DETECTION VOITURES =====
    if (message.includes("lamborghini")) {
        voitureChoisie = "Lamborghini Huracán";
        response = "🔥 La Lamborghini Huracán est disponible. Une vraie bête de course !";
    } 
    else if (message.includes("tesla")) {
        voitureChoisie = "Tesla Model S";
        response = "⚡ La Tesla Model S est disponible, 100% électrique et ultra rapide.";
    }
    else if (message.includes("mercedes")) {
        voitureChoisie = "Mercedes AMG GT";
        response = "✨ La Mercedes AMG GT est disponible, élégance et puissance.";
    }

    // ===== INTENTION D'ACHAT =====
    else if (message.includes("acheter") || message.includes("prix")) {
        if (voitureChoisie !== "") {
            response = `💰 Vous voulez acheter la ${voitureChoisie}. Contactez-nous pour finaliser 😎`;
        } else {
            response = "Quelle voiture souhaitez-vous acheter ?";
        }
    }

    // ===== SALUTATION =====
    else if (message.includes("bonjour") || message.includes("salut")) {
        response = "👋 Bonjour ! Bienvenue chez AutoLux";
    }

    // ===== REMERCIEMENT =====
    else if (message.includes("merci")) {
        response = "Avec plaisir 😄";
    }

    // ===== DEFAULT (IA STYLE) =====
    else {
        response = reponsesDefaut[Math.floor(Math.random() * reponsesDefaut.length)];
    }

    afficherMessage(input, response);
}

function afficherMessage(user, bot) {
    let chat = document.getElementById("chatBody");

    chat.innerHTML += `
        <div class="msg user">${user}</div>
        <div class="msg bot">${bot}</div>
    `;

    chat.scrollTop = chat.scrollHeight;

    document.getElementById("userInput").value = "";
}