export type JoinByDelimiter<
  Start,
  End,
  Delimiter extends string = '/',
> = Start extends string | number
  ? End extends string | number
    ? `${Start}${'' extends End ? '' : Delimiter}${End}`
    : never
  : never;
