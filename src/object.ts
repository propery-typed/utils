import { ValidRecursionLap, PlusOne } from './arithmetics';
import { StringBreakByDelimiter, StringJoinByDelimiter, StringLastAfterDelimiter } from './string';
import { UnionToTuple } from './union';

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

/** ! Doesn't work with `never`, `unknown` and `any` */
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

export type ObjectMerge<O1, O2> = O1 extends { [k: string]: unknown }
  ? O2 extends { [k: string]: unknown }
    ? {
      [K in keyof O1 | keyof O2]: K extends keyof O2
        ? O2[K]
        : K extends keyof O1
          ? O1[K]
          : never
    }
    : never
  : never;

type NotNamespacedPair<
  Key,
  Target,
> = Key extends string
  ? { [K in StringLastAfterDelimiter<Key, '/'>]: ObjectValueByPath<Target, Key> }
  : never;

type MergeOutputs<
  Target extends { [k: string]: any },
  Keys extends any[],
  Aggregation extends { [k: string]: unknown } | unknown = unknown,
> = Keys extends [infer Key, ...infer Rest]
  ? Aggregation extends { [k: string]: unknown }
    ? ObjectMerge<Aggregation, NotNamespacedPair<Key, Target>> extends infer NewAggregation
      ? MergeOutputs<Target, Rest, NewAggregation>
      : never
    : MergeOutputs<Target, Rest, NotNamespacedPair<Key, Target>>
  : Aggregation;

export type ObejctFlatten<
  Target,
> = Target extends { [k: string]: unknown }
  ? MergeOutputs<
  Target,
  UnionToTuple<ObjectLeaves<Target, '/'>>
  >
  : never;

export type ObjectFlattenPreserveKeys<
  Target extends { [k: string]: any },
> = {
  [K in ObjectLeaves<Target, '/'>]: ObjectValueByPath<Target, K>;
};
