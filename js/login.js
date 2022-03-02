$('#btn-login').click(function() {
    let email = $('#email').val()
    let password = $('#password').val()

    if(email == '' && password == '') {
        alert('Logado com sucesso')
        window.location.assign('users-page.html')
    } else {
        alert('O E-mail/senha é inválido!')
    }
})