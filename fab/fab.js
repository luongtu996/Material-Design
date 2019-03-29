import MDRipple from '../ripple/ripple.js';

class MDFab extends HTMLElement {

    template = `
    ${this.icon ? `<span class="fab__icon icon">${this.icon}</span>` : ``}
    ${this.text ? `<span class="fab__text">${this.text}</span>` : ``}
    `;

    constructor() {
        super();

        this.innerHTML = this.template;

        new MDRipple(this);
    }

    connectedCallback() { }

    disconnectedCallback() { }

    adoptedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) { }

    static get observedAttributes() {
        return [
            'icon',
            'text',
            'mini',
            'extended',
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

    get mini() {
        return this.hasAttribute('mini');
    }

    set mini(value) {
        this.setAttribute('mini', '');
    }

    get extended() {
        return this.hasAttribute('extended');
    }

    set extended(value) {
        this.setAttribute('extended', '');
    }
}

customElements.define('md-fab', MDFab);