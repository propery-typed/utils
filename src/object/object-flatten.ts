import { AnyObject } from '@/matchers';
import { UnionToIntersection } from '@/union';

import { ValueOf } from './value-of';

type ObjectValuesOf<T> = Exclude<
Extract<ValueOf<T>, AnyObject>,
any[]
>;

type NonObjectKeysOf<T> = {
  [K in keyof T as T[K] extends AnyObject
    ? never
    : K]: K
} extends infer NonObjectDictionary
  ? NonObjectDictionary[keyof NonObjectDictionary]
  : never;

/**
 * Flattens object by one level
 * @example
 * type Model = {
 *   foo: number;
 *   bar: string;
 *   baz: {
 *     qux: string[];
 *     quux: {
 *       quuz: number | string;
 *       corge: boolean;
 *     };
 *     flob: number;
 *   };
 *   wobble: {
 *     doop: string;
 *   };
 * };
 *
 * type Res = ObjectFlatten<Model>;
 *
 * // no errors
 * const result: Res = {
 *   bar: 'some string',
 *   doop: 'some other string',
 *   flob: 12,
 *   foo: 44,
 *   quux: {
 *     corge: true,
 *     quuz: 44,
 *   },
 *   qux: ['array', 'of', 'strings']
 * };
 */
export type ObjectFlatten<T> = Pick<T, NonObjectKeysOf<T>> &
UnionToIntersection<ObjectValuesOf<T>>;
