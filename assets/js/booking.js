/* ============================================
   CLOVERTECH - BOOKING FORM SCRIPT
   Encoding: UTF-8
   ============================================ */

// Initialize booking form on page load
document.addEventListener('DOMContentLoaded', function() {
    initializeBookingForm();
    resetFormToStep1();
});

function resetFormToStep1() {
    currentStep = 1;
    isFormInitialized = false;
    
    document.querySelectorAll('.form-step').forEach((el, index) => {
        if (index === 0) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
    
    document.querySelectorAll('.step').forEach((el, index) => {
        if (index === 0) {
            el.classList.add('active');
        } else {
            el.classList.remove('active');
        }
    });
}

function initializeBookingForm() {
    updatePriceTotal();
    
    document.querySelectorAll('input[name="service"]').forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            updatePriceTotal();
        });
    });
    
    setupDateInput();
    
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
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const minDate = today.toISOString().split('T')[0];
    dateInput.setAttribute('min', minDate);
    
    const maxDate = new Date();
    maxDate.setMonth(maxDate.getMonth() + 3);
    const maxDateString = maxDate.toISOString().split('T')[0];
    dateInput.setAttribute('max', maxDateString);
}

function updatePriceTotal() {
    const selectedServices = document.querySelectorAll('input[name="service"]:checked');
    let totalPrice = 0;
    
    selectedServices.forEach(service => {
        const price = parseInt(service.getAttribute('data-price')) || 0;
        totalPrice += price;
    });
    
    const totalPriceElement = document.getElementById('totalPrice');
    if (totalPriceElement) {
        totalPriceElement.textContent = formatCurrency(totalPrice);
    }
    
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
    document.querySelectorAll('.form-step').forEach(step => {
        step.classList.remove('active');
    });
    
    document.querySelectorAll('.step').forEach(step => {
        step.classList.remove('active');
    });
    
    const formStep = document.querySelector(`#formStep${stepNumber}`);
    const stepIndicator = document.querySelector(`#step${stepNumber}`);
    
    if (formStep) formStep.classList.add('active');
    if (stepIndicator) stepIndicator.classList.add('active');
    
    updateNavigationButtons(stepNumber);
    
    if (stepNumber === 4) {
        updateConfirmationDisplay();
    }
    
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
    
    prevBtn.style.display = stepNumber > 1 ? 'flex' : 'none';
    
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
    
    const selectedDate = new Date(dateInput.value);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    if (selectedDate < today) {
        showNotification('⚠️ Tanggal tidak boleh kurang dari hari ini', 'warning');
        dateInput.focus();
        return false;
    }
    
    if (locationRadio.value === 'Home Service') {
        const addressInput = document.getElementById('address');
        if (!addressInput.value.trim()) {
            showNotification('⚠️ Silakan masukkan alamat lengkap untuk home service', 'warning');
            addressInput.focus();
            return false;
        }
        
        if (addressInput.value.trim().length < 10) {
            showNotification('⚠️ Alamat terlalu singkat', 'warning');
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
    
    if (!whatsappInput.value.trim()) {
        showNotification('⚠️ Silakan masukkan nomor WhatsApp', 'warning');
        whatsappInput.focus();
        return false;
    }
    
    const whatsappRegex = /^(\+62|62|0)[0-9]{9,12}$/;
    const cleanWhatsapp = whatsappInput.value.trim();
    
    if (!whatsappRegex.test(cleanWhatsapp)) {
        showNotification('⚠️ Format nomor WhatsApp tidak valid', 'warning');
        whatsappInput.focus();
        return false;
    }
    
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
    const selectedServices = Array.from(document.querySelectorAll('input[name="service"]:checked'))
        .map(s => s.value)
        .join(', ');
    
    const dateInput = document.getElementById('bookingDate').value;
    const timeInput = document.getElementById('bookingTime').value;
    const locationInput = document.querySelector('input[name="location"]:checked').value;
    const addressInput = document.getElementById('address').value;
    const fullNameInput = document.getElementById('fullName').value;
    const whatsappInput = document.getElementById('whatsapp').value;
    
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
    
    document.getElementById('confirmServices').textContent = selectedServices || '-';
    document.getElementById('confirmDate').textContent = formattedDate;
    document.getElementById('confirmTime').textContent = timeInput || '-';
    document.getElementById('confirmLocation').textContent = locationInput || '-';
    document.getElementById('confirmName').textContent = fullNameInput || '-';
    document.getElementById('confirmWhatsapp').textContent = whatsappInput || '-';
    document.getElementById('confirmTotal').textContent = document.getElementById('totalPrice').textContent;
    
    const confirmLocation = document.querySelector('.summary-item:has(#confirmLocation)');
    if (locationInput === 'Home Service' && addressInput) {
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
    const submitBtn = document.getElementById('submitBtn');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Diproses...';
    
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
    
    const date = new Date(bookingData.date);
    const formattedDate = date.toLocaleDateString('id-ID', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    
    // ✅ Menggunakan emoji yang lebih kompatibel
    const whatsappMessage = 
        '\uD83C\uDF40 *BOOKING LAYANAN CLOVERTECH*\n\n' +
        '\uD83C\uDF40 *Detail Pesanan:*\n' +
        '━━━━━━━━━━━━━━━━━━━━━━\n' +
        '*Layanan:* ' + bookingData.services + '\n' +
        '*Tanggal:* ' + formattedDate + '\n' +
        '*Jam:* ' + bookingData.time + '\n' +
        '*Lokasi:* ' + bookingData.location + '\n' +
        (bookingData.location === 'Home Service' ? '*Alamat:* ' + bookingData.address + '\n' : '') +
        '\n' +
        '\uD83C\uDF40 *Data Pelanggan:*\n' +
        '━━━━━━━━━━━━━━━━━━━━━━\n' +
        '*Nama:* ' + bookingData.name + '\n' +
        '*WhatsApp:* ' + bookingData.whatsapp + '\n' +
        '*Email:* ' + bookingData.email + '\n' +
        '\n' +
        '\uD83C\uDF40 *Catatan Tambahan:*\n' +
        bookingData.notes + '\n' +
        '\n' +
        '\uD83C\uDF40 *Estimasi Total:* ' + bookingData.totalPrice + '\n' +
        '\n' +
        '━━━━━━━━━━━━━━━━━━━━━━\n' +
        'Terima kasih telah mempercayai CloverTech!\n' +
        'Kami akan segera menghubungi Anda untuk konfirmasi.';
    
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappNumber = '6287870180184';
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        showNotification('✅ Booking siap dikirim ke WhatsApp!', 'success');
        
        setTimeout(() => {
            window.open(whatsappUrl, '_blank');
            
            setTimeout(() => {
                showNotification('📱 Pesan booking telah dikirim ke WhatsApp!', 'info');
            }, 500);
            
            setTimeout(() => {
                resetBookingForm();
            }, 2000);
        }, 500);
    }, 800);
}

function resetBookingForm() {
    document.getElementById('bookingForm').reset();
    
    document.querySelectorAll('input[name="service"]').forEach(checkbox => {
        checkbox.checked = false;
    });
    
    showStep(1);
    updatePriceTotal();
    document.getElementById('addressGroup').style.display = 'none';
    showNotification('✨ Form telah direset!', 'success');
    
    setTimeout(() => {
        document.querySelector('.booking-form-container').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }, 100);
}

document.addEventListener('DOMContentLoaded', function() {
    showStep(1);
    updateNavigationButtons(1);
});
