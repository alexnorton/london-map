import Line from 'line';
import IPrediction from './IPrediction';

class Vehicle {
  id: number;

  line: Line;

  previousStopPoint: IPrediction;

  predictions: IPrediction[];

  constructor(id: number, line: Line, previousStopPoint: IPrediction, predictions: IPrediction[]) {
    this.id = id;
    this.line = line;
    this.previousStopPoint = previousStopPoint;
    this.predictions = predictions;
  }
}

export default Vehicle;
