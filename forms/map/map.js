let marker
let infoWindow
let currentLat, currentLong

function gotLocation(location, lat, long) {

  GoogleMap1.mapOptions.latitude = location.coords.latitude
  GoogleMap1.mapOptions.longitude = location.coords.longitude

  currentLat22 = location.coords.latitude
  currentLong22 = location.coords.longitude
  console.log(`lat and long are ${currentLat22} and ${currentLong22}`)
  GoogleMap1.refresh()

  //Put a marker on our location
  point1 = new google.maps.LatLng(location.coords.latitude, location.coords.longitude)
  marker1 = GoogleMap1.setMarker({
    position: point1
  });
};

map.onshow = function() {
  // have to run this before you do anything else - call this getLocation button
  navigator.geolocation.getCurrentPosition(gotLocation)
  NSB.WaitCursor(true)
}

// This is the code that is supposed to get our distances and time

btnBackToUser.onclick = function() {
  ChangeForm(SelectRecipient)
}

// This is the code that is supposed to get our distances and time


// --------- THIS NEEDS TO FIXED ---------------------

/*
let origin1 = new google.maps.LatLng(currentLat22, currentLong22)
let origin2 = ""
let destinationA = 'Cass HyVee, Omaha, NE'
let destinationB = new google.maps.LatLng(41.265590, -96.039125) // Location for the Cass Street HyVee

var service = new google.maps.DistanceMatrixService();
service.getDistanceMatrix({
  origins: [origin1, origin2],
  destinations: [destinationA, destinationB],
  travelMode: 'DRIVING',
  transitOptions: TransitOptions,
  drivingOptions: DrivingOptions,
  unitSystem: UnitSystem,
  avoidHighways: Boolean,
  avoidTolls: Boolean,
}, callback);

function callback(response, status) {
  // See Parsing the Results for
  // the basics of a callback function.
  if (status == 'OK') {
    var origins = response.originAddresses;
    var destinations = response.destinationAddresses;

    for (var i = 0; i < origins.length; i++) {
      var results = response.rows[i].elements;
      for (var j = 0; j < results.length; j++) {
        var element = results[j];
        var distance = element.distance.text;
        var duration = element.duration.text;
        var from = origins[i];
        var to = destinations[j];
      }
    }
  }
}

*/