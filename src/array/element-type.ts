export type ElementType<
  A extends unknown[],
> = A extends (infer ELEMENT_TYPE)[]
  ? ELEMENT_TYPE
  : never;
