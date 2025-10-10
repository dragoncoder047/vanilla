export function make(nameAndClasses, properties, ...children) {
    const [name, ...classes] = nameAndClasses.split(".");
    const el = document.createElement(name);
    if (classes.length > 0)
        el.classList.add(...classes);
    for (var [k, v] of Object.entries(properties ?? {})) {
        el.setAttribute(k, v);
    }
    el.append(...children);
    return el;
}

export function html(string) {
    var el = make("span");
    el.innerHTML = string;
    return el;
}

export function get(id) {
    return document.querySelector(id);
}

export function bind(selector, event, handler, capture) {
    get(selector)?.addEventListener(event, handler, { capture });
}

export function waitFor(selector, event) {
    return new Promise(resolve => get(selector)?.addEventListener(event, e => resolve(e), { once: true }));
}

export function replace(node, newNode) {
    return node.parentNode.replaceChild(newNode, node);
}
