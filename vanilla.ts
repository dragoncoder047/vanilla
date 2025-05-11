export function make(nameAndClasses: string, properties?: Record<string, string>, ...children: (Node | string)[]): HTMLElement {
    const [name, ...classes] = nameAndClasses.split(".");
    const el = document.createElement(name!);
    if (classes.length > 0)
        el.classList.add(...classes);
    for (var [k, v] of Object.entries(properties ?? {})) {
        el.setAttribute(k, v);
    }
    el.append(...children);
    return el;
}

export function html(string: string): HTMLSpanElement {
    const el = make("span");
    el.innerHTML = string;
    return el;
}

export function get(id: string): HTMLElement | null {
    return document.getElementById(id);
}

export function bind<E extends keyof HTMLElementEventMap>(selector: string, event: E, handler: (e: HTMLElementEventMap[E]) => void, capture: boolean = false) {
    get(selector)?.addEventListener(event, handler, { capture });
}

export function watFor<E extends keyof HTMLElementEventMap>(selector: string, event: E): Promise<HTMLElementEventMap[E]> {
    return new Promise(resolve => get(selector)?.addEventListener(event, e => resolve(e), { once: true }));
}

export function replace<T extends HTMLElement>(node: T, newNode: HTMLElement): T {
    return node.parentNode!.replaceChild(newNode, node) as T;
}
