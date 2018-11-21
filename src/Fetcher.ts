import EventEmitter from 'eventemitter3';
import StrictEventEmitter from 'strict-event-emitter-types';

interface Events {}

type FetcherEmitter = StrictEventEmitter<EventEmitter, Events>;

class Fetcher extends (EventEmitter as { new (): FetcherEmitter }) {}

export default Fetcher;
