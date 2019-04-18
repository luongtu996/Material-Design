import './button-group.js'
import Ripple from '../ripple/ripple.js';

class WKButton extends HTMLElement {

    constructor() {
        super()
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
        if (!this.parentNode.multiple) {
            Array.from(this.parentNode.children).forEach(element => {
                element.activated = false
            });
        }

        this.activated = !this.activated

        this.dispatchEvent(new CustomEvent('onToggleClick', {
            detail: {
                activated: this.activated
            }
        }))
    }

    disconnectedCallback() { }

    adoptedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) {
        this.template()
    }

    static get observedAttributes() {
        return [
            'icon',
            'text',
            'outlined',
            'contained',
            'toggle',
            'activated',
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

    get outlined() {
        return this.hasAttribute('outlined')
    }
    set outlined(value) {
        this.setAttribute('outlined', '')
    }

    get contained() {
        return this.hasAttribute('contained')
    }
    set contained(value) {
        this.setAttribute('contained', '')
    }

    get toggle() {
        return this.hasAttribute('toggle')
    }
    set toggle(value) {
        this.setAttribute('toggle', '')
    }

    get activated() {
        return this.hasAttribute('activated')
    }
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