class WKLayoutGrid extends HTMLElement {

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

customElements.define('wk-layout-grid', WKLayoutGrid)