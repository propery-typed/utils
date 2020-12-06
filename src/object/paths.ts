import { ValidRecursionLap, PlusOne } from '@/arithmetics';
import { JoinByDelimiter } from '@/string';

export type Paths<
  Target extends { [k: string]: any },
  Delimiter extends string = '/',
  Iteration extends number = 0,
> = Iteration extends ValidRecursionLap
  ? Target extends { [k: string]: unknown }
    ? keyof Target | {
      [K in keyof Target]-?: JoinByDelimiter<
      K,
      Paths<Target[K], Delimiter, PlusOne<Iteration>>,
      Delimiter
      >
    }[keyof Target]
    : never
  : string;
