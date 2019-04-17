class WKLayoutColumn extends HTMLElement {

    constructor() {
        super()
    }

    connectedCallback() { }

    disconnectedCallback() { }

    adoptedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) { }

    static get observedAttributes() {
        return [
            'span',
            'desktopSpan',
            'tabletSpan',
            'mobileSpan'
        ]
    }
}

customElements.define('wk-layout-column', WKLayoutColumn)