import { IsNever } from './is-never';
import { IsNull } from './is-null';
import { IsUndefined } from './is-undefined';
import { IsVoid } from './is-void';
import { Or } from './or';

/**
 * Checks if passed type is `unknown`
 * @example
 * // true
 * type unk = IsUnknown<unknown>;
 * // false
 * type str = IsUnknown<string>;
 *
 * // false
 * type an = IsUnknown<any>;
 * // false
 * type nev = IsUnknown<never>;
 * // false
 * type nul = IsUnknown<null>
 * // false
 * type und = IsUnknown<undefined>
 * // false
 * type v = IsUnknown<void>
 */
export type IsUnknown<T> = Or<[IsNull<T>, IsUndefined<T>, IsVoid<T>]> extends true
  ? false
  : IsNever<keyof T> extends true
    ? true
    : false;
