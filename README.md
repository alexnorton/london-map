# London Map

| Field                 | Description |
| --------------------- | ----------- |
| `$type`               |             |
| `id`                  |             |
| `operationType`       |             |
| `vehicleId`           |             |
| `naptanId`            |             |
| `stationName`         |             |
| `lineId`              |             |
| `lineName`            |             |
| `platformName`        |             |
| `direction`           |             |
| `bearing`             |             |
| `destinationNaptanId` |             |
| `destinationName`     |             |
| `timestamp`           |             |
| `currentLocation`     |             |
| `towards`             |             |
| `expectedArrival`     |             |
| `timeToLive`          |             |
| `modeName`            |             |

Example:

```js
  {
    "$type": "Tfl.Api.Presentation.Entities.Prediction, Tfl.Api.Presentation.Entities",
    "id": "-1885901876",
    "operationType": 1,
    "vehicleId": "447",
    "naptanId": "940GZZLUALD",
    "stationName": "Aldgate Underground Station",
    "lineId": "metropolitan",
    "lineName": "Metropolitan",
    "platformName": "Northbound - Platform 3",
    "direction": "inbound",
    "bearing": "",
    "destinationNaptanId": "940GZZLUUXB",
    "destinationName": "Uxbridge Underground Station",
    "timestamp": "2019-12-28T18:05:13.754Z",
    "currentLocation": "At Platform",
    "towards": "Uxbridge",
    "expectedArrival": "2019-12-28T18:05:13.645Z",
    "timeToLive": "2019-12-28T18:05:13.645Z",
    "modeName": "tube"
  },
```
