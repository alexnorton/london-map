import Network from './model/Network';
import Line from './model/Line';
import StopPoint from './model/StopPoint';
import LineSegment from './model/LineSegment';

const svgToNetwork = (svg: Element) => {
  const stopPointsObject: { [id: string]: StopPoint } = {};

  const lines = [...svg.querySelectorAll('svg > g.line')].map((lineGroup) => {
    const idParts = lineGroup.id.match(/(.+?)-(.+)/);
    const name = idParts[2];

    const line = new Line(name);

    const segments = [...lineGroup.querySelectorAll('path, line')]
      .filter(segmentElement => segmentElement.id.indexOf('white_line') === -1)
      .reduce((accumulator, segmentElement) => {
        const matches = segmentElement.id.match(/[^_]+_([^_]+)_([^_]+)/);

        if (matches) {
          const [, stopPoint1Id, stopPoint2Id] = matches;

          const [stopPoint1, stopPoint2] = [stopPoint1Id, stopPoint2Id].map((stopPointId) => {
            if (!stopPointsObject[stopPointId]) {
              stopPointsObject[stopPointId] = new StopPoint(stopPointId);
            }
            return stopPointsObject[stopPointId];
          });

          const lineSegment = new LineSegment(segmentElement, stopPoint1, stopPoint2);

          stopPoint1.addLine(line);
          stopPoint2.addLine(line);

          stopPoint1.addLineSegment(line, lineSegment, stopPoint2);
          stopPoint2.addLineSegment(line, lineSegment, stopPoint1);

          return [...accumulator, lineSegment];
        }

        return accumulator;
      }, []);

    line.addSegments(segments);

    return line;
  });

  const stopPoints = Object.keys(stopPointsObject).map(
    stopPointId => stopPointsObject[stopPointId],
  );

  const network = new Network(lines, stopPoints);

  console.log(network);
};

export default svgToNetwork;
