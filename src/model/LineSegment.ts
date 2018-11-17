import StopPoint from './StopPoint';

class LineSegment {
  element: SVGGeometryElement;

  stopPoints: StopPoint[];

  constructor(element: SVGGeometryElement, stopPoint1: StopPoint, stopPoint2: StopPoint) {
    this.element = element;
    this.stopPoints = [stopPoint1, stopPoint2];
  }
}

export default LineSegment;
