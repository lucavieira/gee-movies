const db = firebase.firestore()

function time () {
    const current_date = new Date()
    const current_hour = current_date.getHours()
    const current_minutes = current_date.getMinutes()
    const current_seconds = current_date.getSeconds()

    let field_time = document.getElementById('current-time')
    if (current_hour > 12) {
        field_time.innerHTML = `${current_hour}:${current_minutes}:${current_seconds} PM`
    } else {
        field_time.innerHTML = `${current_hour}:${current_minutes}:${current_seconds} AM`
    }

    setTimeout('time()', 500)
}


function addProfile() {
    let profile_name = prompt('Quem está usando?')
    let profile_color = generatorColor()

    let field_user = $('<div class="user centralizar" onclick="changePage()"></div>')

    let field_profile_photo = $('<div class="profile-photo"></div>').css('background', profile_color)
    let field_profile_name = $('<span id="profile-name"></span>').html(profile_name)

    $(field_user).append(field_profile_photo)
    $(field_user).append(field_profile_name)
    $('#container-users').append(field_user)

    firebase.auth().onAuthStateChanged(user => {
        newProfile(profile_name, user.email, profile_color)
    })
}

function generatorColor() {
    let red = Math.random() * 255
    let green = Math.random() * 255
    let blue = Math.random() * 255

    return `rgb(${red}, ${green}, ${blue})`
}

function changePage() {
    window.location.assign('movies-page.html')
}

function newProfile(profileName, profileEmail, profileColor) {
    db.collection('profiles').add({
        nome: profileName,
        email: profileEmail,
        color: profileColor
    }).then(response => {
        alert('Perfil criado com sucesso!')
    }).catch(error => {
        console.log(error.message)
    })
}

db.collection('profiles').get().then(response => {
    response.forEach(doc => {
        firebase.auth().onAuthStateChanged(user => {
            if(doc.data().email == user.email) {
                let profileBox = document.createElement('div')
                profileBox.classList.add('user', 'centralizar')
                profileBox.setAttribute('onclick', 'changePage()')

                let profilePhoto = document.createElement('div')
                profilePhoto.classList.add('profile-photo')
                profilePhoto.style.background = doc.data().color

                let profileName = document.createElement('span')
                profileName.id = 'profile-name'
                profileName.innerText = doc.data().nome

                profileBox.appendChild(profilePhoto)
                profileBox.appendChild(profileName)

                document.getElementById('container-users').appendChild(profileBox)
            }
        })
    })
}).catch(error => {
    console.log(error)
})