import { EventListenerSubscription, GlobalRouterEvent, RoutingInfo } from "../model";
/**
 * Dispatches a did change route event.
 * @param $elem
 * @param {IRoute} detail
 */
export declare function dispatchRouteChangeEvent<D = any>($elem: HTMLElement, detail: RoutingInfo<D>): void;
/**
 * Dispatches an event on the window object.
 * @param name
 * @param detail
 */
export declare function dispatchGlobalRouterEvent<D = any>(name: GlobalRouterEvent, detail?: RoutingInfo<D>): void;
/**
 * Adds an event listener (or more) to an element and returns a function to unsubscribe.
 * @param $elem
 * @param type
 * @param listener
 * @param options
 */
export declare function addListener<T extends Event, eventType extends string>($elem: EventTarget, type: eventType[] | eventType, listener: ((e: T) => void), options?: boolean | AddEventListenerOptions): EventListenerSubscription;
/**
 * Removes the event listeners in the array.
 * @param listeners
 */
export declare function removeListeners(listeners: EventListenerSubscription[]): void;
