async function loadMap(document) {
  const mapContainer = document.querySelector('#map');

  const res = await fetch('map.svg');
  const svg = await res.text();

  mapContainer.innerHTML = svg;
}

document.addEventListener('DOMContentLoaded', () => {
  loadMap(document);
});
