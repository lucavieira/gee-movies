let popular_movies = 'https://api.themoviedb.org/3/movie/popular?api_key=68cdca165a30546f72d0c25be86076fb'
let image_poster = 'https://image.tmdb.org/t/p/w300'
let image_background = 'https://image.tmdb.org/t/p/original'

const requestMovies = async () => {
    const response = await fetch(popular_movies)
    const data = await response.json()
    
    for(indice in data.results) {
        // console.log(data.results[indice])
        let originalTitle = data.results[indice].title
        let posterPath = data.results[indice].poster_path
        let id_movie = data.results[indice].id
        
        createMovie(originalTitle, posterPath, id_movie)
    }
}

function createMovie(title, poster, id) {
    let movie = $(`<div class="movie swiper-slide" id=${id} onclick="changeMovie(this.id)" >` +
            '<div class="movie-image">' +
                `<img src="${image_poster + poster}" />` +
            '</div>' +
            '<div class="details">' +
                '<div class="rate">' +
                    '<div class="star"></div>' +
                    '<div class="star"></div>' +
                    '<div class="star"></div>' +
                    '<div class="star"></div>' +
                    '<div class="star"></div>' +
                '</div>' +
                `<h2 class="movie-title">${title}</h2>` +
            '</div>' +
        '</div>')

    $('.swiper-wrapper').append(movie)
}

// Mostra o trailer do filme
$('#btn-play').click(function() {
    $('#trailer-movie').css('display', 'block')
})

// Fecha o trailer e para a execução
$('a.close-trailer').click(function(){
	$('.iframe-trailer')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    $('#trailer-movie').css('display', 'none')
});

const changeMovie = async (id) => {
    const movie_response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=68cdca165a30546f72d0c25be86076fb`)
    const movie_data = await movie_response.json()
    let title_movie = movie_data.title
    let background_movie = movie_data.backdrop_path
    let overview_movie = movie_data.overview

    let url_trailer

    const video_response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=68cdca165a30546f72d0c25be86076fb`)
    const video_data = await video_response.json()
    for(result in video_data.results) {
        if(video_data.results[result].name.includes('Trailer')) {
            let key_trailer = video_data.results[result].key
            url_trailer = `https://www.youtube.com/embed/${key_trailer}?enablejsapi=1&version=3&playerapiid=ytplayer`
            break
        }
    }

    console.log(url_trailer)

    $('#main-title-movie').html(title_movie)
    $('#main-description-movie').html(overview_movie)
    $('header').css('background', `radial-gradient(#0c0c0c61, #0c0c0c00), url(${image_background + background_movie}) no-repeat`)
    $('header').css('background-size', 'cover')
    $('#trailer').attr('src', url_trailer)
}


requestMovies()