import { Leaves } from './leaves';
import { ValueByPath } from './value-by-path';

export type ObjectFlattenPreserveKeys<
  Target extends { [k: string]: any },
> = {
  [K in Leaves<Target, '/'>]: ValueByPath<Target, K>;
};
