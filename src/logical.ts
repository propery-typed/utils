/**
 * Checks if passed type is `any`
 * @example
 * // true
 * type foo = IsAny<any>;
 * // false
 * type nev = IsAny<never>;
 * // false
 * type unk = IsAny<unknown>;
 * // false
 * type unk = IsAny<string>;
 */
export type IsAny<T> = 0 extends (1 & T)
  ? true
  : false;

/**
 * Checks if passed type is `never`
 * @example
 * // true
 * type nev = IsNever<never>;
 * // false
 * type unk = IsNever<unknown>;
 * // false
 * type foo = IsNever<any>;
 * // false
 * type bar = IsNever<string>;
 */
export type IsNever<T> = [T] extends [never]
  ? true
  : false;

/**
 * Checks if passed type is `unknown`
 * @example
 * // true
 * type unk = IsUnknown<unknown>;
 * // false
 * type foo = IsUnknown<string>;
 * // false
 * type bar = IsUnknown<any>;
 * // false
 * type nev = IsUnknown<never>;
 */
export type IsUnknown<T> = IsNever<keyof T> extends true
  ? true
  : false;

/**
 * Checks if passed type is dictionary
 * @example
 * // true
 * type some = IsDictionary<{ some: 'some' }>;
 * // false
 * type foo = IsDictionary<unknown>;
 * // false
 * type bar = IsDictionary<any[]>;
 * // false
 * type nev = IsDictionary<never>;
 */
export type IsDictionary<T> = IsNever<T> extends true
  ? false
  : T extends { [k: string]: unknown }
    ? true
    : false;

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
