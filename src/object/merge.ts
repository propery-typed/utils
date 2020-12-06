/* eslint-disable @typescript-eslint/no-unused-vars */
/**
 * Merges multiple object into one
 * @example
 * type O1 = {
 *   some: 'some';
 * };
 * type O2 = {
 *   foo: number;
 *   bar: string;
 * };
 * type O3 = {
 *   foo: 'foo';
 *   merge: {
 *     obj: 'obj';
 *   };
 * };
 *
 * type res = Merge<[O1, O2, O3]>;
 *
 * // res is of following type
 * type typeOfRes = {
 *   some: 'some';
 *   foo: 'foo';
 *   bar: string;
 *   merge: {
 *     obj: 'obj';
 *   };
 * };
 */
export type Merge<A extends any[]> = A extends [infer O1, infer O2, ...infer Rest]
  ? O1 extends { [k: string]: unknown }
    ? O2 extends { [k: string]: unknown }
      ? {
        [K in keyof O1 | keyof O2]: K extends keyof O2
          ? O2[K]
          : K extends keyof O1
            ? O1[K]
            : never
      } extends infer MergedObject
        ? Merge<[MergedObject, ...Rest]>
        : never
      : never
    : never
  : A extends [infer MergedObject, ...infer _]
    ? MergedObject extends { [k: string]: unknown }
      ? MergedObject
      : never
    : never;
