interface APIPrediction {
  $type: string;
  id: string;
  operationType: number;
  vehicleId: string;
  naptanId: string;
  stationName: string;
  lineId: string;
  lineName: string;
  platformName: string;
  bearing: string;
  timestamp: string;
  timeToStation: number;
  currentLocation: string;
  towards: string;
  expectedArrival: string;
  timeToLive: string;
  modeName: string;
  timing: {
    $type: string;
    countdownServerAdjustment: string;
    source: string;
    insert: string;
    read: string;
    sent: string;
    received: string;
  };
}

type APIResponse = APIPrediction[];

export { APIResponse, APIPrediction };
