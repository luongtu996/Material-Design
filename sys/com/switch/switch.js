import MDRipple from '../ripple/ripple.js';

class MDSwitch extends HTMLElement {

    template = `
    <input type="checkbox" class="switch__input">
    <div class="switch__track">
        <div class="switch__thumb"></div>
    </div>
    `;

    constructor() {
        super();

        this.innerHTML = this.template;

        this.switchInput = this.querySelector('.switch__input');
        let switchThumb = this.querySelector('.switch__thumb');

        let ripple = new MDRipple(this);
        ripple.delegate = switchThumb;
        ripple.trigger = this.switchInput;
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
        this.switchInput.setAttribute('name', value);
        this.removeAttribute('name');
    }

    get value() {
        return this.getAttribute('value');
    }

    set value(value) {
        this.switchInput.setAttribute('value', value);
        this.removeAttribute('value');
    }

    get checked() {
        return this.hasAttribute('checked');
    }

    set checked(value) {
        this.switchInput.setAttribute('checked', '');
        this.removeAttribute('checked');
    }
}

customElements.define('md-switch', MDSwitch);