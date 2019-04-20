import Ripple from '../ripple/ripple.js';

class WKCheckbox extends HTMLElement {

    constructor() {
        super()
        this.template()
    }

    template() {
        this.innerHTML = `
        <input class="checkbox__input" 
        type="checkbox" 
        ${this.name?`name="${this.name}"`:``} 
        ${this.value?`value="${this.value}"`:``} 
        ${this.indeterminate?`indeterminate`:``} 
        ${this.checked?`checked`:``} 
        >
        <div class="checkbox__track">
            <div class="checkbox__thumb"></div>
        </div>
        `
    }

    connectedCallback() { 
        new Ripple({
            element: this,
            delegate: this.querySelector('.checkbox__track'),
            trigger: this.querySelector('.checkbox__input'),
            size: 40
        })

        if (this.indeterminate) {
            this.checkboxNative = this.querySelector('.checkbox__input')
            this.checkboxNative.indeterminate = true
        }
    }

    disconnectedCallback() { }

    adoptedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) {
        this.template()
    }

    static get observedAttributes() {
        return [
            'indeterminate',
            'checked',
            'name',
            'value',
        ]
    }
    
    get indeterminate() { return this.hasAttribute('indeterminate') }
    set indeterminate(value) { this.setAttribute('indeterminate', '') }
    
    get checked() { return this.hasAttribute('checked') }
    set checked(value) { this.setAttribute('checked', '') }

    get name() { return this.getAttribute('name') }
    set name(value) { this.setAttribute('name', value) }

    get value() { return this.getAttribute('value') }
    set value(value) { this.setAttribute('value', value) }
}

customElements.define('wk-checkbox', WKCheckbox)