export function getEventSourceStream(): EventSourceStream;
/**
 * Like the default one, but multiplies the events by the number of letters in the event data.
 */
export class SmoothEventSourceStream extends EventSourceStream {
}
export default EventSourceStream;
/**
 * A stream which handles Server-Sent Events from a binary ReadableStream like you get from the fetch API.
 */
declare class EventSourceStream {
    readable: ReadableStream<any>;
    writable: WritableStream<BufferSource>;
}
//# sourceMappingURL=sse-stream.d.ts.map