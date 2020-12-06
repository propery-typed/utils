import { IsSpecificBoolean } from './is-specific-boolean';

/**
 * Not operation for boolean values
 * @example
 * // false
 * type falsy = Not<true>;
 * // true
 * type truthy = Not<false>;
 * // never
 * type nev = Not<boolean>;
 */
export type Not<T extends boolean> = IsSpecificBoolean<T> extends true
  ? never
  : T extends true
    ? false
    : true;
