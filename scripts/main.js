// navigator.geolocation.getCurrentPosition(function(position) {
//     console.log(position);
//     console.log(position.coords);
// 	console.log(position.timestamp);
// 	console.log(position.coords.latitude);
// 	console.log(position.coords.longitude);

// }, function(positionError) {
//     console.log(positionError);
// });

//var myPosition = " ";
var map = L.map('map').setView([51.505, -0.09], 13);

var marker = L.marker([51.5, -0.09]).addTo(map);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    id: 'ahharissa.83ee213e',
    accessToken: 'pk.eyJ1IjoiYWhoYXJpc3NhIiwiYSI6IjQyNTYzNDdhNzgxZTNkMTYwYzg1Zjc5NzFkNjBlZWQyIn0.kyAfNZM16G6srCx76hI09g'
}).addTo(map);
