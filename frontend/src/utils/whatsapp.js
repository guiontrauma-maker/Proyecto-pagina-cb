const WHATSAPP_NUMBER = "5559032021";

const WHATSAPP_MESSAGE = `Hola, quiero solicitar una evaluación gratuita de mi caso.

Para poder conocer mejor mi situación y recibir orientación, comparto los siguientes datos:

Nombre completo:
Teléfono:
Correo electrónico:
Tipo de fraude:
Monto aproximado de la pérdida:
Cuéntanos brevemente qué ocurrió:`;

export const abrirWhatsApp = () => {
    const mensaje = encodeURIComponent(WHATSAPP_MESSAGE);

    window.open(
        `https://wa.me/${WHATSAPP_NUMBER}?text=${mensaje}`,
        "_blank"
    );
};

document.addEventListener("click", (event) => {
    const enlace = event.target.closest('a[href*="wa.me"]');

    if (!enlace) return;

    event.preventDefault();

    abrirWhatsApp();
});