import { ValidRecursionLap, PlusOne } from '@/arithmetics';

import { StringBreakByDelimiter, StringJoinByDelimiter } from './string';

export type ObjectLeaves<
  Target extends { [k: string]: any },
  Delimiter extends string,
> = Target extends { [k: string]: unknown }
  ? {
    [K in keyof Target]-?: K extends string | number
      ? StringJoinByDelimiter<K, ObjectLeaves<Target[K], Delimiter>, Delimiter>
      : never
  }[keyof Target]
  : '';

export type ObjectOmitValueByType<
  Target,
  TypeToOmit,
> = {
  [K in keyof Target as Target[K] extends TypeToOmit
    ? never
    : K
  ]: Target[K]
};

export type ObjectPaths<
  Target extends { [k: string]: any },
  Delimiter extends string = '/',
  Iteration extends number = 0,
> = Iteration extends ValidRecursionLap
  ? Target extends { [k: string]: unknown }
    ? keyof Target | {
      [K in keyof Target]-?: StringJoinByDelimiter<
      K,
      ObjectPaths<Target[K], Delimiter, PlusOne<Iteration>>,
      Delimiter
      >
    }[keyof Target]
    : never
  : string;

export type ObjectValueByPath<
  Target extends { [k: string]: any },
  Path extends string,
  Delimiter extends string = '/',
> = string extends Path
  ? never
  : string extends Delimiter
    ? never
    : string extends keyof Target
      ? never
      : Path extends ''
        ? Target
        : StringBreakByDelimiter<Path, Delimiter> extends [infer F, infer R]
          ? F extends keyof Target
            ? ObjectValueByPath<Target[F], Extract<R, string>, Delimiter>
            : never
          : never;
