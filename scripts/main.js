<<<<<<< HEAD
var myPosition = "";
var lat = "";
var lng = "";

navigator.geolocation.getCurrentPosition(success);

// new code
// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPosition);
//     } else {
//         console.log("Geolocation is not supported by this browser.");
//     }
// }
// function showPosition(position) {
//    console.log(position);
// }

// getLocation();

// navigator.geolocation.getCurrentPosition(function(position) {
//     console.log(position);
//     console.log(position.coords);
// 	console.log(position.timestamp);
// 	console.log(position.coords.latitude);
// 	console.log(position.coords.longitude);

// }, function(positionError) {
//     console.log(positionError);
// });


//end new code

navigator.geolocation.getCurrentPosition();

 function success(pos) {
 	console.log(pos);

  	var lat = pos.coords.latitude;
  	var lng = pos.coords.longitude;
  	var latlng = [lat,lng];
  	var myLocation = latlng

 	var map = L.map('map').setView(myLocation, 13);

 	var marker = L.marker(myLocation).addTo(map);
 	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
     attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'ahharissa.83ee213e',
    accessToken: 'pk.eyJ1IjoiYWhoYXJpc3NhIiwiYSI6IjQyNTYzNDdhNzgxZTNkMTYwYzg1Zjc5NzFkNjBlZWQyIn0.kyAfNZM16G6srCx76hI09g'
	}).addTo(map);

	var ryanOld = L.marker([27.964432,-82.732632]).addTo(map);

	var popupContent = "this is popup content";

	var popup = L.popup()
    .setLatLng(latlng)
    .setContent('<p>Hello world!<br />This is a nice popup.</p>')
    .openOn(map);

	marker.bindPopup(popupContent).openPopup();

	map.on('load', function(e) {
    	alert(e.latlng);
	});

};

