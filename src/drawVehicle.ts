import { select, Selection } from 'd3-selection';
import 'd3-transition';
import Network from './model/Network';
import Vehicle from './model/Vehicle';

function drawVehicle(offset: Date, svgDocument: Element, network: Network, vehicle: Vehicle) {
  const svg = select(svgDocument);

  const lineSegment = vehicle.previousStopPoint.stopPoint.getLineSegment(
    vehicle.predictions[0].stopPoint,
  );

  const path = select(lineSegment.element);
  const pathElement = path.node();

  const { x: startX, y: startY } = pathElement.getPointAtLength(0);

  const marker = svg
    .append('circle')
    .attr('r', 4)
    .attr('fill', 'red')
    .attr('transform', `translate(${startX},${startY})`);

  move(marker, pathElement);
}

function move(marker: Selection<SVGElement, any, any, any>, pathElement: SVGGeometryElement) {
  marker
    .transition()
    .duration(5000)
    .attrTween('transform', translateAlong(pathElement))
    .on('end', () => move(marker, pathElement));
}

function translateAlong(path: SVGGeometryElement) {
  const length = path.getTotalLength();
  return () => (time: number) => {
    const { x, y } = path.getPointAtLength(time * length);
    return `translate(${x},${y})`;
  };
}

export default drawVehicle;
