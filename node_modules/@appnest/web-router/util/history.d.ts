import { GlobalRouterEvent } from "../model";
export declare const historyPatches: [string, GlobalRouterEvent[]][];
/**
 * Patches the history object by ensuring correct events are dispatches when the history changes.
 */
export declare function ensureHistoryEvents(): void;
/**
 * Attaches a callback after the function on the object has been invoked.
 * Stores the original function at the _name.
 * @param obj
 * @param name
 * @param cb
 */
export declare function attachCallback(obj: any, name: string, cb: ((...args: any[]) => void)): void;
/**
 * Saves the native function on the history object.
 * @param obj
 * @param name
 * @param func
 */
export declare function saveNativeFunction(obj: any, name: string, func: (() => void)): void;
declare global {
    interface History {
        "native": {
            "back": ((distance?: any) => void);
            "forward": ((distance?: any) => void);
            "go": ((delta?: any) => void);
            "pushState": ((data: any, title?: string, url?: string | null) => void);
            "replaceState": ((data: any, title?: string, url?: string | null) => void);
        };
    }
}
