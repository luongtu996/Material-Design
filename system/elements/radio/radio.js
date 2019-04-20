import Ripple from '../ripple/ripple.js'

class WKRadio extends HTMLElement {

    constructor() {
        super()
        this.template()
    }

    template() {
        this.innerHTML = `
        <input class="radio__input" 
        type="radio" 
        ${this.name?`name="${this.name}"`:``} 
        ${this.value?`value="${this.value}"`:``} 
        ${this.checked ?`checked`:``} 
        >
        <div class="radio__track">
            <div class="radio__thumb"></div>
        </div>
        `
    }

    connectedCallback() { 
        new Ripple({
            element: this,
            delegate: this.querySelector('.radio__track'),
            trigger: this.querySelector('.radio__input'),
            size: 40
        })
    }

    disconnectedCallback() { }

    adoptedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) {
        this.template()
    }

    static get observedAttributes() {
        return [
            'checked',
            'name',
            'value',
        ]
    }

    get checked() { return this.hasAttribute('checked') }
    set checked(value) { this.setAttribute('checked', '') }

    get name() { return this.getAttribute('name') }
    set name(value) { this.setAttribute('name', value) }

    get value() { return this.getAttribute('value') }
    set value(value) { this.setAttribute('value', value) }
}

customElements.define('wk-radio', WKRadio)