const envelope = document.querySelector('.envelope-wrapper');
const letter = document.querySelector('.letter');


document.addEventListener('click', (e) => {
    if (
        e.target.matches(".envelope") ||
        e.target.matches(".tap-right") ||
        e.target.matches(".tap-left") ||
        e.target.matches(".heart")
    ) {
        envelope.classList.toggle('flap');
    } else if (e.target.matches(".envelope *")) {
        if (!letter.classList.contains('opened')) {
            letter.classList.add("letter-opening");

            setTimeout(() => {
                letter.classList.remove('letter-opening');
                letter.classList.add('opened');

                // 🎯 PRUEBA 1: Verificar que esta parte se ejecuta
                console.log("La carta se abrió - punto de ejecución alcanzado");

                // 🎯 PRUEBA 2: Llamar a la función
                createHearts();

            }, 500);
            envelope.classList.add("disable-envelope")
        } else {
            letter.classList.add('closing-letter')
            envelope.classList.remove("disable-envelope")
            letter.classList.remove('opened')
            setTimeout(() => {
                letter.classList.remove('closing-letter');
                letter.classList.remove('opened');
            }, 500);
        }
    }

});

function createHearts() {


    console.log("¡FUNCIÓN createHearts INICIADA!");

      // Primero: Buscar el reproductor por su ID
    const magicSound = document.getElementById('confeti');
    
    // Luego: Reproducirlo
    if (magicSound) {
        magicSound.currentTime = 0; // Rebobinar al inicio
        magicSound.play(); // ¡Reproducir!
    }
    
    // Array de corazones y colores
    const heartTypes = ['❤️', '💖', '🥰', '✨','💘'];
    const colors = ['#ff477e', '#ff6b9d', '#ff8ab5', '#ffadd1', '#ffd6e7'];
    
    for (let i = 0; i < 15; i++) {
        const heart = document.createElement('div');
        heart.textContent = heartTypes[Math.floor(Math.random() * heartTypes.length)];
        heart.style.position = 'fixed';
        heart.style.fontSize = (Math.random() * 25 + 20) + 'px'; // Tamaño entre 20px y 45px
        heart.style.color = colors[Math.floor(Math.random() * colors.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.top = '-50px';
        heart.style.zIndex = '99999';
        heart.style.opacity = '1';
        heart.style.filter = 'drop-shadow(0 0 3px rgba(255, 255, 255, 0.8))';
        heart.style.willChange = 'transform, opacity'; // Mejora rendimiento
        
        // 🔁 ANIMACIÓN LENTA: de 3 a 5 segundos (antes era 1.5-3s)
        const duration = (Math.random() * 2 + 3); // Entre 3 y 5 segundos
        heart.style.transition = `all ${duration}s cubic-bezier(0.2, 0.8, 0.3, 1)`;
        
        document.body.appendChild(heart);
        
        void heart.offsetWidth; // Forzar reflow
        
        // Movimiento: cae lentamente con ligero balanceo
        heart.style.top = '100vh';
        heart.style.opacity = '0';
        heart.style.transform = `translateX(${(Math.random() * 80 - 40)}px) rotate(${Math.random() * 360}deg)`;
        
        // Eliminar después (duración + 1 segundo extra)
        setTimeout(() => {
            if (heart.parentNode) heart.remove();
        }, (duration * 1000) + 1000);
    }
}