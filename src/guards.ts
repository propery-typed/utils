export type IfAny<T, Y, N> = 0 extends (1 & T) ? Y : N;
export type IsAny<T> = IfAny<T, true, false>;

export type IsNever<T> = [T] extends [never] ? true : false;

export type IsUnknown<T> = IsNever<keyof T> extends true
  ? true
  : false;

export type IsDictionary<T> = T extends { [k: string]: unknown }
  ? true
  : false;
