/**
 * Matches empty object
 * ! `never` also matches EmptyObject
 * @example
 * // false
 * type foo = { some: string } extends EmptyObject ? true : false
 * // true
 * type bar = {} extends EmptyObject ? true : false
 * // Also true for never
 * type nev = never extends EmptyObject ? true : false;
 *
 * // boolean (true | false)
 * type an = any extends EmptyObject ? true : false;
 * // false
 * type unk = unknown extends EmptyObject ? true : false;
 * // false
 * type nul = null extends EmptyObject ? true : false;
 * // false
 * type und = undefined extends EmptyObject ? true : false;
 * // false
 * type v = void extends EmptyObject ? true : false;
 */
export type EmptyObject = { [k: string]: never };
