export type ToDictionary<T> = {
  [K in keyof T]: T[K]
};
