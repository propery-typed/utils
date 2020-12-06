/**
 * Logical OR for boolean types
 * @example
 * // true
 * type bar = Or<[false, false, true, false]>;
 * // false
 * type foo = Or<[false, false]>;
 */
export type Or<A extends boolean[]> = A extends [infer T, ...infer Rest]
  ? T extends true
    ? true
    : Rest extends boolean[]
      ? Or<Rest>
      : never
  : A extends []
    ? false
    : never;
