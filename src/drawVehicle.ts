import { select, Selection } from 'd3-selection';
import 'd3-transition';
import Network from './model/Network';
import Vehicle from './model/Vehicle';
import IPrediction from './model/IPrediction';

function drawVehicle(offset: Date, svgDocument: Element, network: Network, vehicle: Vehicle) {
  const svg = select(svgDocument);

  const marker = svg
    .append('circle')
    .attr('r', 4)
    .attr('fill', 'red');

  move(marker, [vehicle.previousStopPoint, ...vehicle.predictions]);
}

function move(marker: Selection<SVGElement, any, any, any>, predictions: IPrediction[]) {
  const [start, ...rest] = predictions;

  const lineSegment = start.stopPoint.getLineSegment(rest[0].stopPoint);

  const path = select(lineSegment.element);
  const pathElement = path.node();

  marker
    .transition()
    .duration(5000)
    .attrTween('transform', translateAlong(pathElement))
    .on('end', () => {
      if (rest.length > 1) {
        move(marker, rest);
      }
    });
}

function translateAlong(path: SVGGeometryElement) {
  const length = path.getTotalLength();
  return () => (time: number) => {
    const { x, y } = path.getPointAtLength(time * length);
    return `translate(${x},${y})`;
  };
}

export default drawVehicle;
