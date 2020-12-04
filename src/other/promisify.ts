export type Promisify<R> = R extends Promise<any>
  ? R
  : Promise<R>;
