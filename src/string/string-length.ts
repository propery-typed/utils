import { ToChars } from './to-chars';

export type StringLength<Base extends string> = string extends Base
  ? number
  : ToChars<Base>['length'];
