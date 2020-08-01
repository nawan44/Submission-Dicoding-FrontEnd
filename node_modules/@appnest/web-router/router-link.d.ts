import { IRouterSlot, PathFragment } from "./model";
/**
 * Router link.
 * @slot - Default content.
 */
export declare class RouterLink extends HTMLElement {
    private listeners;
    private _context;
    static readonly observedAttributes: string[];
    /**
     * The path of the navigation.
     * @attr
     */
    path: string | PathFragment;
    /**
     * Whether the element is disabled or not.
     * @attr
     */
    disabled: boolean;
    /**
     * Whether the element is active or not.
     * @attr
     */
    active: boolean;
    /**
     * Whether the focus should be delegated.
     * @attr
     */
    delegateFocus: boolean;
    /**
     * Whether the query should be preserved or not.
     * @attr
     */
    preserveQuery: boolean;
    /**
     * The current router slot context.
     */
    context: IRouterSlot | null;
    /**
     * Returns the absolute path.
     */
    readonly absolutePath: string;
    constructor();
    /**
     * Hooks up the element.
     */
    connectedCallback(): void;
    /**
     * Tear down listeners.
     */
    disconnectedCallback(): void;
    /**
     * Reacts to attribute changed callback.
     * @param name
     * @param oldValue
     * @param newValue
     */
    attributeChangedCallback(name: string, oldValue: unknown, newValue: unknown): void;
    private updateTabIndex;
    /**
     * Returns the absolute path constructed relative to the context.
     * If no router parent was found the path property is the absolute one.
     */
    constructAbsolutePath(path: string): string;
    /**
     * Updates whether the route is active or not.
     */
    protected updateActive(): void;
    /**
     * Navigates to the specified path.
     */
    navigate(path: string, e?: Event): void;
}
declare global {
    interface HTMLElementTagNameMap {
        "router-link": RouterLink;
    }
}
