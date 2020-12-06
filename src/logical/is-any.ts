/**
 * Checks if passed type is `any`
 * @example
 * // true
 * type an = IsAny<any>;
 * // false
 * type str = IsAny<string>;
 *
 * // false
 * type nev = IsAny<never>;
 * // false
 * type unk = IsAny<unknown>;
 * // false
 * type nul = IsAny<null>;
 * // false
 * type und = IsAny<undefined>;
 * // false
 * type v = IsAny<void>;
 */
export type IsAny<T> = 0 extends (1 & T)
  ? true
  : false;
