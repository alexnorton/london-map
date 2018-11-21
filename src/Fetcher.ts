import EventEmitter from 'eventemitter3';
import StrictEventEmitter from 'strict-event-emitter-types';
import { APIResponse, APIPrediction } from './model/APIResponse';

interface Events {
  countdown: (secondsToFetch: number) => void;
  fetching: void;
  fetchedStale: void;
  fetched: (predictions: APIPrediction[]) => void;
}

type FetcherEmitter = StrictEventEmitter<EventEmitter, Events>;

class Fetcher extends (EventEmitter as { new (): FetcherEmitter }) {
  lastTime: Date;

  refreshRate: number;

  secondsToFetch: number;

  constructor(refreshRate: number) {
    super();
    this.refreshRate = refreshRate;
    this.emit = this.emit.bind(this);
  }

  async fetch() {
    this.emit('fetching');
    const res = await fetch('https://api.tfl.gov.uk/mode/tube/arrivals?count=-1');
    const predictions = (await res.json()) as APIResponse;

    const predictionsTime = new Date(predictions[0].timestamp);

    if (this.lastTime && predictionsTime <= this.lastTime) {
      this.emit('fetchedStale');
      return;
    }

    this.emit('fetched', predictions);

    this.lastTime = predictionsTime;
  }

  async countDown() {
    if (this.secondsToFetch === 1) {
      await this.fetch();
      this.secondsToFetch = this.refreshRate;
      this.countDown();
      return;
    }
    this.secondsToFetch = (this.secondsToFetch || this.refreshRate) - 1;
    this.emit('countdown', this.secondsToFetch);
    setTimeout(() => this.countDown(), 1000);
  }

  start() {
    this.countDown();
  }
}

export default Fetcher;
