import { IRouterSlot } from "../model";
/**
 * Queries the parent router.
 * @param $elem
 */
export declare function queryParentRouterSlot<D = any>($elem: Element): IRouterSlot<D> | null;
/**
 * Traverses the roots and returns the first match.
 * The minRoots parameter indicates how many roots should be traversed before we started matching with the query.
 * @param $elem
 * @param query
 * @param minRoots
 * @param roots
 */
export declare function queryParentRoots<T>($elem: Element, query: string, minRoots?: number, roots?: number): T | null;
