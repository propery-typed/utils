export type Promisify<T> = T extends Promise<any>
  ? T
  : Promise<T>;
