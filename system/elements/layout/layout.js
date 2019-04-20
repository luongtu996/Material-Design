import './layout-grid.js'
import './layout-column.js'

class WKLayout extends HTMLElement {

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

customElements.define('wk-layout', WKLayout)