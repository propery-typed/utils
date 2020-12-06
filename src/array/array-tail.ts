export type ArrayTail<
  A extends unknown[],
> = ((...parameters: A) => unknown) extends ((head: infer _, ...tail: infer TAIL) => unknown)
  ? TAIL
  : never;
