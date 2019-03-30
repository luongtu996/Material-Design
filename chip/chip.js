import MDRipple from '../ripple/ripple.js';

class MDChip extends HTMLElement {

    template = `
    ${this.icon != null || this.thumb != null ? `<span class="chip__thumb icon" ${this.thumb ? `style="background-image: url(${this.thumb});"` : ``}>${this.icon ? this.icon : ``}</span>` : ``}
    <span class="chip__text">${this.text}</span>
    ${this.removeable ? `<span class="chip__icon"></span>`: ``}
    `;

    constructor() {
        super();

        this.innerHTML = this.template;

        new MDRipple(this);

        // console.log(this.icon != null || this.thumb != null);
    }

    connectedCallback() { }

    disconnectedCallback() { }

    adoptedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) { }

    static get observedAttributes() {
        return [
            'icon',
            'text',
            'thumb',
            'outlined',
            'removeable',
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

    get thumb() {
        return this.getAttribute('thumb');
    }

    set thumb(value) {
        this.setAttribute('thumb', value);
    }

    get outlined() {
        return this.hasAttribute('outlined');
    }

    set outlined(value) {
        this.setAttribute('outlined', '');
    }

    get removeable() {
        return this.hasAttribute('removeable');
    }

    set removeable(value) {
        this.setAttribute('removeable', '');
    }
}

customElements.define('md-chip', MDChip);