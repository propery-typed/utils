import { Leaves } from './leaves';
import { ValueByPath } from './value-by-path';

export type FlattenPreserveKeys<
  Target extends { [k: string]: any },
> = {
  [K in Leaves<Target, '/'>]: ValueByPath<Target, K>;
};
