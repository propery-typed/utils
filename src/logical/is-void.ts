import { IsAny } from './is-any';
import { IsNever } from './is-never';
import { IsUndefined } from './is-undefined';
import { Or } from './or';

/**
 * Checks if passed type is `void`
 * @example
 * // true
 * type v = IsVoid<void>;
 * // false
 * type str = IsVoid<string>;
 *
 * // false
 * type an = IsVoid<any>;
 * // false
 * type nev = IsVoid<never>;
 * // false
 * type unk = IsVoid<unknown>;
 * // false
 * type nul = IsVoid<null>;
 * // false
 * type und = IsVoid<undefined>;
 */
export type IsVoid<T> = Or<[IsAny<T>, IsNever<T>, IsUndefined<T>]> extends true
  ? false
  // eslint-disable-next-line @typescript-eslint/no-invalid-void-type
  : T extends void
    ? true
    : false;
