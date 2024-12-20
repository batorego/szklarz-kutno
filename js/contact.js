// Contact page specific functionality
export function initContactPage() {
    // Initialize map if needed
    const mapSection = document.querySelector('.map-section');
    if (mapSection) {
        // Add any map-specific functionality here
        // For example, you might want to add click handlers or custom map controls
    }

    // Format phone numbers using the utility function
    /*const phoneNumbers = document.querySelectorAll('a[href^="tel:"]');
    phoneNumbers.forEach(phone => {
        const number = phone.getAttribute('href').replace('tel:', '');
        const formattedNumber = formatPhoneNumber(number);
        if (phone.textContent.includes('📞')) {
            phone.innerHTML = `<span class="phone-icon">📞</span> ${formattedNumber}`;
        } else {
            phone.textContent = formattedNumber;
        }
    });*/
}

function formatPhoneNumber(phoneNumber) {
    return phoneNumber.replace(/(.\d{2}) (\d{3})(\d{3})(\d{3})/, '$1 $2 $3 $4');
}
