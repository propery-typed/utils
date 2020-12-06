import { IsAny } from './is-any';
import { IsNever } from './is-never';
import { Or } from './or';

/**
 * Check if passed type is `undefined`
 * @example
 * // true
 * type und = IsUndefined<undefined>
 * // false
 * type str = IsUndefined<string>
 *
 * // false
 * type an = IsUndefined<any>
 * // false
 * type nul = IsUndefined<null>
 * // false
 * type v = IsUndefined<void>
 * // false
 * type nev = IsUndefined<never>
 * // false
 * type unk = IsUndefined<unknown>
 */
export type IsUndefined<T> = Or<[IsNever<T>, IsAny<T>]> extends true
  ? false
  : T extends undefined
    ? true
    : false;
