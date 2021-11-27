// This is a JavaScript file
window.onload = function(){

  document.querySelector("#local").addEventListener("click", function(){
        L.mapquest.key = 'WttG3ae5icu36vH6g1qUIV18qm2KLJ3G';

        var map = L.mapquest.map('map', {
          center: [37.7749, -122.4194],
          layers: L.mapquest.tileLayer('map'),
          zoom: 12
        });
        
        map.addControl(L.mapquest.control());
    });
}
