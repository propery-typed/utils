/** ! Doesn't work with `never`, `unknown` and `any` */
export type OmitValueByType<
  Target,
  TypeToOmit,
> = {
  [K in keyof Target as Target[K] extends TypeToOmit
    ? never
    : K
  ]: Target[K]
};
