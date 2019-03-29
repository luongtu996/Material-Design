import MDRipple from '../ripple/ripple.js';

class MDButton extends HTMLElement {

    template = `
    ${this.icon ? `<span class="button__icon icon">${this.icon}</span>` : ``}
    ${this.text ? `<span class="button__text">${this.text}</span>`: ``}
    `;

    constructor() {
        super();

        this.innerHTML = this.template;

        new MDRipple(this);
    }

    connectedCallback() {}

    disconnectedCallback() {}

    adoptedCallback() {}

    attributeChangedCallback(name, oldValue, newValue) {}

    static get observedAttributes() {
        return [
            'icon', 
            'text',
            'outlined',
            'contained',
            'toggle'
        ];
    }

    get icon() {
        return this.getAttribute('icon');
    }

    set icon(value) {
        this.setAttribute('icon', value);
    }

    get text() {
        return this.getAttribute('text');
    }

    set text(value) {
        this.setAttribute('text', value);
    }

    get outlined() {
        return this.hasAttribute('outlined');
    }

    set outlined(value) {
        this.setAttribute('outlined', '');
    }

    get contained() {
        return this.hasAttribute('contained');
    }

    set contained(value) {
        this.setAttribute('contained', '');
    }

    get toggle() {
        return this.hasAttribute('toggle');
    }

    set toggle(value) {
        this.setAttribute('toggle', '');
    }
}

customElements.define('md-button', MDButton);