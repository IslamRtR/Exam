const fetchBtn = document.getElementById('next-btn');
const statusMessage = document.getElementById('status-message');
const randomTask = document.getElementById('random-task');
const loadingMessage = document.getElementById('loading-message');

fetchBtn.addEventListener('click', async () => {
    statusMessage.textContent = 'Деректер алынуда...';

    try {
        const response = await fetch('https://api.jsonbin.io/v3/b/67965b2ee41b4d34e47efbb7');
        if (!response.ok) {
            throw new Error('API қате');
        }
        const data = await response.json();
        statusMessage.textContent = 'Деректер сәтті алынды!';
        console.log(data);
    } catch (error) {


        statusMessage.textContent = `Қате: ${ error.message }`;
    }

    try {
        const data = await response.json();
        const tasks = data.title;

        const randomIndex = Math.floor(Math.random() * tasks.length);
        const randomTaskText = tasks[randomIndex];

        loadingMessage.textContent = '';
        randomTask.textContent = `Рандом Тапсырма: ${randomTaskText}`;
    } catch (error) {
        loadingMessage.textContent = '';
        randomTask.textContent = `Қате: ${error.message}`;
    }
})
