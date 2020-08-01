export interface IRouterSlot<D = any, P = any> extends HTMLElement {
    readonly route: IRoute<D> | null;
    readonly isRoot: boolean;
    readonly fragments: IPathFragments | null;
    readonly match: IRouteMatch<D> | null;
    routes: IRoute<D>[];
    add: ((routes: IRoute<D>[], navigate?: boolean) => void);
    clear: (() => void);
    render: (() => Promise<void>);
    constructAbsolutePath: ((path: PathFragment) => string);
    parent: IRouterSlot<P> | null | undefined;
    queryParentRouterSlot: (() => IRouterSlot<P> | null);
}
export declare type RoutingInfo<D = any, P = any> = {
    slot: IRouterSlot<D, P>;
    match: IRouteMatch<D>;
};
export declare type CustomResolver<D = any, P = any> = ((info: RoutingInfo<D>) => boolean | void | Promise<boolean> | Promise<void>);
export declare type Guard<D = any, P = any> = ((info: RoutingInfo<D, P>) => boolean | Promise<boolean>);
export declare type Cancel = (() => boolean);
export declare type PageComponent = HTMLElement;
export declare type ModuleResolver = Promise<{
    default: any;
}>;
export declare type Class<T extends PageComponent = PageComponent> = {
    new (...args: any[]): T;
};
export declare type Setup<D = any> = ((component: PageComponent, info: RoutingInfo<D>) => void);
export declare type RouterTree<D = any, P = any> = ({
    slot: IRouterSlot<D, P>;
} & {
    child?: RouterTree;
}) | null | undefined;
/**
 * The base route interface.
 * D = the data type of the data
 */
export interface IRouteBase<D = any> {
    path: PathFragment;
    data?: D;
    guards?: Guard[];
    fuzzy?: boolean;
}
/**
 * Route type used for redirection.
 */
export interface IRedirectRoute<D = any> extends IRouteBase<D> {
    redirectTo: string;
    preserveQuery?: boolean;
}
/**
 * Route type used to resolve and stamp components.
 */
export interface IComponentRoute<D = any> extends IRouteBase<D> {
    component: Class | ModuleResolver | PageComponent | (() => Class) | (() => PageComponent) | (() => ModuleResolver);
    setup?: Setup;
}
/**
 * Route type used to take control of how the route should resolve.
 */
export interface IResolverRoute<D = any> extends IRouteBase<D> {
    resolve: CustomResolver;
}
export declare type IRoute<D = any> = IRedirectRoute<D> | IComponentRoute<D> | IResolverRoute<D>;
export declare type PathFragment = string;
export declare type IPathFragments = {
    consumed: PathFragment;
    rest: PathFragment;
};
export interface IRouteMatch<D = any> {
    route: IRoute<D>;
    params: Params;
    fragments: IPathFragments;
    match: RegExpMatchArray;
}
export declare type PushStateEvent = CustomEvent<null>;
export declare type ReplaceStateEvent = CustomEvent<null>;
export declare type ChangeStateEvent = CustomEvent<null>;
export declare type WillChangeStateEvent = CustomEvent<null>;
export declare type NavigationStartEvent<D = any> = CustomEvent<RoutingInfo<D>>;
export declare type NavigationSuccessEvent<D = any> = CustomEvent<RoutingInfo<D>>;
export declare type NavigationCancelEvent<D = any> = CustomEvent<RoutingInfo<D>>;
export declare type NavigationErrorEvent<D = any> = CustomEvent<RoutingInfo<D>>;
export declare type NavigationEndEvent<D = any> = CustomEvent<RoutingInfo<D>>;
export declare type Params = {
    [key: string]: string;
};
export declare type Query = {
    [key: string]: string;
};
export declare type EventListenerSubscription = (() => void);
/**
 * RouterSlot related events.
 */
export declare type RouterSlotEvent = "changestate";
/**
 * History related events.
 */
export declare type GlobalRouterEvent = "pushstate" | "replacestate" | "popstate" | "changestate" | "willchangestate" | "navigationstart" | "navigationcancel" | "navigationerror" | "navigationsuccess" | "navigationend";
export interface ISlashOptions {
    start: boolean;
    end: boolean;
}
declare global {
    interface GlobalEventHandlersEventMap {
        "pushstate": PushStateEvent;
        "replacestate": ReplaceStateEvent;
        "popstate": PopStateEvent;
        "changestate": ChangeStateEvent;
        "navigationstart": NavigationStartEvent;
        "navigationend": NavigationEndEvent;
        "navigationsuccess": NavigationSuccessEvent;
        "navigationcancel": NavigationCancelEvent;
        "navigationerror": NavigationErrorEvent;
        "willchangestate": WillChangeStateEvent;
    }
}
