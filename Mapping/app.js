
//This should be set to the user's Home location
var mymap = L.map('mapid').setView([39.688167, -86.139679], 13);

L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    accessToken: 'pk.eyJ1Ijoicm1tYXNzaWUiLCJhIjoiY2s2YXZ0bGFiMGFjMDNrcHM5Y25haDFpeiJ9.y7vUh6nvPsXflSwOrOSjNQ'
}).addTo(mymap);

var marker = L.marker([39.688167, -86.139679]).addTo(mymap);
marker.bindPopup("Location 1")

function onMapClick(e) {
    alert("You clicked the map at " + e.latlng);
}

mymap.on('click', onMapClick);
