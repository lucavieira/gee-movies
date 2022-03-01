$('#btn-play').click(function() {
    $('#trailer-movie').css('display', 'block')
})


$('a.close-trailer').click(function(){
	$('.iframe-trailer')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    $('#trailer-movie').css('display', 'none')
});

let value = 0
$('#next-btn').click(function() {
    $('.popular-movies').css('margin-left', `-${value}%`)
})

let popular_movies = 'https://api.themoviedb.org/3/movie/popular?api_key=68cdca165a30546f72d0c25be86076fb'
let image_poster = 'https://image.tmdb.org/t/p/w300'

const requestMovies = async () => {
    const response = await fetch(popular_movies)
    const data = await response.json()
    
    for(indice in data.results) {
        // console.log(data.results[indice])
        let originalTitle = data.results[indice].title
        let posterPath = data.results[indice].poster_path
        
        createMovie(originalTitle, posterPath)
    }
}

function createMovie(title, poster) {
    let movie = $('<div class="movie swiper-slide"> ' +
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

requestMovies()