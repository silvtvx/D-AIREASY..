// Chatbot Simples
const chatMessages = document.getElementById("chat-messages");
const userInput = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");

// Mensagens automáticas do chatbot
const botReplies = {
    "oi": "Olá! Como posso ajudar você hoje?",
    "preço": "O climatizador SY-X custa R$ 149,99. Há algo mais que você gostaria de saber?",
    "entrega": "Oferecemos entrega rápida em até 5 dias úteis. Para mais detalhes, informe seu CEP.",
    "obrigado": "De nada! Estou aqui para ajudar. 😊",
    "default": "Desculpe, não entendi. Você pode reformular sua pergunta?"
};

// Função para adicionar mensagens ao chat
function addMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("chat-message", sender);
    messageElement.textContent = message;
    chatMessages.appendChild(messageElement);
    chatMessages.scrollTop = chatMessages.scrollHeight; // Rolagem automática
}

// Enviar mensagem do usuário
sendBtn.addEventListener("click", () => {
    const userMessage = userInput.value.trim();
    if (userMessage) {
        addMessage("user", userMessage);
        userInput.value = "";

        // Resposta do chatbot
        const botReply = botReplies[userMessage.toLowerCase()] || botReplies["default"];
        setTimeout(() => addMessage("bot", botReply), 500);
    }
});

// Enviar mensagem ao pressionar Enter
userInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        sendBtn.click();
    }
});

// Validação e envio do formulário
document.getElementById("contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    e.target.reset();
});
