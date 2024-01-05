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
    let field_profile_photo = $('<div class="profile-photo"></div>').css('background-color', profile_color)
    let field_profile_name = $('<span class="profile-name"></span>').html(profile_name)

    $(field_user).append(field_profile_photo)
    $(field_user).append(field_profile_name)
    $('#container-users').append(field_user)
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