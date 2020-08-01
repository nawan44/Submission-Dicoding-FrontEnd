import { IComponentRoute, IRedirectRoute, IResolverRoute, IRoute, IRouteMatch, IRouterSlot, PageComponent, PathFragment, RouterTree, RoutingInfo } from "../model";
/**
 * Determines whether the path is active.
 * If the full path starts with the path and is followed by the end of the string or a "/" the path is considered active.
 * @param path
 * @param fullPath
 */
export declare function isPathActive(path: string | PathFragment, fullPath?: string): boolean;
/**
 * Matches a route.
 * @param route
 * @param path
 */
export declare function matchRoute<D = any>(route: IRoute<D>, path: string | PathFragment): IRouteMatch<D> | null;
/**
 * Matches the first route that matches the given path.
 * @param routes
 * @param path
 */
export declare function matchRoutes<D = any>(routes: IRoute<D>[], path: string | PathFragment): IRouteMatch<D> | null;
/**
 * Returns the page from the route.
 * If the component provided is a function (and not a class) call the function to get the promise.
 * @param route
 * @param info
 */
export declare function resolvePageComponent(route: IComponentRoute, info: RoutingInfo): Promise<PageComponent>;
/**
 * Determines if a route is a redirect route.
 * @param route
 */
export declare function isRedirectRoute(route: IRoute): route is IRedirectRoute;
/**
 * Determines if a route is a resolver route.
 * @param route
 */
export declare function isResolverRoute(route: IRoute): route is IResolverRoute;
/**
 * Traverses the router tree up to the root route.
 * @param slot
 */
export declare function traverseRouterTree(slot: IRouterSlot): {
    tree: RouterTree;
    depth: number;
};
/**
 * Generates a path based on the router tree.
 * @param tree
 * @param depth
 */
export declare function getFragments(tree: RouterTree, depth: number): PathFragment[];
/**
 * Constructs the correct absolute path based on a router.
 * - Handles relative paths: "mypath"
 * - Handles absolute paths: "/mypath"
 * - Handles traversing paths: "../../mypath"
 * @param slot
 * @param path
 */
export declare function constructAbsolutePath<D = any, P = any>(slot: IRouterSlot<D, P>, path?: string | PathFragment): string;
/**
 * Handles a redirect.
 * @param slot
 * @param route
 */
export declare function handleRedirect(slot: IRouterSlot, route: IRedirectRoute): void;
/**
 * Determines whether the navigation should start based on the current match and the new match.
 * @param currentMatch
 * @param newMatch
 */
export declare function shouldNavigate<D>(currentMatch: IRouteMatch<D> | null, newMatch: IRouteMatch<D>): boolean;
