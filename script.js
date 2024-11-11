gsap.registerPlugin(ScrollTrigger);

// Configuración del scroll horizontal
function initHorizontalScroll() {
    let sections = gsap.utils.toArray(".panel");
    
    gsap.to(sections, {
        xPercent: -100 * (sections.length - 1),
        ease: "none",
        scrollTrigger: {
            trigger: ".horizontal-section",
            pin: true,
            scrub: 1,
            snap: 1 / (sections.length - 1),
            end: () => "+=" + document.querySelector(".horizontal-container").offsetWidth
        }
    });
}

// Inicializar cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", function() {
    initHorizontalScroll();
});

(function() {
    let devtools = function() {};
    
    devtools.toString = function() {
        const styles = [
            'background: #1a1a1a',
            'color: #61DAFB',
            'padding: 10px',
            'font-family: monospace',
            'font-size: 14px',
            'border-radius: 4px',
            'line-height: 1.5'
        ].join(';');

        console.log('%c👋 Hey there, curious developer!\nThis site was crafted by Ragna Labs.\nWant to build something amazing together?\nhello@ragnalabs.com', styles);
        return '';
    }

    console.log('%c', devtools);
})();
