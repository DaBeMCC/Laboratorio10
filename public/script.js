console.log('¡Script cargado con éxito!');

// Esperamos a que el HTML cargue completamente
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('action-btn');
    const message = document.getElementById('status-message');

    btn.addEventListener('click', () => {
        message.textContent = '¡La interacción funciona! Diseño limpio y responsivo.';
        btn.textContent = 'Completado';
        btn.style.pointerEvents = 'none'; // Desactiva el botón después del clic
        btn.style.opacity = '0.5';
    });
});