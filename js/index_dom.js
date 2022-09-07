import hamburgerMenu from "./DOM/menu_hamburguesa.js";
import { digitalClock, alarm } from "./DOM/reloj.js";
import { moveBall, shortcuts } from "./DOM/teclado.js";
import { countdown } from "./DOM/countdown.js";
import scrollTopButton from "./DOM/boton_scroll.js";
import darkTheme from "./DOM/dark_theme.js";
import responsiveMedia from "./DOM/object_responsive.js";
import responsiveTester from "./DOM/tester_responsive.js";
import userDeviceInfo from "./DOM/deteccion_dispositivos.js";
import networkStatus from "./DOM/deteccion_red.js";
import webcam from "./DOM/deteccion_webcam.js";
import getGeolocation from "./DOM/geolocalizacion.js";
import searchFiltres from "./DOM/filtros_busqueda.js";
import draw from "./DOM/sorteo.js";
import slider from "./DOM/carrusel.js";
import scrollSpy from "./DOM/scroll_espia.js";
import smartVideo from "./DOM/video_inteligente.js";
import contactFormValidation from "./DOM/validaciones_formulario.js";
import speechReader from "./DOM/narrador.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
    hamburgerMenu(".panel-btn", ".panel", ".menu a");
    digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
    alarm("js/assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown(
        "countdown",
        "Jan 27, 2023 09:42:00",
        "Feliz cumpleaños Omar!"
    );
    scrollTopButton(".scroll-top-btn");
    responsiveMedia(
        "youtube",
        "(min-width: 1024px)",
        `<a href="https://www.youtube.com/watch?v=2SetvwBV-SU&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=2" target:"_blank" rel=noopener>Ver Video</a>`,
        `<iframe width="560" height="315" src="https://www.youtube.com/embed/2SetvwBV-SU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
    );
    responsiveMedia(
        "gmaps",
        "(min-width: 1024px)",
        `<a href="https://goo.gl/maps/iS1yMQcD6Y28oPCA7" target:"_blank" rel=noopener>Ver Mapa</a>`,
        `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3923.2588802419887!2d-66.88301748586328!3d10.480246767457961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a58c217728af1%3A0x2b3b35d3964dc54d!2sConcha%20Ac%C3%BAstica%20de%20Bello%20Monte!5e0!3m2!1sen!2sve!4v1660059142899!5m2!1sen!2sve" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
    );
    responsiveTester("responsive-tester");
    userDeviceInfo("user-device");
    webcam("webcam");
    getGeolocation("geolocation");
    searchFiltres(".card-filter", ".card");
    draw("#winner-btn", ".player");
    slider();
    scrollSpy();
    smartVideo();
    contactFormValidation();
});

d.addEventListener("keydown", (e) => {
    shortcuts(e);
    moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode"); //<-----La sacamos del DOMContentLoaded porque se va a ejecutar internamente
networkStatus();
speechReader();