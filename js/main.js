
function initMap() {
  const loc = {lat: -34.397, lng: 150.644}
  const map = new google.maps.Map(document.getElementById('map'), {
    center: loc,
    zoom: 7
  });
  const marker = new google.maps.Marker({position: loc, map})
  console.log('map loaded')
}