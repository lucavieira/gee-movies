const email = document.getElementById('email')
const password = document.getElementById('password')
const checkPassword = document.getElementById('checkPassword')
const registerButton = document.getElementById('register-button')

const emailInvalidError = document.getElementById('email-invalid-error')
const emailRequiredError = document.getElementById('email-required-error')

const passwordRequiredError = document.getElementById('password-required-error')
const passwordMinLengthError = document.getElementById('password-min-length-error')

const passwordDoesntMatchError = document.getElementById('password-doesnt-match-error')

function onChangeEmail() {
    emailRequiredError.style.display = email.value ? "none" : "block"
    emailInvalidError.style.display = validateEmail(email.value) ? "none" : "block"

    toggleRegisterButtonDisable()
}

function onChangePassword() {
    passwordRequiredError.style.display = password.value ? "none" : "block"
    passwordMinLengthError.style.display = password.value.length >= 6 ? "none" : "block"

    validatePasswordsMatch()
    toggleRegisterButtonDisable()
}

function onChangeConfirmedPassword() {
    validatePasswordsMatch()
    toggleRegisterButtonDisable()
}

function validatePasswordsMatch() {
    passwordDoesntMatchError.style.display = password.value == checkPassword.value ? "none" : "block"
}

function toggleRegisterButtonDisable() {
    registerButton.disabled = !isFormValid()
}

function isFormValid() {
    if(!email.value || !validateEmail(email.value)) {
        return false
    }

    if(!password.value || password.value.length < 6) {
        return false
    }

    if(password.value != checkPassword.value) {
        return false
    }

    return true
}