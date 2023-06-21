const greeting = (phrase) => {
    alert(phrase);
}

const title = document.querySelector('h1')

const createGreetingMessage = (name) => {
    const message = `Hello, ${name}!`;

    greeting(mesage);

    title.textContent = message;
}

createGreetingMessage('Natasha')
