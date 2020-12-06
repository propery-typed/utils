import { StringBreakByDelimiter } from '@/string';

export type ValueByPath<
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
            ? ValueByPath<Target[F], Extract<R, string>, Delimiter>
            : never
          : never;
