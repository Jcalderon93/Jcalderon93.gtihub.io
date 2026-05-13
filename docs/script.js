// 1. Animación de revelado al hacer scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-in, .proyecto').forEach(el => observer.observe(el));

// 2. Efecto de feedback al hacer clic en botones
const buttons = document.querySelectorAll('.boton-cv');

buttons.forEach(button => {
    button.addEventListener('mousedown', () => {
        button.style.transform = 'scale(0.95)';
    });
    button.addEventListener('mouseup', () => {
        button.style.transform = 'scale(1.05)';
    });
});