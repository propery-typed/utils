/**
  * Transforms string into array of chars
  *
  * ! Warn:
  * Recursion limits doesn't allow us to handle
  * strings of more than 14 characters so workaround is
  * to break string into larger chunks for now.
  * This way we can allow string around 80 characters
  */
export type ToChars<Base extends string> = string extends Base
  ? string[]
  : Base extends `${infer C0}${infer C1}${infer C2}${infer C3}${infer C4}${infer C5}${infer REST}`
    ? [C0, C1, C2, C3, C4, C5, ...ToChars<REST>]
    : Base extends `${infer C0}${infer C1}${infer C2}${infer C3}${infer REST}`
      ? [C0, C1, C2, C3, ...ToChars<REST>]
      : Base extends `${infer C0}${infer REST}`
        ? [C0, ...ToChars<REST>]
        : [];
