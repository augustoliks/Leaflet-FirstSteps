var socket = io.connect('http://' + document.domain + ':' + location.port);
var mymap = L.map('mapid').setView([-23.162139, -45.795291], 3);
var plots = [];

L.tileLayer('https://cartodb-basemaps-{s}.global.ssl.fastly.net/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
    subdomains: 'abcd',
    maxZoom: 19
}).addTo(mymap);
