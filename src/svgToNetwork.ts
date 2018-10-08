import Network from './model/Network';
import Line from './model/Line';
import StopPoint from './model/StopPoint';
import LineSegment from './model/LineSegment';

const svgToNetwork = (svg: Element) => {
  const network = new Network();

  const stopPoints: { [id: string]: StopPoint } = {};

  const lines = [...svg.querySelectorAll('svg > g.line')].map((lineGroup) => {
    const idParts = lineGroup.id.match(/(.+?)-(.+)/);
    const name = idParts[2];

    const segments = [...lineGroup.querySelectorAll('path, line')]
      .filter(segmentElement => segmentElement.id.indexOf('white_line') === -1)
      .reduce((accumulator, segmentElement) => {
        const matches = segmentElement.id.match(/[^_]+_([^_]+)_([^_]+)/);

        if (matches) {
          const [, stopPoint1Id, stopPoint2Id] = matches;

          const [stopPoint1, stopPoint2] = [stopPoint1Id, stopPoint2Id].map((stopPointId) => {
            if (!stopPoints[stopPointId]) {
              stopPoints[stopPointId] = new StopPoint(stopPointId);
            }
            return stopPoints[stopPointId];
          });

          return [...accumulator, new LineSegment(segmentElement, stopPoint1, stopPoint2)];
        }

        return accumulator;
      }, []);

    const line = new Line(name, segments);
    return line;
  });

  console.log(lines);
};

export default svgToNetwork;
