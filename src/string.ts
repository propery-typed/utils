/* eslint-disable @typescript-eslint/no-unused-vars, @typescript-eslint/no-shadow */
import { ValidNumber, MinusOne } from './arithmetics';

/**
  * Transforms string into array of chars
  *
  * ! Warn:
  * Recursion limits doesn't allow us to handle
  * strings of more than 14 characters so workaround is
  * to break string into larger chunks for now.
  * This way we can allow string around 80 characters
  */
export type StringToChars<Base extends string> = string extends Base
  ? string[]
  : Base extends `${infer C0}${infer C1}${infer C2}${infer C3}${infer C4}${infer C5}${infer REST}`
    ? [C0, C1, C2, C3, C4, C5, ...StringToChars<REST>]
    : Base extends `${infer C0}${infer C1}${infer C2}${infer C3}${infer REST}`
      ? [C0, C1, C2, C3, ...StringToChars<REST>]
      : Base extends `${infer C0}${infer REST}`
        ? [C0, ...StringToChars<REST>]
        : [];

export type StringTail<
  Base extends string,
  From extends number = 0,
  Iteration extends number = 0,
> = string extends Base
  ? string
  : From extends ValidNumber
    ? From extends 0
      ? Base
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
      : Base extends `${infer _}${infer REST}`
        ? Iteration extends From
          ? REST
          : StringTail<REST, MinusOne<From>, Iteration>
        : ''
    : string;

export type StringJoinByDelimiter<
  Start,
  End,
  Delimiter extends string = '/',
> = Start extends string | number
  ? End extends string | number
    ? `${Start}${'' extends End ? '' : Delimiter}${End}`
    : never
  : never;

export type StringLength<Base extends string> = string extends Base
  ? number
  : StringToChars<Base>['length'];

export type StringHead<
  Base extends string,
  To extends number = StringLength<Base>,
  Head extends string = '',
> = string extends Base
  ? string
  : StringLength<Head> extends To
    ? Head
    : Base extends `${infer FIRST_CHAR}${infer REST}`
      ? StringHead<REST, To, `${Head}${FIRST_CHAR}`>
      : `${Head}${Base}`;

export type StringBreakByDelimiter<
  Base extends string,
  Delimiter extends string,
> = Base extends `${infer BEFORE}${Delimiter}${infer _}`
  ? BEFORE extends `${infer _}${Delimiter}${infer _}`
    ? never
    : Base extends `${BEFORE}${Delimiter}${infer AFTER}`
      ? [BEFORE, AFTER]
      : never
  : [Base, ''];

export type StringLastAfterDelimiter<
  Base extends string,
  Delimiter extends string,
> = Base extends `${infer BEFORE}${Delimiter}${infer _}`
  ? BEFORE extends `${infer _}${Delimiter}${infer _}`
    ? never
    : Base extends `${BEFORE}${Delimiter}${infer AFTER}`
      ? StringLastAfterDelimiter<AFTER, Delimiter>
      : never
  : Base;
