import MDRipple from '../ripple/ripple.js';

class MDCheckbox extends HTMLElement {

    template = `
        <input
        type="checkbox" 
        class="checkbox__input"
        name="${this.name}"
        value="${this.value}"
        ${this.required ? `required`: ``}
        ${this.indeterminate ? `indeterminate` : ``}
        ${this.checked ? `checked` : ``}
        >
        <div class="checkbox__track">
            <div class="checkbox__thumb"></div>
        </div>
    `;

    constructor() {
        super();

        this.innerHTML = this.template;

        this.inputElement = this.querySelector('.checkbox__input');

        if (this.indeterminate) {
            this.inputElement.indeterminate = this.indeterminate;
        }

        let ripple = new MDRipple(this);
    }

    get name() {
        return this.getAttribute('name');
    }

    get value() {
        return this.getAttribute('value');
    }

    get required() {
        return this.hasAttribute('required');
    }

    get indeterminate() {
        return this.hasAttribute('indeterminate');
    }

    get checked() {
        return this.hasAttribute('checked');
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

    set indeterminate(value) {
        return this.inputElement.setAttribute('indeterminate', value);
    }

    set checked(value) {
        return this.inputElement.setAttribute('checked', value);
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
            'indeterminate',
            'checked',
        ];
    }
}

customElements.define('md-checkbox', MDCheckbox);