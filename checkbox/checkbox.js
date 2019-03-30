import MDRipple from '../ripple/ripple.js';

class MDCheckbox extends HTMLElement {

    template = `
    <input type="checkbox" class="checkbox__input">
    <div class="checkbox__track">
        <div class="checkbox__thumb"></div>
    </div>
    `;

    constructor() {
        super();

        this.innerHTML = this.template;

        this.checkboxInput = this.querySelector('.checkbox__input');
        let checkboxTrack = this.querySelector('.checkbox__track');

        let ripple = new MDRipple(this);
        ripple.delegate = checkboxTrack;
        ripple.trigger = this.checkboxInput;
        ripple.size = 40;

        if (this.name) {
            this.name = this.name;
        }

        if (this.value) {
            this.value = this.value;
        }

        if (this.checked) {
            this.checked = this.checked;
        }

        if (this.indeterminate) {
            this.indeterminate = this.indeterminate;
        }
    }

    connectedCallback() { }

    disconnectedCallback() { }

    adoptedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) {}

    static get observedAttributes() {
        return [
            'name',
            'value',
            'indeterminate',
            'checked'
        ];
    }

    get name() {
        return this.getAttribute('name');
    }

    set name(value) {
        this.checkboxInput.setAttribute('name', value);
        this.removeAttribute('name');
    }

    get value() {
        return this.getAttribute('value');
    }

    set value(value) {
        this.checkboxInput.setAttribute('value', value);
        this.removeAttribute('value');
    }

    get indeterminate() {
        return this.hasAttribute('indeterminate');
    }

    set indeterminate(value) {
        this.checkboxInput.setAttribute('indeterminate', '');
        this.checkboxInput.indeterminate = this.indeterminate;
        this.removeAttribute('indeterminate');
    }

    get checked() {
        return this.hasAttribute('checked');
    }

    set checked(value) {
        this.checkboxInput.setAttribute('checked', '');
        this.removeAttribute('checked');
    }
}

customElements.define('md-checkbox', MDCheckbox);