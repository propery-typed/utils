export type OmitType<O, T> = {
  [K in keyof O as O[K] extends T
    ? never
    : K
  ]: O[K]
};
