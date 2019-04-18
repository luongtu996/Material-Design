class WKButtonGroup extends HTMLElement {

    constructor() {
        super()
    }


    connectedCallback() { }

    disconnectedCallback() { }

    adoptedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) { }

    static get observedAttributes() {
        return [
            'multiple'
        ]
    }

    get multiple() {
        return this.hasAttribute('multiple')
    }
    set multiple(value) {
        this.setAttribute('multiple', '')
    }
}

customElements.define('wk-button-group', WKButtonGroup)