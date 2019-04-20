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
            'column',
            'desktopColumn',
            'tabletColumn',
            'mobileColumn',
        ]
    }
}

customElements.define('wk-layout-column', WKLayoutColumn)