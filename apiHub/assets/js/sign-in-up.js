

document.addEventListener('DOMContentLoaded', () => {
    const emailInput_in = document.getElementById('login-form_email');
    const passwordInput_in = document.getElementById('login-form_password');
    const nameInput_up = document.getElementById('register-form_username');
    const emailInput_up = document.getElementById('register-form_email');
    const passwordInput_up = document.getElementById('register-form_password');
    const submitButton = document.getElementById('submit-button');

    function checkInputs_in() {
        if (emailInput_in.value && passwordInput_in.value) {
            submitButton.classList.add('active');
            submitButton.removeAttribute('disabled');
        } else {
            submitButton.classList.remove('active');
            submitButton.setAttribute('disabled', 'disabled');
        }
    }
    function checkInputs_up() {
        if (emailInput_up.value && passwordInput_up.value && nameInput_up.value) {
            submitButton.classList.add('active');
            submitButton.removeAttribute('disabled');
        } else {
            submitButton.classList.remove('active');
            submitButton.setAttribute('disabled', 'disabled');
        }
    }
    if (emailInput_in) {
        emailInput_in.addEventListener('input', checkInputs_in);
    }

    if (passwordInput_in) {
        passwordInput_in.addEventListener('input', checkInputs_in);
    }
    if (nameInput_up) {
        nameInput_up.addEventListener('input', checkInputs_up);
    }
    if (emailInput_up) {
        emailInput_up.addEventListener('input', checkInputs_up);
    }
    if (passwordInput_up) {
        passwordInput_up.addEventListener('input', checkInputs_up);
    }


});
