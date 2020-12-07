import { EmptyObject } from '@/matchers/empty-object';

import { IsAny } from './is-any';
import { IsNever } from './is-never';
import { Or } from './or';

/**
 * Checks if passed type is empty object
 * @example
 * // true
 * type bar = IsEmptyObject<{}>;
 * // false
 * type foo = IsEmptyObject<{ some: string }>;
 *
 * // false
 * type an = IsEmptyObject<any>;
 * // false
 * type nev = IsEmptyObject<never>;
 * // false
 * type unk = IsEmptyObject<unknown>;
 * // false
 * type nul = IsEmptyObject<null>;
 * // false
 * type und = IsEmptyObject<undefined>;
 * // false
 * type v = IsEmptyObject<void>;
 */
export type IsEmptyObject<T> = Or<[IsAny<T>, IsNever<T>]> extends true
  ? false
  : T extends EmptyObject
    ? true
    : false;
