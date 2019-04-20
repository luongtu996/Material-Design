import Ripple from '../ripple/ripple.js';

class WKFAB extends HTMLElement {

    constructor() {
        super()

        if (!this.text && this.textContent) {
            this.text = this.textContent
        }

        this.template()
    }

    template() {
        this.innerHTML = `
        ${this.icon?`<span wkIcon class="fab__icon">${this.icon}</span>`:``}
        ${this.text?`<span class="fab__text">${this.text}</span>`:``}
        `
    }

    connectedCallback() {
        new Ripple({
            element: this
        })
    }

    disconnectedCallback() { }

    adoptedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) {
        if ([
            'icon',
            'text',
        ].includes(name)) {
            this.template()
        }
    }

    static get observedAttributes() {
        return [
            'icon',
            'text',
            'mini',
            'extended',
        ]
    }

    get icon() { return this.getAttribute('icon') }
    set icon(value) { this.setAttribute('icon', value) }

    get text() { return this.getAttribute('text') }
    set text(value) { this.setAttribute('text', value) }

    get mini() { return this.hasAttribute('mini') }
    set mini(value) { this.setAttribute('mini', '') }

    get extended() { return this.hasAttribute('extended') }
    set extended(value) { this.setAttribute('extended', '') }
}

customElements.define('wk-fab', WKFAB)