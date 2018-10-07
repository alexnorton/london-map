import LineSegment from './LineSegment';

class Line {
  name: string;

  segments: LineSegment[];

  constructor(name: string, segments: LineSegment[]) {
    this.name = name;
    this.segments = segments;
  }
}

export default Line;
