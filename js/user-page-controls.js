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

    let container_users = document.getElementById('container-users')
    
    let field_user = document.createElement('div')
    let field_profile_photo = document.createElement('div')
    let field_profile_name = document.createElement('span')

    field_user.classList.add('user')
    field_profile_photo.classList.add('profile-photo')
    field_profile_name.classList.add('profile-name')

    field_profile_photo.style.backgroundColor = profile_color
    field_profile_name.innerHTML = profile_name

    field_user.appendChild(field_profile_photo)
    field_user.appendChild(field_profile_name)

    container_users.appendChild(field_user)
}

function generatorColor() {
    let red = Math.random() * 255
    let green = Math.random() * 255
    let blue = Math.random() * 255

    return `rgb(${red}, ${green}, ${blue})`
}