import StopPoint from './StopPoint';

class LineSegment {
  element: Element;

  stopPoints: StopPoint[];

  constructor(element: Element, stopPoint1: StopPoint, stopPoint2: StopPoint) {
    this.element = element;
    this.stopPoints = [stopPoint1, stopPoint2];
  }
}

export default LineSegment;
