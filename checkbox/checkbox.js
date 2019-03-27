import MDRipple from '../ripple/ripple.js';

class MDCheckbox extends HTMLElement {

    template = `
        <input
        type="checkbox" 
        class="checkbox__input"
        name="${this.name}"
        value="${this.value}"
        required="${this.required}"
        >
        <div class="checkbox__track">
            <div class="checkbox__thumb"></div>
        </div>
    `;

    constructor() {
        super();

        // this.attachShadow({
        //     mode: 'open'
        // }).innerHTML = this.template;
        this.innerHTML = this.template;

        // this.inputElement = this.shadowRoot.querySelector('.checkbox__input');
        this.inputElement = this.querySelector('.checkbox__input');

        let ripple = new MDRipple(this);
    }

    get name() {
        return this.getAttribute('name');
    }

    get value() {
        return this.getAttribute('value');
    }

    get required() {
        return this.getAttribute('required');
    }

    set name(value) {
        return this.inputElement.setAttribute('name', value);
    }

    set value(value) {
        return this.inputElement.setAttribute('value', value);
    }

    set required(value) {
        return this.inputElement.setAttribute('required', value);
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
            'name',
            'value',
            'required',
        ];
    }
}

customElements.define('md-checkbox', MDCheckbox);