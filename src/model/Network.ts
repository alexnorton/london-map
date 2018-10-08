import Line from './Line';
import StopPoint from './StopPoint';

class Network {
  lines: Line[];

  stopPoints: StopPoint[];

  constructor(lines: Line[], stopPoints: StopPoint[]) {
    this.lines = lines;
    this.stopPoints = stopPoints;
  }
}

export default Network;
