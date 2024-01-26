const chatBox = document.getElementById('chatBox');
const userInput = document.getElementById('userInput');

function sendMessage() {
    const userMessage = userInput.value;
    if (userMessage.trim() === '') return;

    appendMessage('user', userMessage);
    userInput.value = '';

    // Mock backend response
    setTimeout(() => {
        const botMessage = getBotResponse(userMessage);
        appendMessage('bot', botMessage);
    }, 500);
}

function appendMessage(sender, message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add(sender);
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);

    // Scroll to the bottom of the chat box
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(userMessage) {
    // Simple mock response (you can replace this with a more sophisticated logic)
    if (userMessage.toLowerCase().includes('hello')) {
        return 'Hello! How can I help you?';
    } else {
        return 'I am a simple chatbot and did not understand that.';
    }
}
