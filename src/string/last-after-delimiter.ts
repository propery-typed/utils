/* eslint-disable @typescript-eslint/no-shadow, @typescript-eslint/no-unused-vars */

export type LastAfterDelimiter<
  Base extends string,
  Delimiter extends string,
> = Base extends `${infer BEFORE}${Delimiter}${infer _}`
  ? BEFORE extends `${infer _}${Delimiter}${infer _}`
    ? never
    : Base extends `${BEFORE}${Delimiter}${infer AFTER}`
      ? LastAfterDelimiter<AFTER, Delimiter>
      : never
  : Base;
