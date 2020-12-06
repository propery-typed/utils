import { IsNever } from './is-never';

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
