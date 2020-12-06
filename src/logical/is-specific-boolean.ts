import { UnionToTuple } from '@/union';

/**
 * Check if type is `true` or `false`, but not `boolean`
 * @example
 * // true
 * type tr = IsSpecificBoolean<true>;
 * // true
 * type fl = IsSpecificBoolean<false>;
 * // false
 * type bool = IsSpecificBoolean<boolean>;
 */
export type IsSpecificBoolean<T extends boolean> = UnionToTuple<T> extends [false, true]
  ? false
  : true;
