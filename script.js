document.querySelectorAll('.game-icon').forEach(icon => {
    icon.addEventListener('click', function() {
        const gameUrl = this.getAttribute('data-game');

        const gameContainer = document.createElement('div');
        gameContainer.classList.add('game-container');

        const iframe = document.createElement('iframe');
        iframe.classList.add('game-frame');
        iframe.src = gameUrl;
        iframe.allow = "accelerometer; gyroscope; gamepad; autoplay; payment; fullscreen; microphone; clipboard-read; clipboard-write";
        iframe.sandbox = "allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-presentation allow-scripts allow-same-origin allow-downloads allow-popups-to-escape-sandbox";

        gameContainer.appendChild(iframe);
        document.getElementById('loaded-games').appendChild(gameContainer);
    });
});
