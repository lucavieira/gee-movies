let email = document.getElementById('email')
let password = document.getElementById('password')

const emailInvalidError = document.getElementById('email-invalid-error')
const emailRequiredError = document.getElementById('email-required-error')

function changeEmail() {
    emailRequiredError.style.display = email.value ? "none" : "block"
    emailInvalidError.style.display = validateEmail(email.value) ? "none" : "block"
}

function login() {
    showLoading()
    firebase.auth().signInWithEmailAndPassword(
        email.value, password.value
    ).then(response => {
        hideLoading()
        window.location.href = 'users-page.html'
    }).catch(error => {
        hideLoading()
        alert(getErrorMessage(error));
    })
}

function recuperarSenha() {
    // showLoading()

    firebase.auth().sendPasswordResetEmail(email.value)
    .then(response => {
        console.log(email.value)
        // hideLoading()
        // alert('Email enviado com sucesso!')
    }).catch(error => {
        hideLoading()
        alert(getErrorMessage(error))
    })
}

function getErrorMessage(error) {
    if(error.code == "auth/invalid-credential") {
        return "Usuário não encontrado"
    } else if(error.code == "auth/missing-email" || error.code == "auth/invalid-email") {
        return "Preencha o campo email!"
    }

    return error.message
}