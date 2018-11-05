// TODO: rewrite this to not need jQuery.
var chp_map = false;
var latLon = $('#lblLatLon');

if (latLon) {
	var coords = latLon.text().replace(' ', ',');
	var coordsArr = coords.split(',');
	latLon.html('<span id="map_maker">'+ coords +'</span>');

	$('#map_maker').data({
		'id': $($('.GVSelected').find('td')[1]).text(),
		'coords': {
			'lat': parseFloat(coordsArr[0]),
			'lng': parseFloat(coordsArr[1])
		},
		'details': {
			'title': $($('.GVSelected').find('td')[3]).text(),
			'time': $($('.GVSelected').find('td')[2]).text()
		}
	});

	$('#map_maker').on('click', function() {
		var event = document.createEvent('Event');
		event.initEvent('buildMap');
		document.dispatchEvent(event);
	});
}

document.addEventListener("buildMap", function(data) {
    chrome.runtime.sendMessage($('#map_maker').data());
});