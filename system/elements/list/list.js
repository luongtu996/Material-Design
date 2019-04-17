import './list-row.js'
import './list-item.js'

class WKList extends HTMLElement {

    constructor() {
        super()
    }

    connectedCallback() { }

    disconnectedCallback() { }

    adoptedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) { }

    static get observedAttributes() {
        return [
            'twoLine',
            'threeLine',
        ]
    }
}

customElements.define('wk-list', WKList)