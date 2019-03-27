import MDRipple from '../ripple/ripple.js';

class MDButton extends HTMLElement {

    template = `
        <style>
        @import '../icon/icon.css';
        @import './button.css';
        </style>
        ${this.icon ? `<span class="button__icon icon">${this.icon}</span>` : ''} 
        ${this.text ? `<span class="button__text">${this.text}</span>` : ''}
    `;

    constructor() {
        super();

        this.attachShadow({
            mode: 'open'
        }).innerHTML = this.template;

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

    disconnectedCallback() {}

    adoptedCallback() {}

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

customElements.define('md-button', MDButton);