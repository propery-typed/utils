/**
 * Checks if passed type is `never`
 * @example
 * // true
 * type nev = IsNever<never>;
 * // false
 * type str = IsNever<string>;
 *
 * // false
 * type an = IsNever<any>;
 * // false
 * type unk = IsNever<unknown>;
 * // false
 * type nul = IsNever<null>;
 * // false
 * type und = IsNever<undefined>;
 * // false
 * type v = IsNever<void>;
 */
export type IsNever<T> = [T] extends [never]
  ? true
  : false;
