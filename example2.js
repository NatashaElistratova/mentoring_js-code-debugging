const greeting = (phrase) => {
    alert(phrase);
}

const title = document.querySelectorAll('.test')

const createGreetingMessage = (name) => {
    const messege = `Hello, ${name}!`;

    greeting(message);
    
    title.textContent = message;
}

createGreetingMessage('Natasha')
