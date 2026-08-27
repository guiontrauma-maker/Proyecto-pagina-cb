const WHATSAPP_NUMBER = "5559032021";

const WHATSAPP_MESSAGE = `Hola, quiero un analisis gratuito de mi caso`;

export const abrirWhatsApp = () => {
    const mensaje = encodeURIComponent(WHATSAPP_MESSAGE);

    window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}`,
        "_blank"
    );
};

// Detecta automáticamente cualquier enlace de WhatsApp
document.addEventListener("click", (event) => {
    const enlace = event.target.closest('a[href*="wa.me"]');

    if (!enlace) return;

    event.preventDefault();

    abrirWhatsApp();
});