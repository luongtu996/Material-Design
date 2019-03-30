import MDRipple from '../ripple/ripple.js';

class MDRadio extends HTMLElement {

    template = `
    <input type="radio" class="radio__input">
    <div class="radio__track">
        <div class="radio__thumb"></div>
    </div>
    `;

    constructor() {
        super();

        this.innerHTML = this.template;

        this.radioInput = this.querySelector('.radio__input');
        let radioTrack = this.querySelector('.radio__track');

        let ripple = new MDRipple(this);
        ripple.delegate = radioTrack;
        ripple.trigger = this.radioInput;
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
    }

    connectedCallback() { }

    disconnectedCallback() { }

    adoptedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) { }

    static get observedAttributes() {
        return [
            'name',
            'value',
            'checked'
        ];
    }

    get name() {
        return this.getAttribute('name');
    }

    set name(value) {
        this.radioInput.setAttribute('name', value);
        this.removeAttribute('name');
    }

    get value() {
        return this.getAttribute('value');
    }

    set value(value) {
        this.radioInput.setAttribute('value', value);
        this.removeAttribute('value');
    }

    get checked() {
        return this.hasAttribute('checked');
    }

    set checked(value) {
        this.radioInput.setAttribute('checked', '');
        this.removeAttribute('checked');
    }
}

customElements.define('md-radio', MDRadio);