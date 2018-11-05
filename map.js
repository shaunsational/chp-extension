var markers = {};
var pin = 'data:image/png;base64,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'

function addMarker(incident) {
	if (!(incident.id in markers))
	{
		var marker = new google.maps.Marker({
			position: incident.coords,
			map: map,
			title: 'Incident',
			icon: pin
		});

		var contentString = '<div id="content">'+ incident.details.time +' - '+ incident.details.title +'</div>';
		var infowindow = new google.maps.InfoWindow({ content: contentString });

		marker.addListener('click', function() {
			infowindow.open(map, marker);
			map.panTo(incident.coords);
			map.setZoom(14);
		});

		markers[incident.id] = marker;
		if (Object.keys(markers).length > 1) {
			document.getElementsByTagName('head')[0].getElementsByTagName('title')[0].innerHTML='CHP Incident Map ('+ Object.keys(markers).length +')';
		}
	}
	map.setZoom(10);
	map.panTo(incident.coords);
}

var incident = JSON.parse(decodeURIComponent(window.location.hash.replace('#','')));
incident.coords.lng += .0003; // account for pin offset

var mapStyle = [
	{
		"featureType": "administrative",
		"stylers": [{ "saturation": -100 }]
	},
	{
		"featureType": "landscape",
		"stylers": [{ "saturation": -100 }]
	},
	{
		"featureType": "poi",
		"stylers": [{ "saturation": -100 }]
	},
	{
		"featureType": "transit",
		"stylers": [{ "saturation": -100 }]
	},
	{
		"featureType": "water",
		"stylers": [{ "saturation": -75 }]
	},
	{
		"featureType": "road",
		"elementType": "geometry",
		"stylers": [{ "saturation": -100 }]
	},
	{
		"featureType": "road",
		"elementType": "labels.text",
		"stylers": [{ "saturation": -100 }]
	},
	{
		"featureType": "poi.business",
		"elementType": "labels.icon",
		"stylers": [
			{ "visibility": "off" }
		]
	},
	{
		"featureType": "road.highway",
		"elementType": "geometry",
		"stylers": [
			{
				"lightness": -50
			}
		]
	},
	{
		"featureType": "road.arterial",
		"elementType": "geometry",
		"stylers": [
			{
				"lightness": -5,
				"weight": 2.5
			}
		]
	},
	{
		"featureType": "road.local",
		"elementType": "geometry",
		"stylers": [
			{
				"lightness": -25,
				"weight": 1
			}
		]
	}
];

var map = new google.maps.Map(document.getElementById('map'), {
	center: incident.coords,
	scrollwheel: true,
	styles: mapStyle,
	mapTypeId: google.maps.MapTypeId.TERRAIN,
	zoom: 10
});

addMarker(incident);

chrome.runtime.onMessage.addListener(
	function(incident, sender, sendResponse) {
		addMarker(incident)
	}
);