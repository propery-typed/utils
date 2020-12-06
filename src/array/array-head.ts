/* eslint-disable @typescript-eslint/no-unused-vars */

export type ArrayHead<
  A extends unknown[],
> = A extends [infer FIRST_ELEMENT, ...infer _]
  ? FIRST_ELEMENT
  : never;
