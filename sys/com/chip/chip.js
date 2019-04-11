import MDRipple from '../ripple/ripple.js';

class MDChip extends HTMLElement {

    template = `
    ${this.thumb ? `<img src="${this.thumb}" alt="" class="chip__thumb">`: ``}
    ${this.icon ? `<span class="chip__icon icon">${this.icon}</span>`: ``}
    <span class="chip__check">
        <span class="chip__mark"></span>
    </span>
    ${this.text ? `<span class="chip__text">${this.text}</span>`: ``}
    ${this.removeable ? `<span class="chip__action"></span>`: ``}
    `;

    constructor() {
        super();

        this.innerHTML = this.template;
        
        this.chipAction = this.querySelector('.chip__action');

        new MDRipple(this);

        this.addEventListener('click', event => this.handleClick(event));

        if (this.chipAction) {
            this.chipAction.addEventListener('click', event => this.chipActionHandleClick(event));
        }
    }

    handleClick(event) {
        // this.classList.toggle('is-activated');
    }

    chipActionHandleClick(event) {
        event.stopPropagation();
        this.remove();
    }

    connectedCallback() {}

    disconnectedCallback() { }

    adoptedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) { }

    static get observedAttributes() {
        return [
            'thumb',
            'icon',
            'text',
            'removeable',
            'outlined',
        ];
    }

    get thumb() {
        return this.getAttribute('thumb');
    }

    set thumb(value) {
        this.setAttribute('thumb', value);
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

    get removeable() {
        return this.hasAttribute('removeable');
    }

    set removeable(value) {
        this.setAttribute('removeable', '');
    }

    get outlined() {
        return this.hasAttribute('outlined');
    }

    set outlined(value) {
        this.setAttribute('outlined', '');
    }
}

customElements.define('md-chip', MDChip);