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
        alert(getErrorMessage(error))
    })
}

function getErrorMessage(error) {
    if(error.code == "auth/invalid-credential") {
        return "Usuário não encontrado"
    }
    return error.message
}

function cadastrar() {
    window.location.href = './cadastro.html'
}