import { GLOBAL_ROUTER_EVENTS_TARGET } from "../config";
/**
 * Dispatches a did change route event.
 * @param $elem
 * @param {IRoute} detail
 */
export function dispatchRouteChangeEvent($elem, detail) {
    $elem.dispatchEvent(new CustomEvent("changestate", { detail }));
}
/**
 * Dispatches an event on the window object.
 * @param name
 * @param detail
 */
export function dispatchGlobalRouterEvent(name, detail) {
    GLOBAL_ROUTER_EVENTS_TARGET.dispatchEvent(new CustomEvent(name, { detail }));
}
/**
 * Adds an event listener (or more) to an element and returns a function to unsubscribe.
 * @param $elem
 * @param type
 * @param listener
 * @param options
 */
export function addListener($elem, type, listener, options) {
    const types = Array.isArray(type) ? type : [type];
    types.forEach(t => $elem.addEventListener(t, listener, options));
    return () => types.forEach(t => $elem.removeEventListener(t, listener, options));
}
/**
 * Removes the event listeners in the array.
 * @param listeners
 */
export function removeListeners(listeners) {
    listeners.forEach(unsub => unsub());
}
//# sourceMappingURL=events.js.map