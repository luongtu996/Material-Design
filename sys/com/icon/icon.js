class WKIcon extends HTMLElement {

    constructor() {
        super()
        this.template()
    }

    template() {
        this.innerHTML = `${this.icon ? this.icon : ``}`
    }

    connectedCallback() { }

    disconnectedCallback() { }

    adoptedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) {
        this.template()
    }

    static get observedAttributes() {
        return [
            'icon'
        ]
    }

    get icon() {
        return this.getAttribute('icon')
    }
    
    set icon(value) {
        return this.setAttribute('icon', value)
    }
}

customElements.define('wk-icon', WKIcon)