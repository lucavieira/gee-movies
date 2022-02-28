$('#btn-play').click(function() {
    $('#trailer-movie').css('display', 'block')
})


$('a.close-trailer').click(function(){
	$('.iframe-trailer')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
    $('#trailer-movie').css('display', 'none')
}); 