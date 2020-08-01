import { GLOBAL_ROUTER_EVENTS_TARGET } from "./config";
import { addListener, isPathActive, queryParentRouterSlot, queryString, removeListeners, slashify } from "./util";
const template = document.createElement("template");
template.innerHTML = `<slot></slot>`;
/**
 * Router link.
 * @slot - Default content.
 */
export class RouterLink extends HTMLElement {
    constructor() {
        super();
        this.listeners = [];
        this._context = null;
        this.navigate = this.navigate.bind(this);
        this.updateActive = this.updateActive.bind(this);
        // Attach the template
        const shadow = this.attachShadow({ mode: "open", delegatesFocus: this.delegateFocus });
        shadow.appendChild(template.content.cloneNode(true));
    }
    static get observedAttributes() {
        return [
            "disabled"
        ];
    }
    /**
     * The path of the navigation.
     * @attr
     */
    set path(value) {
        this.setAttribute("path", value);
    }
    get path() {
        return this.getAttribute("path") || "/";
    }
    /**
     * Whether the element is disabled or not.
     * @attr
     */
    get disabled() {
        return this.hasAttribute("disabled");
    }
    set disabled(value) {
        value ? this.setAttribute("disabled", "") : this.removeAttribute("disabled");
    }
    /**
     * Whether the element is active or not.
     * @attr
     */
    get active() {
        return this.hasAttribute("active");
    }
    set active(value) {
        value ? this.setAttribute("active", "") : this.removeAttribute("active");
    }
    /**
     * Whether the focus should be delegated.
     * @attr
     */
    get delegateFocus() {
        return this.hasAttribute("delegateFocus");
    }
    set delegateFocus(value) {
        value ? this.setAttribute("delegateFocus", "") : this.removeAttribute("delegateFocus");
    }
    /**
     * Whether the query should be preserved or not.
     * @attr
     */
    get preserveQuery() {
        return this.hasAttribute("preservequery");
    }
    set preserveQuery(value) {
        value ? this.setAttribute("preservequery", "") : this.removeAttribute("preservequery");
    }
    /**
     * The current router slot context.
     */
    get context() {
        return this._context;
    }
    set context(value) {
        this._context = value;
    }
    /**
     * Returns the absolute path.
     */
    get absolutePath() {
        return this.constructAbsolutePath(this.path);
    }
    /**
     * Hooks up the element.
     */
    connectedCallback() {
        this.listeners.push(addListener(this, "click", e => this.navigate(this.path, e)), addListener(this, "keydown", (e) => e.code === "Enter" || e.code === "Space" ? this.navigate(this.path, e) : undefined), addListener(GLOBAL_ROUTER_EVENTS_TARGET, "navigationend", this.updateActive), addListener(GLOBAL_ROUTER_EVENTS_TARGET, "changestate", this.updateActive));
        // Query the nearest router
        this.context = queryParentRouterSlot(this);
        // Set the role to tell the rest of the world that this is a link
        this.setAttribute("role", "link");
        // Updates the tab index if none has been set by the library user
        if (!this.hasAttribute("tabindex")) {
            this.updateTabIndex();
        }
    }
    /**
     * Tear down listeners.
     */
    disconnectedCallback() {
        removeListeners(this.listeners);
    }
    /**
     * Reacts to attribute changed callback.
     * @param name
     * @param oldValue
     * @param newValue
     */
    attributeChangedCallback(name, oldValue, newValue) {
        // Updates the tab index when disabled changes
        if (name === "disabled") {
            this.updateTabIndex();
        }
    }
    updateTabIndex() {
        this.tabIndex = this.disabled ? -1 : 0;
    }
    /**
     * Returns the absolute path constructed relative to the context.
     * If no router parent was found the path property is the absolute one.
     */
    constructAbsolutePath(path) {
        // If a router context is present, navigate relative to that one
        if (this.context != null) {
            return this.context.constructAbsolutePath(path);
        }
        return slashify(path, { end: false });
    }
    /**
     * Updates whether the route is active or not.
     */
    updateActive() {
        const active = isPathActive(this.absolutePath);
        if (active !== this.active) {
            this.active = active;
        }
    }
    /**
     * Navigates to the specified path.
     */
    navigate(path, e) {
        // If disabled, we just prevent the navigation already now.
        if (e != null && this.disabled) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        history.pushState(null, "", `${this.absolutePath}${this.preserveQuery ? queryString() : ""}`);
    }
}
window.customElements.define("router-link", RouterLink);
//# sourceMappingURL=router-link.js.map