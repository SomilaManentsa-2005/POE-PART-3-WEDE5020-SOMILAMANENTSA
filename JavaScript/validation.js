/**
 * Form Validation Script for Kasi-Tech Solutions
 * Supports both Contact Us and Enquiry pages
 */
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    
    if (!contactForm) return;

    contactForm.setAttribute('novalidate', 'true');

    contactForm.addEventListener('submit', function(e) {
        let isValid = true;

        // Check if we are on the Enquiry page vs Contact Us page
        const isEnquiryPage = document.getElementById('fullname') !== null;

        let firstName, surname, phone, email;
        let nameError = document.getElementById('nameError');
        let phoneError = document.getElementById('phonenumberError');
        let emailError = document.getElementById('EmailError');

        // Clear previous error messages safely
        if (nameError) nameError.textContent = '';
        if (phoneError) phoneError.textContent = '';
        if (emailError) emailError.textContent = '';

        if (isEnquiryPage) {
            // --- ENQUIRY FORM VALIDATION ---
            firstName = document.getElementById('fullname');
            email = document.getElementById('email');
            phone = document.getElementById('phone');
            const category = document.getElementById('category');

            if (!firstName || firstName.value.trim() === '') {
                if (nameError) nameError.textContent = 'Full name is required.';
                isValid = false;
            }

            if (!email || email.value.trim() === '') {
                if (emailError) emailError.textContent = 'Email address is required.';
                isValid = false;
            } else {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email.value.trim())) {
                    if (emailError) emailError.textContent = 'Please enter a valid email address.';
                    isValid = false;
                }
            }

            if (category && category.value === '') {
                alert('Please select an enquiry category.');
                isValid = false;
            }

        } else {
            // --- CONTACT US FORM VALIDATION ---
            firstName = document.getElementById('Name');
            surname = document.getElementById('Surname');
            phone = document.getElementById('ContactNumber');
            email = document.getElementById('Email');

            let nameFieldValid = true;
            let errorMessage = '';

            if (!firstName || firstName.value.trim() === '') {
                errorMessage = 'Please enter your first name.';
                nameFieldValid = false;
            }
            if (!surname || surname.value.trim() === '') {
                errorMessage = errorMessage ? 'Please enter both your first and last name.' : 'Please enter your last name.';
                nameFieldValid = false;
            }

            if (!nameFieldValid) {
                if (nameError) nameError.textContent = errorMessage;
                isValid = false;
            }

            if (phone) {
                const phoneVal = phone.value.trim();
                const phoneRegex = /^(\+27|0)?[0-9]{9,10}$|^[0-9\s\-\+\(\)]{10,15}$/;
                
                if (phoneVal === '') {
                    if (phoneError) phoneError.textContent = 'Phone number is required.';
                    isValid = false;
                } else if (!phoneRegex.test(phoneVal)) {
                    if (phoneError) phoneError.textContent = 'Please enter a valid phone number.';
                    isValid = false;
                }
            }

            if (email) {
                const emailVal = email.value.trim();
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

                if (emailVal === '') {
                    if (emailError) emailError.textContent = 'Email address is required.';
                    isValid = false;
                } else if (!emailRegex.test(emailVal)) {
                    if (emailError) emailError.textContent = 'Please enter a valid email address.';
                    isValid = false;
                }
            }
        }

        // Final Submissions Action
        if (!isValid) {
            e.preventDefault();
        } else {
            e.preventDefault();
            alert('Thank you! Your submission has been received successfully.');
            contactForm.reset();
        }
    });
});