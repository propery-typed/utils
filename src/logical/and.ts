/**
 * Logical AND for boolean types
 * @example
 * // true
 * type foo = And<[true, true]>;
 * // false
 * type bar = And<[true, false, true, true]>;
 */
export type And<A extends boolean[]> = A extends [infer T, ...infer Rest]
  ? T extends false
    ? false
    : Rest extends boolean[]
      ? And<Rest>
      : never
  : A extends []
    ? true
    : never;
