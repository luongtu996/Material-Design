class WKTabBar extends HTMLElement {

    constructor() {
        super()
    }

    connectedCallback() { }

    disconnectedCallback() { }

    adoptedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) { }

    static get observedAttributes() {
        return [
            'scrollable'
        ]
    }

    get scrollable() {
        return this.hasAttribute('scrollable')
    }

    set scrollable(value) {
        this.setAttribute('scrollable', '')
    }
}

customElements.define('wk-tab-bar', WKTabBar)