import Line from './Line';
import StopPoint from './StopPoint';

class Network {
  lines: Line[];

  stopPoints: StopPoint[];

  constructor(lines: Line[], stopPoints: StopPoint[]) {
    this.lines = lines;
    this.stopPoints = stopPoints;
  }

  getLine(name: string) {
    return this.lines.find(line => line.name === name);
  }

  getStopPoint(id: string) {
    return this.stopPoints.find(stopPoint => stopPoint.id === id);
  }
}

export default Network;
