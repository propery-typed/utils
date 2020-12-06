/**
 * Matches any object
 * ! `never` also matches AnyObejct
 * @example
 * // true
 * type foo = { some: string } extends AnyObject ? true : false
 * // true
 * type bar = {} extends AnyObject ? true : false
 * // Also true for never
 * type nev = never extends AnyObject ? true : false;
 *
 * // boolean (true | false)
 * type an = any extends AnyObject ? true : false;
 * // false
 * type unk = unknown extends AnyObject ? true : false;
 * // false
 * type nul = null extends AnyObject ? true : false;
 * // false
 * type und = undefined extends AnyObject ? true : false;
 * // false
 * type v = void extends AnyObject ? true : false;
 */
export type AnyObject = { [k: string]: unknown };
