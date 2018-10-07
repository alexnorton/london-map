import svgToNetwork from './svgToNetwork';

async function loadMap(document: HTMLDocument) {
  const mapContainer = document.querySelector('#map');

  const res = await fetch('map.svg');
  const svg = await res.text();

  mapContainer.innerHTML = svg;

  const svgDocument = document.querySelector('#map svg');

  svgToNetwork(svgDocument);
}

document.addEventListener('DOMContentLoaded', () => {
  loadMap(document);
});
