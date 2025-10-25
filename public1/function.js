// GitHub Copilot
(function(){
    const btn = document.getElementById('btn');
    const nameInput = document.getElementById('name');
    const greeting = document.getElementById('greeting');
    const card = document.getElementById('card');

    btn.addEventListener('click', () => {
        const name = (nameInput.value || '').trim();
        greeting.style.opacity = 0;
        setTimeout(() => {
            greeting.textContent = name
                ? `Happy Birthday, ${name}! May your day be as wonderful as you are.`
                : 'Happy Birthday! Wishing you a day filled with joy and surprises.';
            greeting.style.opacity = 1;
        }, 220);

        // trigger balloons
        card.classList.remove('active');
        // restart animations by reflow
        void card.offsetWidth;
        card.classList.add('active');
    });

    // Allow Enter key to trigger
    nameInput.addEventListener('keydown', (e) => { if(e.key === 'Enter') btn.click(); });
})();