import svgToNetwork from './svgToNetwork';
import Vehicle from './model/Vehicle';
import drawVehicle from './drawVehicle';

async function loadMap(document: HTMLDocument) {
  const mapContainer = document.querySelector('#map');

  const res = await fetch('map.svg');
  const svg = await res.text();

  mapContainer.innerHTML = svg;

  const svgDocument = document.querySelector('#map svg');

  const network = svgToNetwork(svgDocument);

  return { network, svgDocument };
}

document.addEventListener('DOMContentLoaded', async () => {
  const { network, svgDocument } = await loadMap(document);

  const victoriaLine = network.getLine('victoria');

  const vauxhallStopPoint = network.getStopPoint('940gzzluvxl');
  const pimlicoStopPoint = network.getStopPoint('940gzzlupco');
  const victoriaStopPoint = network.getStopPoint('940gzzluvic');
  const greenParkStopPoint = network.getStopPoint('940gzzlugpk');

  const offset = new Date('2018-11-17T15:58:38.560Z');

  const vehicle = new Vehicle(
    1,
    victoriaLine,
    { stopPoint: vauxhallStopPoint, date: new Date('2018-11-17T15:58:38.560Z') },
    [
      { stopPoint: pimlicoStopPoint, date: new Date('2018-11-17T15:59:09.440Z') },
      { stopPoint: victoriaStopPoint, date: new Date('2018-11-17T15:59:47.123Z') },
      { stopPoint: greenParkStopPoint, date: new Date('2018-11-17T16:00:02.073Z') },
    ],
  );

  drawVehicle(offset, svgDocument, network, vehicle);
});
