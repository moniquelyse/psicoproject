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
    
    gsap.set('.hero', { visibility: 'visible' });
    
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
    .to('.fade-in', {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
    });
}

window.addEventListener('load', initAnimations);

function initTestimonials() {
    const tracks = document.querySelectorAll('.testimonials-track');
    
    tracks.forEach((track, index) => {
        // Triplicamos el contenido para el loop
        const originalContent = track.innerHTML;
        track.innerHTML = originalContent + originalContent + originalContent;
        
        // Posicionamos inicialmente en el segundo set
        let currentTranslate = -track.scrollHeight / 3;
        track.style.transform = `translate3d(0, ${currentTranslate}px, 0)`;
        
        const direction = index === 1 ? 1 : -1;
        const speed = 0.15 + (index * 0.05);
        let isHovered = false;
        let animationFrameId = null;
        
        function updatePosition(timestamp) {
            if (!isHovered) {
                currentTranslate += speed * direction;
                const totalHeight = track.scrollHeight;
                const oneSetHeight = totalHeight / 3;
                
                // Si llegamos al final de un set, volvemos al set del medio
                if (direction > 0 && currentTranslate > 0) {
                    currentTranslate = -oneSetHeight;
                } else if (direction < 0 && currentTranslate < -oneSetHeight * 2) {
                    currentTranslate = -oneSetHeight;
                }
                
                track.style.transform = `translate3d(0, ${currentTranslate}px, 0)`;
            }
            
            animationFrameId = requestAnimationFrame(updatePosition);
        }
        
        // Iniciar animación
        animationFrameId = requestAnimationFrame(updatePosition);
        
        // Manejo del hover
        track.addEventListener('mouseenter', () => {
            isHovered = true;
        });
        
        track.addEventListener('mouseleave', () => {
            isHovered = false;
        });
        
        // Limpiar animación cuando sea necesario
        return () => {
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    });
}

// Inicializar cuando el DOM esté cargado
document.addEventListener('DOMContentLoaded', initTestimonials);
