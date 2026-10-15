/**
 * Form Validation Script for Kasi-Tech Solutions
 * Supports both Contact Us and Enquiry pages with comprehensive red inline validation on all fields.
 */
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.contact-form');
    
    if (!contactForm) return;

    contactForm.setAttribute('novalidate', 'true');

    contactForm.addEventListener('submit', function(e) {
        let isValid = true;

        // 1. Clear all previous error texts and input red highlights
        document.querySelectorAll('.error-message').forEach(span => span.textContent = '');
        document.querySelectorAll('input, select, textarea').forEach(input => input.classList.remove('input-error'));

        // Check if we are on the Enquiry page vs Contact Us page
        const isEnquiryPage = document.getElementById('fullname') !== null;

        let nameError = document.getElementById('nameError');
        let phoneError = document.getElementById('phonenumberError');
        let emailError = document.getElementById('EmailError');
        let categoryError = document.getElementById('categoryError');
        let messageError = document.getElementById('messageError');

        if (isEnquiryPage) {
            // --- ENQUIRY FORM VALIDATION ---
            const fullname = document.getElementById('fullname');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const location = document.getElementById('location');
            const category = document.getElementById('category');
            const message = document.getElementById('message');

            if (!fullname || fullname.value.trim() === '') {
                if (nameError) nameError.textContent = 'Full name is required.';
                if (fullname) fullname.classList.add('input-error');
                isValid = false;
            }

            if (!email || email.value.trim() === '') {
                if (emailError) emailError.textContent = 'Email address is required.';
                if (email) email.classList.add('input-error');
                isValid = false;
            } else {
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(email.value.trim())) {
                    if (emailError) emailError.textContent = 'Please enter a valid email address.';
                    if (email) email.classList.add('input-error');
                    isValid = false;
                }
            }

            if (!phone || phone.value.trim() === '') {
                if (phoneError) phoneError.textContent = 'Phone number is required.';
                if (phone) phone.classList.add('input-error');
                isValid = false;
            } else {
                const phoneRegex = /^(\+27|0)?[0-9]{9,10}$|^[0-9\s\-\+\(\)]{10,15}$/;
                if (!phoneRegex.test(phone.value.trim())) {
                    if (phoneError) phoneError.textContent = 'Please enter a valid phone number.';
                    if (phone) phone.classList.add('input-error');
                    isValid = false;
                }
            }

            if (!location || location.value.trim() === '') {
                // Highlighting location field if empty
                if (location) location.classList.add('input-error');
                isValid = false;
            }

            if (!category || category.value === '') {
                if (categoryError) {
                    categoryError.textContent = 'Please select an enquiry category.';
                } else if (nameError) {
                    nameError.textContent = 'Please select an enquiry category.';
                }
                if (category) category.classList.add('input-error');
                isValid = false;
            }

            if (!message || message.value.trim() === '') {
                if (messageError) messageError.textContent = 'Please provide a specific request.';
                if (message) message.classList.add('input-error');
                isValid = false;
            }

        } else {
            // --- CONTACT US FORM VALIDATION ---
            const firstName = document.getElementById('Name');
            const surname = document.getElementById('Surname');
            const phone = document.getElementById('ContactNumber');
            const email = document.getElementById('Email');

            let nameFieldValid = true;
            let errorMessage = '';

            if (!firstName || firstName.value.trim() === '') {
                errorMessage = 'Please enter your first name.';
                if (firstName) firstName.classList.add('input-error');
                nameFieldValid = false;
            }
            if (!surname || surname.value.trim() === '') {
                errorMessage = errorMessage ? 'Please enter both your first and last name.' : 'Please enter your last name.';
                if (surname) surname.classList.add('input-error');
                nameFieldValid = false;
            }

            if (!nameFieldValid) {
                if (nameError) nameError.textContent = errorMessage;
                isValid = false;
            }

            if (!phone || phone.value.trim() === '') {
                if (phoneError) phoneError.textContent = 'Phone number is required.';
                if (phone) phone.classList.add('input-error');
                isValid = false;
            } else {
                const phoneVal = phone.value.trim();
                const phoneRegex = /^(\+27|0)?[0-9]{9,10}$|^[0-9\s\-\+\(\)]{10,15}$/;
                if (!phoneRegex.test(phoneVal)) {
                    if (phoneError) phoneError.textContent = 'Please enter a valid phone number.';
                    if (phone) phone.classList.add('input-error');
                    isValid = false;
                }
            }

            if (!email || email.value.trim() === '') {
                if (emailError) emailError.textContent = 'Email address is required.';
                if (email) email.classList.add('input-error');
                isValid = false;
            } else {
                const emailVal = email.value.trim();
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!emailRegex.test(emailVal)) {
                    if (emailError) emailError.textContent = 'Please enter a valid email address.';
                    if (email) email.classList.add('input-error');
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