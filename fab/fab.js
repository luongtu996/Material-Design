import MDRipple from '../ripple/ripple.js';

class MDFab extends HTMLElement {

    template = `
        <style>
        @import '../foundation/foundation.css';
        @import '../icon/icon.css';
        @import './fab.css';
        </style>
        ${this.icon ? `<span class="fab__icon icon">${this.icon}</span>` : ''} 
        ${this.text ? `<span class="fab__text">${this.text}</span>` : ''}
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