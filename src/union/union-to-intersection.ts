/**
 * Transforms union of objects into intersection
 * @example
 * // foobar is of type `{ foo: string } & { bar: number }`
 * type foobar =  UnionToIntersection<{ foo: string } | { bar: number }>;
 *
 * // stringBar is of type `string & { bar: number }`
 * type stringBar =  UnionToIntersection<string | { bar: number }>;
 *
 * // fail is of type `never`
 * type fail =  UnionToIntersection<string | number>;
 */
export type UnionToIntersection<U> = (
  U extends any ? (arg: U) => any : never
) extends (arg: infer I) => void
  ? I
  : never;
