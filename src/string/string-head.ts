import { StringLength } from './string-length';

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
