export type ToKeyValuePairs<T> = {
  [K in keyof T]: T[K]
};
