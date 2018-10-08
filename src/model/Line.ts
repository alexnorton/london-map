import LineSegment from './LineSegment';

class Line {
  name: string;

  segments: LineSegment[];

  constructor(name: string) {
    this.name = name;
    this.segments = [];
  }

  addSegments(segments: LineSegment[]) {
    this.segments.push(...segments);
  }
}

export default Line;
