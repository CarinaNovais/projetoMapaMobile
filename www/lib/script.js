// This is a JavaScript file
window.onload = function(){

function mapa(lat,long){
   L.mapquest.key = 'WttG3ae5icu36vH6g1qUIV18qm2KLJ3G';

        var map = L.mapquest.map('map', {
          center: [lat, long],
          layers: L.mapquest.tileLayer('map'),
          zoom: 12
        });
        map.addControl(L.mapquest.control());
}

  document.querySelector("#local").addEventListener("click", function(){

    var onSuccess = function(position) {
        mapa(position.coords.latitude, position.coords.longitude);
    };

    // onError Callback receives a PositionError object
    //
    function onError(error) {
        alert('code: '    + error.code    + '\n' +
              'message: ' + error.message + '\n');
    }

    navigator.geolocation.getCurrentPosition(onSuccess, onError);
  });
}