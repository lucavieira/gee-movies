let email = document.getElementById('email')
let password = document.getElementById('password')

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
    } else if(error.code == "auth/missing-email") {
        return "Preencha o campo email!"
    }
    return error.message
}