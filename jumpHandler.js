onmessage = (e) => {
    document.addEventListener('keypress', (e) => {
        if (e.code == 'Space') {
            super.player.jump();
        }
    })
};