class WKFAB extends HTMLElement {

    constructor() {
        super()

        this.template()
    }

    template() {
        this.innerHTML = `
            ${this.icon ? `<span class="fab__icon icon">${this.icon}</span>` : ``}
            ${this.text ? `<span class="fab__text">${this.text}</span>` : ``}
        `
    }

    connectedCallback() { }

    disconnectedCallback() { }

    adoptedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) {
        this.template()
    }

    static get observedAttributes() {
        return [
            'icon',
            'text',
            'mini',
            'extended'
        ]
    }

    get icon() {
        return this.getAttribute('icon')
    }

    set icon(value) {
        this.setAttribute('icon', value)
    }

    get text() {
        return this.getAttribute('text')
    }

    set text(value) {
        this.setAttribute('text', value)
    }

    get toggle() {
        this.hasAttribute('toggle')
    }

    set toggle(value) {
        this.setAttribute('toggle', '')
    }
}

customElements.define('wk-fab', WKFAB)