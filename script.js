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

function initAnimations() {
    const tl = gsap.timeline();
    
    // Primero animamos el background de tu hero (que ya existe)
    tl.fromTo('.hero', 
        { 
            opacity: 0 
        },
        {
            opacity: 1,
            duration: 1.5,
            ease: 'power2.inOut'
        }
    )
    // Después animamos los textos
    .to('.fade-in', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });
}

window.addEventListener('load', initAnimations);
