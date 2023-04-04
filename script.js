// Grant CesiumJS access to your ion assets
Cesium.Ion.defaultAccessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiIzOTkyN2FmMS02MmIwLTQxMGEtOGI1ZC0zMzQ3ODEyNzJhMzkiLCJpZCI6MTMxMjUxLCJpYXQiOjE2ODAxMzYzNjN9.DPz-3nSTEdHTrPHHd1XOlyIG2j5OwZbx2kJRqIXGarY";

const viewer = new Cesium.Viewer("cesiumContainer", {
  terrainProvider: new Cesium.CesiumTerrainProvider({
    url: Cesium.IonResource.fromAssetId(1),
  }),
});

// cria um mapa interativo
var mymap = L.map('mapid').setView([51.505, -0.09], 13);

// adiciona um mapa base
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors',
    maxZoom: 18,
}).addTo(mymap);

// carrega um conjunto de dados GeoJSON
$.getJSON("mydata.geojson",function(data){
    // adiciona o conjunto de dados ao mapa como uma camada
    L.geoJSON(data).addTo(mymap);
});

