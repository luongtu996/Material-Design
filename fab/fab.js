import MDRipple from '../ripple/ripple.js';

class MDFab extends HTMLElement {

    template = `
        ${this.icon ? `<span class="fab__icon icon">${this.icon}</span>` : ''} 
        ${this.text ? `<span class="fab__text">${this.text}</span>` : ''}
    `;

    constructor() {
        super();

        this.innerHTML = this.template;

        let ripple = new MDRipple(this);
    }

    get icon() {
        return this.getAttribute('icon');
    }

    get text() {
        return this.getAttribute('text');
    }

    set icon(value) {
        return this.setAttribute('icon', value);
    }

    set text(value) {
        return this.setAttribute('text', value);
    }

    connectedCallback() {
        // updateStyle(this);
    }

    disconnectedCallback() { }

    adoptedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) {
        // updateStyle(this);
    }

    static get observedAttributes() {
        return [
            'icon',
            'text'
        ];
    }
}

customElements.define('md-fab', MDFab);