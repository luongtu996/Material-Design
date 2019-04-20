import './button-group.js'
import Ripple from '../ripple/ripple.js';

class WKButton extends HTMLElement {

    constructor() {
        super()

        if (!this.text && this.textContent) {
            this.text = this.textContent
        }

        this.template()
    }

    template() {
        this.innerHTML = `
        ${this.icon?`<span class="button__icon icon">${this.icon}</span>`:``}
        ${this.text?`<span class="button__text">${this.text}</span>`:``}
        `
    }

    connectedCallback() {
        new Ripple({
            element: this
        })

        if (this.toggle) {
            this.addEventListener('click', this.toggleClick.bind(this))
        }
    }

    toggleClick(event) {
        this.activated = !this.activated

        this.dispatchEvent(new CustomEvent('onToggleClick', {
            detail: this
        }))
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
            'disabled',
            'outlined',
            'contained',
            'toggle',
            'activated',
        ]
    }

    get icon() { return this.getAttribute('icon') }
    set icon(value) { this.setAttribute('icon', value) }

    get text() { return this.getAttribute('text') }
    set text(value) { this.setAttribute('text', value) }

    get disabled() { return this.hasAttribute('disabled') }
    set disabled(value) {
        if (value) {
            this.setAttribute('disabled', '')
        }
        else {
            this.removeAttribute('disabled')
        }
    }

    get outlined() { return this.hasAttribute('outlined') }
    set outlined(value) { this.setAttribute('outlined', '') }

    get contained() { return this.hasAttribute('contained') }
    set contained(value) { this.setAttribute('contained', '') }

    get toggle() { return this.hasAttribute('toggle') }
    set toggle(value) { this.setAttribute('toggle', '') }

    get activated() { return this.hasAttribute('activated') }
    set activated(value) {
        if (value) {
            this.setAttribute('activated', '')
        }
        else {
            this.removeAttribute('activated')
        }
    }
}

customElements.define('wk-button', WKButton)