class WKButtonGroup extends HTMLElement {

    constructor() {
        super()

        this.view()
    }

    view() {}

    connectedCallback() { }

    disconnectedCallback() { }

    adoptedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) {
        this.view()
    }

    static get observedAttributes() {
        return []
    }
}

customElements.define('wk-button-group', WKButtonGroup)