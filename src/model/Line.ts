import LineSegment from './LineSegment';
import StopPoint from './StopPoint';

class Line {
  name: string;

  segments: Set<LineSegment>;

  stopPoints: Set<StopPoint>;

  constructor(name: string) {
    this.name = name;
    this.segments = new Set();
    this.stopPoints = new Set();
  }

  addSegments(segments: LineSegment[]) {
    segments.forEach(segment => this.segments.add(segment));
  }

  addStopPoint(stopPoint: StopPoint) {
    this.stopPoints.add(stopPoint);
  }
}

export default Line;
