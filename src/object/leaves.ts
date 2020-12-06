import { StringJoinByDelimiter } from '@/string';

export type Leaves<
  Target extends { [k: string]: any },
  Delimiter extends string,
> = Target extends { [k: string]: unknown }
  ? {
    [K in keyof Target]-?: K extends string | number
      ? StringJoinByDelimiter<K, Leaves<Target[K], Delimiter>, Delimiter>
      : never
  }[keyof Target]
  : '';
