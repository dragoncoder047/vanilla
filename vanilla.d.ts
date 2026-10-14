/**
 * Returns a HTML element (using `document.createElement`) that is not
 * yet attached to the DOM. The first argument is the tag name and
 * classes separated by dots. The second argument is an object with
 * attributes and the rest of the arguments are the children. Strings
 * are added as text nodes (the browser will escape them).
 * 
 * @example
 * ```js
 * var link = "http://google.com";
 * make("span.foo",
 *      { id: "bar" },
 *      "click ", make("a",
 *                    { href: link,
 *                      target: "_blank" },
 *                    "here"),
 *      " to go to google")
 * // => <span class="foo" id="bar">click <a href="http://google.com", target="_blank">here</a>to go to google</span>
 * ```
 */
export function make<T extends (keyof HTMLElementTagNameMap) | null>(nameAndClasses: T | `${T}.${string}`, properties?: T extends null ? null : Record<string, string> | null, ...children: (Node | string)[]): T extends null ? DocumentFragment : HTMLElementTagNameMap[NonNullable<T>];

/**
 * Creates a `<span>` element using `make()` and then stuffs the `htmlString`
 * into the `innerHTML`. This is just to allow you to use HTML strings with
 * `make()` which by default escapes stuff. Also useful when you just want to
 * create some static HTML.
 * 
 * @example
 * ```js
 * html(`click <a href="http://google.com" target="_blank">here</a> to go to google`)
 * // => <span>click <a href="http://google.com", target="_blank">here</a> to go to google</span>
 * ```
 */
export function html(string: string): HTMLSpanElement;

/**
 * An alias for `document.querySelector()`. The name was too long for my liking.
 */
export function get(id: string): HTMLElement | null;

/**
 * Equivalent to `get(selector).addEventListener(event, callback)`... again
 * because `.addEventListener()` is too long to type.
 */
export function bind<E extends keyof HTMLElementEventMap>(selector: string, event: E, handler: (e: HTMLElementEventMap[E]) => void, capture?: boolean): void;

/**
 * Returns a promise that resolves with the next event detail for the event
 * on the element. If the element does not exist or the event never fires,
 * the promise will never resolve.
 */
export function waitFor<E extends keyof HTMLElementEventMap>(selector: string, event: E): Promise<HTMLElementEventMap[E]>;

/**
 * Replaces the node with the newNode. Again because the "raw" DOM API is too
 * long to type. It returns the old element like the DOM API does.
 */
export function replace<T extends HTMLElement>(node: T, newNode: HTMLElement): T;

export const Fragment: null;

/**
 * Shim for modern React style JSX-transform.
 * @param node - The node, either a string name (for {@link make}) or the "component" function. It is called once and never again.
 * @param props - The properties, along with `children`
 * @param key - unused
 * @param isStaticChildren - unused
 * @param sourceInfo - unused
 * @param self - unused
 */
export function jsx(node: keyof HTMLElementTagNameMap | Function | typeof Fragment, props: Record<string, any> & { children?: Node[] }, key: unknown, isStaticChildren: unknown, sourceInfo: unknown, self: unknown): HTMLElement;

export { jsx as jsxDEV, jsx as jsxs, jsx as jsxsDEV };
