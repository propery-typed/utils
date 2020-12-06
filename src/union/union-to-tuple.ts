import { UnionToIntersection } from './union-to-intersection';

/**
 * Transforms union into array
 * @example
 * // foo is of type `[1, 2, 4]`
 * type foo =  UnionToTuple<1 | 2 | 4>;
 *
 * type Model = {
 *   foo: number;
 *   bar: string;
 *   fizz: {
 *     buzz: 15;
 *   };
 *   some: 'some'
 * }
 *
 * // ModelKeys is of type `['foo', 'bar', 'fizz', 'some']`
 * type ModelKeys =  UnionToTuple<keyof Model>;
 */
export type UnionToTuple<T> = UnionToIntersection<
(T extends any
  ? (t: T) => T
  : never)
> extends (_: any) => infer W
  ? [...UnionToTuple<Exclude<T, W>>, W]
  : [];
