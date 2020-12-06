import { MinusOne, ValidNumber } from '@/arithmetics';

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
