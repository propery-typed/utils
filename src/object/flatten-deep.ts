import { StringLastAfterDelimiter } from '@/string';
import { UnionToTuple } from '@/union';

import { Leaves } from './leaves';
import { Merge } from './merge';
import { ValueByPath } from './value-by-path';

type NotNamespacedPair<
  Key,
  Target,
> = Key extends string
  ? { [K in StringLastAfterDelimiter<Key, '/'>]: ValueByPath<Target, Key> }
  : never;

type MergeOutputs<
  Target extends { [k: string]: any },
  Keys extends any[],
  Aggregation extends { [k: string]: unknown } | unknown = unknown,
> = Keys extends [infer Key, ...infer Rest]
  ? Aggregation extends { [k: string]: unknown }
    ? Merge<[Aggregation, NotNamespacedPair<Key, Target>]> extends infer NewAggregation
      ? MergeOutputs<Target, Rest, NewAggregation>
      : never
    : MergeOutputs<Target, Rest, NotNamespacedPair<Key, Target>>
  : Aggregation;

export type FlattenDeep<
  Target,
> = Target extends { [k: string]: unknown }
  ? MergeOutputs<
  Target,
  UnionToTuple<Leaves<Target, '/'>>
  >
  : never;
