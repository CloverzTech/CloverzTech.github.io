/* ============================================
   CLOVERTECH - ANIMATIONS & EFFECTS
   ============================================ */

// ========== ANIMATED BACKGROUND PARTICLES ==========
function createAnimatedParticles() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) {
        console.warn('❌ Hero section not found');
        return false;
    }
    
    console.log('🎯 Creating animated background particles...');
    
    // Remove any existing particle container
    const existing = heroSection.querySelector('#particle-container');
    if (existing) existing.remove();
    
    // Create particle container
    const particleContainer = document.createElement('div');
    particleContainer.id = 'particle-container';
    particleContainer.style.cssText = `
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        z-index: 1;
        pointer-events: none;
    `;
    
    // Insert at the beginning - CRITICAL: must be first child
    heroSection.insertBefore(particleContainer, heroSection.firstChild);
    
    // Create 12 animated floating particles
    const particleCount = 12;
    const animations = ['floatSlow', 'floatFast', 'rotateMild', 'float'];
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        const size = 50 + Math.random() * 200; // 50-250px
        const duration = 20 + Math.random() * 40; // 20-60s
        const delay = Math.random() * 3; // 0-3s
        const animation = animations[i % animations.length];
        const opacity = 0.1 + Math.random() * 0.25; // 0.1-0.35
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            left: ${x}%;
            top: ${y}%;
            background: radial-gradient(circle at 30% 30%, rgba(255,255,255,${opacity}), rgba(255,255,255,${opacity*0.3}) 40%, transparent 70%);
            border-radius: 50%;
            animation: ${animation} ${duration}s ease-in-out infinite;
            animation-delay: ${delay}s;
            filter: blur(2px);
            margin: ${-size/2}px 0 0 ${-size/2}px;
        `;
        
        particleContainer.appendChild(particle);
    }
    
    console.log('✅ Particles created! Count:', particleCount);
    console.log('📊 Particle container:', particleContainer);
    console.log('📊 Particles found:', particleContainer.querySelectorAll('div').length);
    
    return true;
}

// Initialize dengan multiple strategies
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    console.log('✅ DOM ready, creating particles...');
    createAnimatedParticles();
} else {
    document.addEventListener('DOMContentLoaded', createAnimatedParticles);
}

// Backup: coba lagi di window load
window.addEventListener('load', () => {
    const particles = document.querySelectorAll('#particle-container > div');
    if (particles.length === 0) {
        console.log('⚠️ No particles found at load, creating...');
        createAnimatedParticles();
    }
});

// Final backup: tunggu 1 detik
setTimeout(() => {
    const particles = document.querySelectorAll('#particle-container > div');
    if (particles.length === 0) {
        console.log('⚠️ Final attempt - creating particles');
        createAnimatedParticles();
    }
}, 1000);

// ========== AOS (ANIMATE ON SCROLL) IMPLEMENTATION ==========
class AnimateOnScroll {
    constructor(options = {}) {
        this.elements = document.querySelectorAll('[data-aos]');
        this.defaultDuration = options.duration || 600;
        this.defaultOffset = options.offset || 120;
        this.init();
    }
    
    init() {
        if (!('IntersectionObserver' in window)) {
            // Fallback for older browsers
            this.elements.forEach(el => {
                el.classList.add('aos-animate');
            });
            return;
        }
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.getAttribute('data-aos-delay') || 0;
                    setTimeout(() => {
                        entry.target.classList.add('aos-animate');
                    }, parseInt(delay));
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: `${this.defaultOffset}px 0px`
        });
        
        this.elements.forEach(element => {
            observer.observe(element);
        });
    }
}

// Initialize AOS on page load
document.addEventListener('DOMContentLoaded', () => {
    new AnimateOnScroll({
        duration: 600,
        offset: 100
    });
});

// ========== PARALLAX EFFECT ==========
function initParallax() {
    const heroSection = document.querySelector('.hero');
    if (!heroSection) return;
    
    window.addEventListener('scroll', () => {
        const scrollPosition = window.scrollY;
        const background = heroSection.querySelector('.hero-illustration');
        
        if (background) {
            background.style.transform = `translateY(${scrollPosition * 0.5}px)`;
        }
    });
}

// ========== HOVER EFFECTS FOR CARDS ==========
function addCardHoverEffects() {
    const cards = document.querySelectorAll(
        '.service-card, .product-card, .contact-card, .testimonial-card, .faq-item'
    );
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)';
        });
    });
}

// ========== BUTTON RIPPLE EFFECT ==========
function addRippleEffect() {
    const buttons = document.querySelectorAll('.btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                left: ${x}px;
                top: ${y}px;
                background: rgba(255, 255, 255, 0.5);
                border-radius: 50%;
                pointer-events: none;
                animation: ripple-animation 0.6s ease-out;
            `;
            
            this.style.position = 'relative';
            this.style.overflow = 'hidden';
            this.appendChild(ripple);
            
            setTimeout(() => ripple.remove(), 600);
        });
    });
}

// Add ripple animation keyframes
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// ========== COUNTER ANIMATION ==========
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / speed;
        
        let current = 0;
        
        const updateCount = () => {
            current += increment;
            
            if (current < target) {
                counter.innerText = Math.ceil(current);
                setTimeout(updateCount, 10);
            } else {
                counter.innerText = target;
            }
        };
        
        updateCount();
    });
}

// ========== SCROLL REVEAL ==========
function initScrollReveal() {
    const reveals = document.querySelectorAll('[data-reveal]');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    reveals.forEach(reveal => {
        observer.observe(reveal);
    });
}

// ========== TEXT ANIMATION ==========
function typeWriter(element, text, speed = 50) {
    let index = 0;
    element.innerText = '';
    
    function type() {
        if (index < text.length) {
            element.innerText += text.charAt(index);
            index++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// ========== FADE IN UP ANIMATION ==========
function addFadeInUpAnimation(selector, delay = 0) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((element, index) => {
        const style = document.createElement('style');
        style.textContent = `
            ${selector}:nth-child(${index + 1}) {
                animation: fadeInUp 0.6s ease-out ${delay + index * 100}ms both;
            }
            
            @keyframes fadeInUp {
                from {
                    opacity: 0;
                    transform: translateY(30px);
                }
                to {
                    opacity: 1;
                    transform: translateY(0);
                }
            }
        `;
        document.head.appendChild(style);
    });
}

// ========== SCROLL PROGRESS INDICATOR ==========
function showScrollProgress() {
    const progress = document.createElement('div');
    progress.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, #2ecc71, #27ae60);
        z-index: 999;
        transition: width 0.1s ease;
    `;
    progress.id = 'scroll-progress';
    document.body.appendChild(progress);
    
    window.addEventListener('scroll', () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = (window.scrollY / scrollHeight) * 100;
        progress.style.width = scrolled + '%';
    });
}

// ========== STAGGER ANIMATION HELPER ==========
function staggerAnimation(selector, animationClass = 'fadeInUp', staggerDelay = 100) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((element, index) => {
        element.style.animationDelay = `${index * staggerDelay}ms`;
        element.classList.add(animationClass);
    });
}

// ========== SMOOTH PAGE LOAD ==========
function smoothPageLoad() {
    window.addEventListener('load', () => {
        document.body.classList.add('loaded');
    });
}

// ========== FLOATING ANIMATION ==========
function addFloatingAnimation(selector) {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach((element, index) => {
        const duration = 3 + (index * 0.5);
        element.style.animation = `floating ${duration}s ease-in-out infinite`;
    });
}

// Add floating keyframes
const floatingStyle = document.createElement('style');
floatingStyle.textContent = `
    @keyframes floating {
        0%, 100% {
            transform: translateY(0px);
        }
        50% {
            transform: translateY(-20px);
        }
    }
`;
document.head.appendChild(floatingStyle);

// ========== GLOW EFFECT ==========
function addGlowEffect(selector, color = '#2ecc71') {
    const elements = document.querySelectorAll(selector);
    
    elements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.boxShadow = `0 0 20px ${color}, 0 0 30px ${color}`;
            this.style.transition = 'box-shadow 0.3s ease';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.boxShadow = '';
        });
    });
}

// ========== PULSE ANIMATION ==========
function addPulseAnimation(selector) {
    const elements = document.querySelectorAll(selector);
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes pulse {
            0%, 100% {
                opacity: 1;
            }
            50% {
                opacity: 0.7;
            }
        }
    `;
    document.head.appendChild(style);
    
    elements.forEach(element => {
        element.style.animation = 'pulse 2s ease-in-out infinite';
    });
}

// ========== GRADIENT ANIMATION ==========
function addGradientAnimation(selector) {
    const elements = document.querySelectorAll(selector);
    
    const style = document.createElement('style');
    style.textContent = `
        @keyframes gradientAnimation {
            0% {
                background-position: 0% 50%;
            }
            50% {
                background-position: 100% 50%;
            }
            100% {
                background-position: 0% 50%;
            }
        }
    `;
    document.head.appendChild(style);
    
    elements.forEach(element => {
        element.style.backgroundSize = '200% 200%';
        element.style.animation = 'gradientAnimation 3s ease infinite';
    });
}

// ========== INITIALIZE ALL ANIMATIONS ==========
document.addEventListener('DOMContentLoaded', function() {
    // Initialize different animation systems
    initParallax();
    addCardHoverEffects();
    addRippleEffect();
    initScrollReveal();
    showScrollProgress();
    smoothPageLoad();
    
    // Add specific animations to elements
    addFloatingAnimation('.hero-illustration i');
    addPulseAnimation('.whatsapp-button');
    addGlowEffect('.btn-primary');
});

// ========== INTERSECTION OBSERVER FOR LAZY ANIMATIONS ==========
function createLazyAnimationObserver() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animClass = entry.target.getAttribute('data-animate');
                if (animClass) {
                    entry.target.classList.add(animClass);
                }
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('[data-animate]').forEach(el => {
        observer.observe(el);
    });
}

document.addEventListener('DOMContentLoaded', createLazyAnimationObserver);

// ========== CUSTOM EASINGS ==========
const Easing = {
    easeInQuad: t => t * t,
    easeOutQuad: t => t * (2 - t),
    easeInOutQuad: t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,
    easeInCubic: t => t * t * t,
    easeOutCubic: t => (--t) * t * t + 1,
    easeInOutCubic: t => t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * (t - 2)) * (2 * (t - 2)) + 1,
    easeInQuart: t => t * t * t * t,
    easeOutQuart: t => 1 - (--t) * t * t * t,
    easeInOutQuart: t => t < 0.5 ? 8 * t * t * t * t : 1 - 8 * (--t) * t * t * t,
};

// ========== SMOOTH SCROLL POLYFILL ==========
function smoothScrollPolyfill() {
    if (!('scrollBehavior' in document.documentElement.style)) {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href !== '#') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });
    }
}

document.addEventListener('DOMContentLoaded', smoothScrollPolyfill);

// ========== PERFORMANCE OPTIMIZATION ==========
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for continuous events
function throttle(func, limit) {
    let inThrottle;
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ========== ROTATING WORD IN HERO TITLE ==========
function initRotatingWord() {
    const rotatingElement = document.querySelector('.rotating-word');
    if (!rotatingElement) return;
    
    const words = ['Profesional', 'Amanah', 'Terpercaya', 'Berpengalaman', 'Handal'];
    let currentIndex = 0;
    
    // Set initial word
    rotatingElement.textContent = words[0];
    
    // Change word every 8 seconds (matches animation timing)
    // Change happens at 2.2 second mark (22% of 8s = 1.76s, but with smooth timing)
    setInterval(() => {
        currentIndex = (currentIndex + 1) % words.length;
        
        // Change text at the midpoint of the fade animation
        setTimeout(() => {
            rotatingElement.textContent = words[currentIndex];
        }, 1760); // 22% of 8000ms
    }, 8000);
}

// Initialize rotating word on page load
document.addEventListener('DOMContentLoaded', () => {
    initRotatingWord();
});

// ========== PERFORMANCE MONITORING ==========
if (window.performance && window.performance.mark) {
    window.addEventListener('load', () => {
        performance.mark('page-loaded');
        performance.measure('load-time', 'navigationStart', 'page-loaded');
        const measure = performance.getEntriesByName('load-time')[0];
        console.log(`Page loaded in ${measure.duration.toFixed(2)}ms`);
    });
}

console.log('%c✨ Animations initialized successfully!', 'color: #2ecc71; font-weight: bold;');
