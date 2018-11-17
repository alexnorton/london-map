import Line from './Line';
import LineSegment from './LineSegment';

class StopPoint {
  id: string;

  lines: Line[];

  lineSegments: ({
    line: Line;
    lineSegment: LineSegment;
    toStopPoint: StopPoint;
  })[];

  constructor(id: string) {
    this.id = id;
    this.lines = [];
    this.lineSegments = [];
  }

  addLine(line: Line) {
    if (this.lines.indexOf(line) === -1) {
      this.lines.push(line);
    }
  }

  addLineSegment(line: Line, lineSegment: LineSegment, toStopPoint: StopPoint) {
    this.lineSegments.push({ line, lineSegment, toStopPoint });
  }

  getLineSegment(to: StopPoint) {
    return this.lineSegments.find(lineSegment => lineSegment.toStopPoint === to).lineSegment;
  }
}

export default StopPoint;
