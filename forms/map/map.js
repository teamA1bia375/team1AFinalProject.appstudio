var marker
var infowindow
var currentLat, currentLong

function gotLocation(location, lat, long) {

    GoogleMap1.mapOptions.latitude = location.coords.latitude
    GoogleMap1.mapOptions.longitude = location.coords.longitude
    
    currentLat22 =location.coords.latitude
    currentLong22 = location.coords.longitude
    console.log(`lat and long are ${currentLat22} and ${currentLong22}`)
    GoogleMap4.refresh()

    //Put a marker on our location
    point1 = new google.maps.LatLng(location.coords.latitude, location.coords.longitude)
    marker1 = GoogleMap1.setMarker({
        position: point1
    });

    //McDonalds
    point2 = new google.maps.LatLng(41.268220, -95.947420);
    marker2 = GoogleMap1.setMarker({
        position: point2
    });

    //Hyvee
    point3 = new google.maps.LatLng(41.242390, -95.994209);
    marker3 = GoogleMap1.setMarker({
        position: point3
    });

    //Subway
    point4 = new google.maps.LatLng(41.268290, -95.946760);
    marker4 = GoogleMap1.setMarker({
        position: point4
    });

    //Popeyes
    point5 = new google.maps.LatLng(41.260110, -95.982160);
    marker5 = GoogleMap1.setMarker({
        position: point5
    });


};


Button1.onclick = function() {
    // have to run this before you do anything else - call this getLocation button
    navigator.geolocation.getCurrentPosition(gotLocation)
    NSB.WaitCursor(true)
}