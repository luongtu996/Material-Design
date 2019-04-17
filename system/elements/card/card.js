class WKCard extends HTMLElement {

    constructor() {
        super()
    }

    connectedCallback() { }

    disconnectedCallback() { }

    adoptedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) { }

    static get observedAttributes() {
        return [
            'outlined'
        ]
    }

    get outlined() {
        return this.hasAttribute('outlined')
    }

    set outlined(value) {
        this.setAttribute('outlined', '')
    }
}

customElements.define('wk-card', WKCard)