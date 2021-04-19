var marker
var infowindow
var currentLat, currentLong

function gotLocation(location, lat, long) {

    GoogleMap1.mapOptions.latitude = location.coords.latitude
    GoogleMap1.mapOptions.longitude = location.coords.longitude
    
    currentLat22 =location.coords.latitude
    currentLong22 = location.coords.longitude
    console.log(`lat and long are ${currentLat22} and ${currentLong22}`)
    GoogleMap1.refresh()

    //Put a marker on our location
    point1 = new google.maps.LatLng(location.coords.latitude, location.coords.longitude)
    marker1 = GoogleMap1.setMarker({
        position: point1
    });

};

Button1.onclick = function() {
    // have to run this before you do anything else - call this getLocation button
    navigator.geolocation.getCurrentPosition(gotLocation)
    NSB.WaitCursor(true)
}