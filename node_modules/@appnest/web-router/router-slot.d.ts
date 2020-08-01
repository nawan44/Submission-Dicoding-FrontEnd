import { IPathFragments, IRoute, IRouteMatch, IRouterSlot, PathFragment } from "./model";
/**
 * Slot for a node in the router tree.
 * @slot - Default content.
 * @event changestate - Dispatched when the router slot state changes.
 */
export declare class RouterSlot<D = any, P = any> extends HTMLElement implements IRouterSlot<D, P> {
    /**
     * Listeners on the router.
     */
    private listeners;
    /**
     * The available routes.
     */
    private _routes;
    routes: IRoute<D>[];
    /**
     * The parent router.
     * Is REQUIRED if this router is a child.
     * When set, the relevant listeners are added or teared down because they depend on the parent.
     */
    _parent: IRouterSlot<P> | null | undefined;
    parent: IRouterSlot<P> | null | undefined;
    /**
     * The current route.
     */
    readonly route: IRoute<D> | null;
    /**
     * The current path fragment.
     */
    readonly fragments: IPathFragments | null;
    /**
     * The current path routeMatch.
     */
    private _routeMatch;
    readonly match: IRouteMatch<D> | null;
    /**
     * Whether the router is a root router.
     */
    readonly isRoot: boolean;
    /**
     * Hooks up the element.
     */
    constructor();
    /**
     * Query the parent router slot when the router slot is connected.
     */
    connectedCallback(): void;
    /**
     * Tears down the element.
     */
    disconnectedCallback(): void;
    /**
     * Queries the parent router.
     */
    queryParentRouterSlot(): IRouterSlot<P> | null;
    /**
     * Returns an absolute path relative to the router slot.
     * @param path
     */
    constructAbsolutePath(path: PathFragment): string;
    /**
     * Adds routes to the router.
     * Navigates automatically if the router slot is the root and is connected.
     * @param routes
     * @param navigate
     */
    add(routes: IRoute<D>[], navigate?: boolean): void;
    /**
     * Removes all routes.
     */
    clear(): void;
    private idasd;
    /**
     * Each time the path changes, load the new path.
     */
    render(): Promise<void>;
    /**
     * Attaches listeners, either globally or on the parent router.
     */
    protected attachListeners(): void;
    /**
     * Detaches the listeners.
     */
    protected detachListeners(): void;
    /**
     * Loads a new path based on the routes.
     * Returns true if a navigation was made to a new page.
     */
    protected renderPath(path: string | PathFragment): Promise<boolean>;
}
declare global {
    interface HTMLElementTagNameMap {
        "router-slot": RouterSlot;
    }
}
