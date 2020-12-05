/* eslint-disable @typescript-eslint/no-unused-vars */
export type ArrayElementType<
  A extends unknown[],
> = A extends (infer ELEMENT_TYPE)[]
  ? ELEMENT_TYPE
  : never;

export type ArrayHead<
  A extends unknown[],
> = A extends [infer FIRST_ELEMENT, ...infer _]
  ? FIRST_ELEMENT
  : never;

export type ArrayTail<
  A extends unknown[],
> = ((...parameters: A) => unknown) extends ((head: infer _, ...tail: infer TAIL) => unknown)
  ? TAIL
  : never;
