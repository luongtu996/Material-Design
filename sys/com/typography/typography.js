class WKTypography extends HTMLElement {

    constructor() {
        super()
    }

    connectedCallback() { }

    disconnectedCallback() { }

    adoptedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) { }

    static get observedAttributes() {
        return [
            'scale'
        ]
    }
}

customElements.define('wk-typography', WKTypography)