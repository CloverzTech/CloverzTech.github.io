/* ============================================
   CLOVERTECH - MAIN JAVASCRIPT
   ============================================ */

// Disable automatic scroll restoration
if ('scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
}

// Force scroll to top on window load (after all resources loaded)
window.addEventListener('load', function() {
    function forceScroll() {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }
    
    // Try multiple times
    forceScroll();
    setTimeout(forceScroll, 0);
    setTimeout(forceScroll, 50);
});

// Handle back button - reset scroll to top
window.addEventListener('popstate', function() {
    setTimeout(function() {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }, 10);
});

// ========== GLOBAL VARIABLES ==========
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const darkModeToggle = document.getElementById('darkModeToggle');
const backToTop = document.getElementById('backToTop');
const html = document.documentElement;

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function() {
    // CRITICAL: Force scroll to top AFTER DOM fully loaded
    // Use aggressive timing to override browser scroll restoration
    // Multiple attempts at different timing intervals - keep fighting!
    
    function forceScroll() {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
    }
    
    // Immediate
    forceScroll();
    
    // Try again at 0ms (next event cycle)
    setTimeout(forceScroll, 0);
    
    // Try again at 50ms
    setTimeout(forceScroll, 50);
    
    // Try again at 100ms
    setTimeout(forceScroll, 100);
    
    // Try again at 200ms
    setTimeout(forceScroll, 200);
    
    // Prevent disabled buttons from being clickable
    const disabledButtons = document.querySelectorAll('button[disabled]');
    disabledButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }, true);
        
        // Also prevent hover effects
        btn.style.pointerEvents = 'none';
    });
    
    initializeDarkMode();
    initializeNavigation();
    initializeScrollEffects();
    initializeTestimonialCarousel();
    initializeContactForm();
    
    // Delay smooth scroll to avoid auto-scroll on page load
    setTimeout(function() {
        smoothScroll();
    }, 500);
});

// ========== DARK MODE FUNCTIONALITY ==========
function initializeDarkMode() {
    const darkMode = localStorage.getItem('darkMode') === 'true';
    
    if (darkMode) {
        document.body.classList.add('dark-mode');
        updateDarkModeIcon();
    }
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleDarkMode);
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDarkMode = document.body.classList.contains('dark-mode');
    
    // Save to localStorage
    localStorage.setItem('darkMode', isDarkMode.toString());
    
    // Update icon
    updateDarkModeIcon();
    
    // Force layout recalculation
    document.body.offsetHeight;
}

function updateDarkModeIcon() {
    if (!darkModeToggle) return;
    
    const isDarkMode = document.body.classList.contains('dark-mode');
    darkModeToggle.innerHTML = isDarkMode ? '<i class="fas fa-sun"></i>' : '<i class="fas fa-moon"></i>';
}

// ========== NAVIGATION FUNCTIONALITY ==========
function initializeNavigation() {
    // Hamburger menu toggle
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.navbar')) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
}

// ========== SCROLL EFFECTS ==========
function initializeScrollEffects() {
    window.addEventListener('scroll', function() {
        // Back to top button
        if (window.scrollY > 300) {
            backToTop.classList.add('show');
        } else {
            backToTop.classList.remove('show');
        }
        
        // Navbar shadow on scroll
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 0) {
            navbar.style.boxShadow = 'var(--shadow-md)';
        } else {
            navbar.style.boxShadow = 'var(--shadow-sm)';
        }
    });
    
    // Back to top button click
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ========== SMOOTH SCROLL NAVIGATION ==========
function smoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ========== ANIMATIONS ON SCROLL ==========
class AOS {
    constructor() {
        this.elements = document.querySelectorAll('[data-aos]');
        this.init();
    }
    
    init() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const delay = entry.target.getAttribute('data-aos-delay') || 0;
                    setTimeout(() => {
                        entry.target.classList.add('aos-animate');
                    }, delay);
                    this.observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });
        
        this.elements.forEach(element => {
            this.observer.observe(element);
        });
    }
}

// Initialize AOS
new AOS();

// ========== TESTIMONIALS CAROUSEL ==========
let currentTestimonialIndex = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');
const totalTestimonials = testimonialCards.length;

function initializeTestimonialCarousel() {
    updateTestimonialDots();
    showTestimonial(0);
}

function showTestimonial(index) {
    testimonialCards.forEach(card => {
        card.classList.remove('active');
    });
    
    testimonialCards[index].classList.add('active');
    
    // Update dots
    const dots = document.querySelectorAll('.dot');
    dots.forEach(dot => {
        dot.classList.remove('active');
    });
    if (dots[index]) {
        dots[index].classList.add('active');
    }
    
    currentTestimonialIndex = index;
}

function scrollTestimonials(direction) {
    let newIndex = currentTestimonialIndex + direction;
    
    if (newIndex < 0) {
        newIndex = totalTestimonials - 1;
    } else if (newIndex >= totalTestimonials) {
        newIndex = 0;
    }
    
    showTestimonial(newIndex);
}

function updateTestimonialDots() {
    const dotsContainer = document.getElementById('testimonialDots');
    dotsContainer.innerHTML = '';
    
    for (let i = 0; i < totalTestimonials; i++) {
        const dot = document.createElement('div');
        dot.className = 'dot';
        if (i === 0) dot.classList.add('active');
        dot.addEventListener('click', () => showTestimonial(i));
        dotsContainer.appendChild(dot);
    }
}

// Auto-slide testimonials every 5 seconds
setInterval(() => {
    scrollTestimonials(1);
}, 5000);

// ========== FAQ ACCORDION ==========
function toggleFaq(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all other FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.faq-answer').classList.remove('active');
    });
    
    // Toggle current item
    if (!isActive) {
        faqItem.classList.add('active');
        element.nextElementSibling.classList.add('active');
    }
}

// ========== CONTACT FORM ==========
function initializeContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const button = this.querySelector('button[type="submit"]');
            const originalText = button.innerHTML;
            
            button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Mengirim...';
            button.disabled = true;
            
            // FormSubmit.co will handle the actual email submission
            // Show success message to user
            setTimeout(() => {
                button.innerHTML = '<i class="fas fa-check"></i> Terkirim!';
                showNotification('✅ Pesan Anda telah dikirim ke pamanerizqi@gmail.com! Kami akan segera merespons.', 'success');
                
                setTimeout(() => {
                    button.innerHTML = originalText;
                    button.disabled = false;
                }, 3000);
            }, 800);
        });
    }
}

// ========== BOOKING FORM FUNCTIONS ==========
let currentStep = 1;
const totalSteps = 4;
let isFormInitialized = false;

function nextStep() {
    if (validateStep(currentStep)) {
        if (currentStep < totalSteps) {
            updateFormStep(currentStep + 1);
            currentStep++;
        } else {
            submitBooking();
        }
    }
}

function previousStep() {
    if (currentStep > 1) {
        updateFormStep(currentStep - 1);
        currentStep--;
    }
}

function validateStep(step) {
    switch(step) {
        case 1:
            // Validate service selection
            const services = document.querySelectorAll('input[name="service"]:checked');
            if (services.length === 0) {
                showNotification('Silakan pilih minimal satu layanan', 'warning');
                return false;
            }
            updatePriceTotal();
            return true;
        
        case 2:
            // Validate date and time
            const date = document.getElementById('bookingDate').value;
            const time = document.getElementById('bookingTime').value;
            
            if (!date || !time) {
                showNotification('Silakan pilih tanggal dan jam', 'warning');
                return false;
            }
            
            // Check if home service and address is filled
            const location = document.querySelector('input[name="location"]:checked').value;
            if (location === 'Home Service') {
                const address = document.getElementById('address').value;
                if (!address.trim()) {
                    showNotification('Silakan masukkan alamat lengkap', 'warning');
                    return false;
                }
            }
            return true;
        
        case 3:
            // Validate customer data
            const name = document.getElementById('fullName').value;
            const whatsapp = document.getElementById('whatsapp').value;
            const email = document.getElementById('email').value;
            
            if (!name.trim() || !whatsapp.trim() || !email.trim()) {
                showNotification('Silakan lengkapi semua data pelanggan', 'warning');
                return false;
            }
            
            // Validate email format
            if (!isValidEmail(email)) {
                showNotification('Format email tidak valid', 'warning');
                return false;
            }
            
            return true;
        
        default:
            return true;
    }
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function updateFormStep(step) {
    // Hide all steps
    document.querySelectorAll('.form-step').forEach(el => {
        el.classList.remove('active');
    });
    
    // Update step indicators
    document.querySelectorAll('.step').forEach(el => {
        el.classList.remove('active');
    });
    
    // Show current step
    document.getElementById(`formStep${step}`).classList.add('active');
    document.getElementById(`step${step}`).classList.add('active');
    
    // Update buttons
    updateFormButtons(step);
    
    // Update confirmation if on final step
    if (step === totalSteps) {
        updateConfirmation();
    }
    
    // Scroll to form ONLY if user interacted (not on initial page load)
    if (isFormInitialized) {
        document.querySelector('.booking-form-container').scrollIntoView({ behavior: 'smooth' });
    }
}

function updateFormButtons(step) {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    // Show/hide previous button
    prevBtn.style.display = step > 1 ? 'flex' : 'none';
    
    // Show next or submit button
    if (step === totalSteps) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'flex';
    } else {
        nextBtn.style.display = 'flex';
        submitBtn.style.display = 'none';
    }
}

function updatePriceTotal() {
    const selectedServices = document.querySelectorAll('input[name="service"]:checked');
    let total = 0;
    
    selectedServices.forEach(service => {
        const price = parseInt(service.getAttribute('data-price')) || 0;
        total += price;
    });
    
    // Format as currency
    const formattedPrice = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(total);
    
    document.getElementById('totalPrice').textContent = formattedPrice;
}

function updateLocationField() {
    const location = document.querySelector('input[name="location"]:checked').value;
    const addressGroup = document.getElementById('addressGroup');
    
    if (location === 'Home Service') {
        addressGroup.style.display = 'block';
    } else {
        addressGroup.style.display = 'none';
        document.getElementById('address').value = '';
    }
}

// Listen to location changes
document.querySelectorAll('input[name="location"]').forEach(radio => {
    radio.addEventListener('change', updateLocationField);
});

// Update price when services change
document.querySelectorAll('input[name="service"]').forEach(checkbox => {
    checkbox.addEventListener('change', updatePriceTotal);
});

function updateConfirmation() {
    // Services
    const services = document.querySelectorAll('input[name="service"]:checked');
    const serviceNames = Array.from(services).map(s => s.value).join(', ');
    document.getElementById('confirmServices').textContent = serviceNames || '-';
    
    // Date & Time
    const date = document.getElementById('bookingDate').value;
    const time = document.getElementById('bookingTime').value;
    const location = document.querySelector('input[name="location"]:checked').value;
    
    if (date) {
        const dateObj = new Date(date);
        const formattedDate = dateObj.toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        document.getElementById('confirmDate').textContent = formattedDate;
    }
    
    document.getElementById('confirmTime').textContent = time || '-';
    document.getElementById('confirmLocation').textContent = location || '-';
    
    // Customer data
    document.getElementById('confirmName').textContent = document.getElementById('fullName').value || '-';
    document.getElementById('confirmWhatsapp').textContent = document.getElementById('whatsapp').value || '-';
    
    // Total price
    document.getElementById('confirmTotal').textContent = document.getElementById('totalPrice').textContent;
}

function openBooking(serviceName) {
    // Mark form as initialized (user interaction)
    isFormInitialized = true;
    
    // Scroll to booking section
    const bookingSection = document.getElementById('booking');
    bookingSection.scrollIntoView({ behavior: 'smooth' });
    
    // Reset form
    currentStep = 1;
    updateFormStep(1);
    
    // Pre-select the service
    setTimeout(() => {
        const serviceCheckbox = document.querySelector(`input[name="service"][value="${serviceName}"]`);
        if (serviceCheckbox) {
            serviceCheckbox.checked = true;
            updatePriceTotal();
        }
    }, 100);
}

function submitBooking() {
    // Get all form data
    const services = Array.from(document.querySelectorAll('input[name="service"]:checked')).map(s => s.value).join(', ');
    const date = document.getElementById('bookingDate').value;
    const time = document.getElementById('bookingTime').value;
    const location = document.querySelector('input[name="location"]:checked').value;
    const address = document.getElementById('address').value;
    const fullName = document.getElementById('fullName').value;
    const whatsapp = document.getElementById('whatsapp').value;
    const email = document.getElementById('email').value;
    const notes = document.getElementById('notes').value;
    
    // Format message for WhatsApp
    const message = `Halo CloverTech! Saya ingin melakukan booking dengan detail berikut:

*Layanan:* ${services}
*Tanggal:* ${new Date(date).toLocaleDateString('id-ID')}
*Jam:* ${time}
*Lokasi:* ${location}
${location === 'Home Service' ? `*Alamat:* ${address}\n` : ''}
*Nama:* ${fullName}
*Email:* ${email}
*Nomor WhatsApp:* ${whatsapp}
${notes ? `*Catatan:* ${notes}` : ''}

Terima kasih!`;
    
    // WhatsApp link (replace with your actual number)
    const whatsappNumber = '62xxxxxxxxxx'; // Replace with your WhatsApp number
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Show success message
    showNotification('Anda akan dialihkan ke WhatsApp untuk konfirmasi booking!', 'success');
    
    // Reset form after delay
    setTimeout(() => {
        document.getElementById('bookingForm').reset();
        currentStep = 1;
        updateFormStep(1);
        updatePriceTotal();
    }, 1000);
}

// ========== NOTIFICATION SYSTEM ==========
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas fa-${type === 'success' ? 'check-circle' : type === 'error' ? 'exclamation-circle' : type === 'warning' ? 'exclamation-triangle' : 'info-circle'}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove();">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    // Add styles
    const style = document.createElement('style');
    style.textContent = `
        .notification {
            position: fixed;
            top: 20px;
            right: 20px;
            max-width: 400px;
            padding: 16px 20px;
            border-radius: 8px;
            background: white;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 15px;
            z-index: 10000;
            animation: slideIn 0.3s ease-in-out;
        }
        
        .notification-success {
            background: #d4edda;
            color: #155724;
            border-left: 4px solid #28a745;
        }
        
        .notification-error {
            background: #f8d7da;
            color: #721c24;
            border-left: 4px solid #dc3545;
        }
        
        .notification-warning {
            background: #fff3cd;
            color: #856404;
            border-left: 4px solid #ffc107;
        }
        
        .notification-info {
            background: #d1ecf1;
            color: #0c5460;
            border-left: 4px solid #17a2b8;
        }
        
        .notification-content {
            display: flex;
            align-items: center;
            gap: 10px;
            flex: 1;
        }
        
        .notification-close {
            background: none;
            border: none;
            cursor: pointer;
            font-size: 1.2rem;
            color: inherit;
            padding: 0;
            display: flex;
            align-items: center;
        }
        
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        @media (max-width: 768px) {
            .notification {
                right: 10px;
                left: 10px;
                max-width: none;
            }
        }
    `;
    
    if (!document.querySelector('style[data-notification]')) {
        style.setAttribute('data-notification', '');
        document.head.appendChild(style);
    }
    
    document.body.appendChild(notification);
    
    // Auto remove after 4 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOut 0.3s ease-in-out forwards';
        setTimeout(() => notification.remove(), 300);
    }, 4000);
}

// ========== UTILITY FUNCTIONS ==========

// Format currency
function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(amount);
}

// Set minimum date to today
document.addEventListener('DOMContentLoaded', function() {
    const dateInput = document.getElementById('bookingDate');
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.setAttribute('min', today);
    }
});

// ========== ERROR HANDLING ==========
window.addEventListener('error', function(event) {
    console.error('Error:', event.error);
});

// ========== CONSOLE MESSAGE ==========
console.log('%cCloverTech Website', 'font-size: 20px; font-weight: bold; color: #2ecc71;');
console.log('%cSolusi Lengkap Komputer & Teknologi Anda', 'font-size: 14px; color: #2c3e50;');
