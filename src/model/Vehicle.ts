import Line from 'line';
import { select, Selection } from 'd3-selection';
import 'd3-transition';
import { Transition } from 'd3-transition';
import IPrediction from './IPrediction';

class Vehicle {
  id: number;

  line: Line;

  previousStopPoint: IPrediction;

  predictions: IPrediction[];

  marker: Selection<Element, any, any, any>;

  transition: Transition<Element, any, any, any>;

  constructor(
    svg: Selection<Element, any, any, any>,
    id: number,
    line: Line,
    previousStopPoint: IPrediction,
    predictions: IPrediction[],
  ) {
    this.id = id;
    this.line = line;
    this.previousStopPoint = previousStopPoint;
    this.predictions = predictions;

    this.marker = svg
      .append('circle')
      .attr('r', 4)
      .attr('fill', 'red');

    this.setupTransitions([this.previousStopPoint, ...this.predictions]);
  }

  setupTransitions(predictions: IPrediction[]) {
    const [start, ...rest] = predictions;

    const lineSegment = start.stopPoint.getLineSegment(rest[0].stopPoint);

    const path = select(lineSegment.element);
    const pathElement = path.node();

    this.transition = this.marker
      .transition()
      .duration(5000)
      .attrTween('transform', translateAlong(pathElement))
      .on('end', () => {
        if (rest.length > 1) {
          this.setupTransitions(rest);
        }
      });
  }

  destroy() {
    this.marker.remove();
  }
}

function translateAlong(path: SVGGeometryElement) {
  const length = path.getTotalLength();
  return () => (time: number) => {
    const { x, y } = path.getPointAtLength(time * length);
    return `translate(${x},${y})`;
  };
}

export default Vehicle;
