class WKDivider extends HTMLElement {

    constructor() {
        super()
    }

    connectedCallback() { }

    disconnectedCallback() { }

    adoptedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) { }

    static get observedAttributes() {
        return []
    }
}

customElements.define('wk-divider', WKDivider)