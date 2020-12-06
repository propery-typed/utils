import { IsAny } from './is-any';
import { IsNever } from './is-never';
import { Or } from './or';

/**
 * Check if passed type is `null`
 * @example
 * // true
 * type nul = IsNull<null>
 * // false
 * type str = IsNull<string>
 *
 * // false
 * type an = IsNull<any>;
 * // false
 * type nev = IsNull<never>;
 * // false
 * type unk = IsNull<unknown>;
 * // false
 * type und = IsNull<undefined>;
 * // false
 * type v = IsNull<void>;
 */
export type IsNull<T> = Or<[IsAny<T>, IsNever<T>]> extends true
  ? false
  : T extends null
    ? true
    : false;
