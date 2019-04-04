for (var k = 0; k < 10; k += 1) {
    plots.push(
        L.marker([-23.162139 + k * 3, -45.795291 + k * 3], { icon: myIcon1 }).addTo(mymap)
    )
}


plots.forEach(function(plot){
    plot.bindPopup("x");
})

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(mymap);
}
