import { select } from 'd3-selection';
import svgToNetwork from './svgToNetwork';
import Vehicle from './model/Vehicle';
import Fetcher from './Fetcher';

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

  const svg = select(svgDocument);

  const offset = new Date('2018-11-17T15:58:38.560Z');

  new Vehicle(
    svg,
    1,
    victoriaLine,
    { stopPoint: network.getStopPoint('940gzzluvxl'), date: new Date('2018-11-17T15:58:38.560Z') },
    [
      {
        stopPoint: network.getStopPoint('940gzzlupco'),
        date: new Date('2018-11-17T15:59:09.440Z'),
      },
      {
        stopPoint: network.getStopPoint('940gzzluvic'),
        date: new Date('2018-11-17T15:59:47.123Z'),
      },
      {
        stopPoint: network.getStopPoint('940gzzlugpk'),
        date: new Date('2018-11-17T16:00:02.073Z'),
      },
      {
        stopPoint: network.getStopPoint('940gzzluoxc'),
        date: new Date('2018-11-17T16:00:21.827Z'),
      },
      {
        stopPoint: network.getStopPoint('940gzzluwrr'),
        date: new Date('2018-11-17T16:00:21.827Z'),
      },
      {
        stopPoint: network.getStopPoint('940gzzlueus'),
        date: new Date('2018-11-17T16:00:21.827Z'),
      },
      {
        stopPoint: network.getStopPoint('940gzzluksx'),
        date: new Date('2018-11-17T16:00:21.827Z'),
      },
      {
        stopPoint: network.getStopPoint('940gzzluhai'),
        date: new Date('2018-11-17T16:00:21.827Z'),
      },
    ],
  );

  const fetcher = new Fetcher(10);

  fetcher.on('countdown', (secondsToFetch: number) => console.log('countDown', secondsToFetch));
  fetcher.on('fetching', () => console.log('fetching'));
  fetcher.on('fetchFailed', () => console.log('fetchFailed'));
  fetcher.on('fetchedStale', () => console.log('fetchedStale'));
  fetcher.on('fetched', (predictions: any) => console.log('fetched', predictions));

  fetcher.start();
});
