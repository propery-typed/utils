export type Promisify<T> = T extends Promise<any>
  ? T
  : Promise<T>;

export type ToDictionary<T> = {
  [K in keyof T]: T[K]
};
