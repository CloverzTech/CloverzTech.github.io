/* ============================================
   CLOVERTECH - BOOKING FORM SCRIPT
   ============================================ */

// Initialize booking form on page load
document.addEventListener('DOMContentLoaded', function() {
    // Initialize form to step 1
    initializeBookingForm();
    
    // Ensure form state is reset (no auto-scroll on page load)
    resetFormToStep1();
});

function resetFormToStep1() {
    // Reset to step 1
    currentStep = 1;
    isFormInitialized = false;
    
    // Hide all steps except first
    document.querySelectorAll('.form-step').forEach((el, index) => {
        if (index === 0) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
    
    // Reset step indicators - show only first
    document.querySelectorAll('.step').forEach((el, index) => {
        if (index === 0) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
}

function initializeBookingForm() {
    // Initialize price on load
    updatePriceTotal();
    
    // Add event listeners for all service checkboxes
    document.querySelectorAll('input[name="service"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            updatePriceTotal();
        });
    });
    
    // Setup date input constraints
    setupDateInput();
    
    // Location toggle handler
    document.querySelectorAll('input[name="location"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const addressGroup = document.getElementById('addressGroup');
            if (this.value === 'Home Service') {
                addressGroup.style.display = 'block';
            } else {
                addressGroup.style.display = 'none';
                document.getElementById('address').value = '';
            }
        });
    });
}

function setupDateInput() {
    const dateInput = document.getElementById('bookingDate');
    if (!dateInput) return;
    
    // Set minimum date to today
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const minDate = today.toISOString().split('T')[0];
    dateInput.setAttribute('min', minDate);
    
    // Set maximum date to 3 months from now
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);
    const maxDateString = maxDate.toISOString().split('T')[0];
    dateInput.setAttribute('max', maxDateString);
}

function updatePriceTotal() {
    const selectedServices = document.querySelectorAll('input[name="service"]:checked');
    let totalPrice = 0;
    let serviceCount = selectedServices.length;
    
    selectedServices.forEach(service => {
        const price = parseInt(service.getAttribute('data-price')) || 0;
        totalPrice += price;
    });
    
    // Display total price
    const totalPriceElement = document.getElementById('totalPrice');
    if (totalPriceElement) {
        totalPriceElement.textContent = formatCurrency(totalPrice);
    }
    
    // Update confirmation total if on step 4
    const confirmTotal = document.getElementById('confirmTotal');
    if (confirmTotal) {
        confirmTotal.textContent = formatCurrency(totalPrice);
    }
    
    return totalPrice;
}

function formatCurrency(amount) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0
    }).format(amount);
}

// Enhanced next step function with validation
function nextStep() {
    const currentFormStep = document.querySelector('.form-step.active');
    const stepNumber = Array.from(document.querySelectorAll('.form-step')).indexOf(currentFormStep) + 1;
    
    if (validateCurrentStep(stepNumber)) {
        if (stepNumber < 4) {
            showStep(stepNumber + 1);
        } else {
            submitBooking();
        }
    }
}

function previousStep() {
    const currentFormStep = document.querySelector('.form-step.active');
    const stepNumber = Array.from(document.querySelectorAll('.form-step')).indexOf(currentFormStep) + 1;
    
    if (stepNumber > 1) {
        showStep(stepNumber - 1);
    }
}

function showStep(stepNumber) {
    // Hide all steps
    document.querySelectorAll('.form-step').forEach(step => {
        step.classList.remove('active');
    });
    
    // Remove active from all step indicators
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
    });
    
    // Show specific step
    const formStep = document.querySelector(`#formStep${stepNumber}`);
    const stepIndicator = document.querySelector(`#step${stepNumber}`);
    
    if (formStep) formStep.classList.add('active');
    if (stepIndicator) stepIndicator.classList.add('active');
    
    // Update buttons
    updateNavigationButtons(stepNumber);
    
    // If on final step, update confirmation display
    if (stepNumber === 4) {
        updateConfirmationDisplay();
    }
    
    // Scroll to form
    setTimeout(() => {
        document.querySelector('.booking-form-container').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }, 100);
}

function updateNavigationButtons(stepNumber) {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const submitBtn = document.getElementById('submitBtn');
    
    // Show previous button only if not on first step
    prevBtn.style.display = stepNumber > 1 ? 'flex' : 'none';
    
    // Show next or submit button
    if (stepNumber === 4) {
        nextBtn.style.display = 'none';
        submitBtn.style.display = 'flex';
    } else {
        nextBtn.style.display = 'flex';
        submitBtn.style.display = 'none';
    }
}

function validateCurrentStep(stepNumber) {
    switch(stepNumber) {
        case 1:
            return validateServiceSelection();
        case 2:
            return validateSchedule();
        case 3:
            return validateCustomerData();
        default:
            return true;
    }
}

function validateServiceSelection() {
    const selectedServices = document.querySelectorAll('input[name="service"]:checked');
    
    if (selectedServices.length === 0) {
        showNotification('⚠️ Silakan pilih minimal satu layanan', 'warning');
        return false;
    }
    
    return true;
}

function validateSchedule() {
    const dateInput = document.getElementById('bookingDate');
    const timeInput = document.getElementById('bookingTime');
    const locationRadio = document.querySelector('input[name="location"]:checked');
    
    // Validate date and time
    if (!dateInput.value) {
        showNotification('⚠️ Silakan pilih tanggal booking', 'warning');
        dateInput.focus();
        return false;
    }
    
    if (!timeInput.value) {
        showNotification('⚠️ Silakan pilih jam kunjungan', 'warning');
        timeInput.focus();
        return false;
    }
    
    // Validate date is not in the past
    const selectedDate = new Date(dateInput.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
        showNotification('⚠️ Tanggal tidak boleh kurang dari hari ini', 'warning');
        dateInput.focus();
        return false;
    }
    
    // If home service, validate address
    if (locationRadio.value === 'Home Service') {
        const addressInput = document.getElementById('address');
        if (!addressInput.value.trim()) {
            showNotification('⚠️ Silakan masukkan alamat lengkap untuk home service', 'warning');
            addressInput.focus();
            return false;
        }
        
        if (addressInput.value.trim().length < 10) {
            showNotification('⚠️ Alamat terlalu singkat. Berikan alamat yang lebih lengkap', 'warning');
            addressInput.focus();
            return false;
        }
    }
    
    return true;
}

function validateCustomerData() {
    const fullNameInput = document.getElementById('fullName');
    const whatsappInput = document.getElementById('whatsapp');
    const emailInput = document.getElementById('email');
    
    // Validate name
    if (!fullNameInput.value.trim()) {
        showNotification('⚠️ Silakan masukkan nama lengkap', 'warning');
        fullNameInput.focus();
        return false;
    }
    
    if (fullNameInput.value.trim().length < 3) {
        showNotification('⚠️ Nama terlalu singkat', 'warning');
        fullNameInput.focus();
        return false;
    }
    
    // Validate WhatsApp
    if (!whatsappInput.value.trim()) {
        showNotification('⚠️ Silakan masukkan nomor WhatsApp', 'warning');
        whatsappInput.focus();
        return false;
    }
    
    // Validate WhatsApp format (basic)
    const whatsappRegex = /^(\+62|62|0)[0-9]{9,12}$/;
    const cleanWhatsapp = whatsappInput.value.trim();
    
    if (!whatsappRegex.test(cleanWhatsapp)) {
        showNotification('⚠️ Format nomor WhatsApp tidak valid. Contoh: 62812345678', 'warning');
        whatsappInput.focus();
        return false;
    }
    
    // Validate email
    if (!emailInput.value.trim()) {
        showNotification('⚠️ Silakan masukkan email', 'warning');
        emailInput.focus();
        return false;
    }
    
    if (!isValidEmail(emailInput.value.trim())) {
        showNotification('⚠️ Format email tidak valid', 'warning');
        emailInput.focus();
        return false;
    }
    
    return true;
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function updateConfirmationDisplay() {
    // Get all form data
    const selectedServices = Array.from(document.querySelectorAll('input[name="service"]:checked'))
        .map(s => s.value)
        .join(', ');
    
    const dateInput = document.getElementById('bookingDate').value;
    const timeInput = document.getElementById('bookingTime').value;
    const locationInput = document.querySelector('input[name="location"]:checked').value;
    const addressInput = document.getElementById('address').value;
    const fullNameInput = document.getElementById('fullName').value;
    const whatsappInput = document.getElementById('whatsapp').value;
    const emailInput = document.getElementById('email').value;
    
    // Format date
    let formattedDate = '-';
    if (dateInput) {
        const date = new Date(dateInput);
        formattedDate = date.toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    }
    
    // Update confirmation display
    document.getElementById('confirmServices').textContent = selectedServices || '-';
    document.getElementById('confirmDate').textContent = formattedDate;
    document.getElementById('confirmTime').textContent = timeInput || '-';
    document.getElementById('confirmLocation').textContent = locationInput || '-';
    document.getElementById('confirmName').textContent = fullNameInput || '-';
    document.getElementById('confirmWhatsapp').textContent = whatsappInput || '-';
    
    // Update total price
    document.getElementById('confirmTotal').textContent = document.getElementById('totalPrice').textContent;
    
    // If home service, add address to confirmation
    const confirmLocation = document.querySelector('.summary-item:has(#confirmLocation)');
    if (locationInput === 'Home Service' && addressInput) {
        // Add address summary if not exists
        const existingAddress = document.getElementById('confirmAddress');
        if (!existingAddress) {
            const addressItem = document.createElement('div');
            addressItem.className = 'summary-item';
            addressItem.innerHTML = `
                <span>Alamat:</span>
                <span id="confirmAddress">${addressInput}</span>
            `;
            confirmLocation.parentElement.insertBefore(addressItem, confirmLocation.nextElementSibling);
        } else {
            existingAddress.textContent = addressInput;
        }
    }
}

function submitBooking() {
    // Disable submit button
    const submitBtn = document.getElementById('submitBtn');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Diproses...';
    
    // Gather all booking data
    const bookingData = {
        services: Array.from(document.querySelectorAll('input[name="service"]:checked'))
            .map(s => s.value)
            .join(', '),
        date: document.getElementById('bookingDate').value,
        time: document.getElementById('bookingTime').value,
        location: document.querySelector('input[name="location"]:checked').value,
        address: document.getElementById('address').value || '-',
        name: document.getElementById('fullName').value,
        whatsapp: document.getElementById('whatsapp').value,
        email: document.getElementById('email').value,
        notes: document.getElementById('notes').value || 'Tidak ada catatan tambahan',
        totalPrice: document.getElementById('totalPrice').textContent
    };
    
    // Format date for display
    const date = new Date(bookingData.date);
    const formattedDate = date.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // Create WhatsApp message
    const whatsappMessage = `
🎯 *BOOKING LAYANAN CLOVERTECH*

📋 *Detail Pesanan:*
━━━━━━━━━━━━━━━━━━━━━━
*Layanan:* ${bookingData.services}
*Tanggal:* ${formattedDate}
*Jam:* ${bookingData.time}
*Lokasi:* ${bookingData.location}
${bookingData.location === 'Home Service' ? `*Alamat:* ${bookingData.address}\n` : ''}

👤 *Data Pelanggan:*
━━━━━━━━━━━━━━━━━━━━━━
*Nama:* ${bookingData.name}
*WhatsApp:* ${bookingData.whatsapp}
*Email:* ${bookingData.email}

💬 *Catatan Tambahan:*
${bookingData.notes}

💰 *Estimasi Total:* ${bookingData.totalPrice}

━━━━━━━━━━━━━━━━━━━━━━
Terima kasih telah mempercayai CloverTech!
Kami akan segera menghubungi Anda untuk konfirmasi.
    `.trim();
    
    // Encode message for WhatsApp
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp number - CloverTech official number
    const whatsappNumber = '62858481555578';
    
    // Create WhatsApp link
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    // Simulate processing delay
    setTimeout(() => {
        // Reset button
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        
        // Show success notification
        showNotification('✅ Booking siap dikirim ke WhatsApp!', 'success');
        
        // Redirect to WhatsApp after short delay
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
            
            // Show follow-up notification
            setTimeout(() => {
                showNotification('📱 Pesan booking telah dikirim ke WhatsApp. Tunggu konfirmasi dari kami!', 'info');
            }, 500);
            
            // Reset form after a longer delay
            setTimeout(() => {
                resetBookingForm();
            }, 2000);
        }, 500);
    }, 800);
}

function resetBookingForm() {
    // Reset all form fields
    document.getElementById('bookingForm').reset();
    
    // Uncheck all checkboxes
    document.querySelectorAll('input[name="service"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    // Reset to first step
    showStep(1);
    
    // Update price total
    updatePriceTotal();
    
    // Hide address group
    document.getElementById('addressGroup').style.display = 'none';
    
    // Show success message
    showNotification('✨ Form telah direset. Siap untuk booking berikutnya!', 'success');
    
    // Scroll to top of form
    setTimeout(() => {
        document.querySelector('.booking-form-container').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }, 100);
}

// Initialize form when document is ready
document.addEventListener('DOMContentLoaded', function() {
    // Set first step as active
    showStep(1);
    updateNavigationButtons(1);
});
