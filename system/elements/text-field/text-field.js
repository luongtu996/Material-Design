class WKTextField extends HTMLElement {

    constructor() {
        super()
        this.template()
    }

    template() {
        this.innerHTML = `
            <input 
            ${this.type ? `type="${this.type}"` : ``} 
            ${this.value ? `value="${this.value}"` : ``} 
            ${this.name ? `name="${this.name}"` : ``} 
            class="text-field__input" 
            ${this.placeholder ? `placeholder="${this.placeholder}"` : ``}
            >
            <div class="text-field__container"></div>
            ${this.label ? `<div class="text-field__label">${this.label}</div>`:``}
            <div class="text-field__section text-field__section--start">
                ${this.prefixMeta ? `<div class="text-field__meta">${this.prefixMeta}</div>`:``}
                ${this.prefixIcon ? `<div class="text-field__icon icon">${this.prefixIcon}</div>`:``}
            </div>
            <div class="text-field__section text-field__section--end">
                ${this.suffixMeta ? `<div class="text-field__meta">${this.suffixMeta}</div>`:``}
                ${this.suffixIcon ? `<div class="text-field__icon icon">${this.suffixIcon}</div>`:``}
            </div>
            <div class="text-field__message">
                ${this.helperMessage ? `<div class="text-field__message-helper">${this.helperMessage}</div>`:``}
                ${this.errorMessage ? `<div class="text-field__message-error">${this.errorMessage}</div>`:``}
                ${this.counterMessage ? `<div class="text-field__message-counter">${this.counterMessage}</div>`:``}
            </div>
        `
    }

    connectedCallback() { }

    disconnectedCallback() { }

    adoptedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) {
        this.template()
    }

    static get observedAttributes() {
        return [
            'type',
            'value',
            'name',
            'placeholder',
            'label',
            'prefixMeta',
            'prefixIcon',
            'suffixMeta',
            'suffixIcon',
            'helperMessage',
            'errorMessage',
            'counterMessage',
            'outlined',
        ]
    }

    get type() {
        return this.getAttribute('type')
    }
    set type(value) {
        this.setAttribute('type', value)
    }

    get value() {
        return this.getAttribute('value')
    }
    set value(value) {
        this.setAttribute('value', value)
    }

    get name() {
        return this.getAttribute('name')
    }
    set name(value) {
        this.setAttribute('name', value)
    }

    get placeholder() {
        return this.getAttribute('placeholder')
    }
    set placeholder(value) {
        this.setAttribute('placeholder', value)
    }

    get label() {
        return this.getAttribute('label')
    }
    set label(value) {
        this.setAttribute('label', value)
    }

    get prefixMeta() {
        return this.getAttribute('prefixMeta')
    }
    set prefixMeta(value) {
        this.setAttribute('prefixMeta', value)
    }

    get suffixMeta() {
        return this.getAttribute('suffixMeta')
    }
    set suffixMeta(value) {
        this.setAttribute('suffixMeta', value)
    }

    get prefixIcon() {
        return this.getAttribute('prefixIcon')
    }
    set prefixIcon(value) {
        this.setAttribute('prefixIcon', value)
    }

    get suffixIcon() {
        return this.getAttribute('suffixIcon')
    }
    set suffixIcon(value) {
        this.setAttribute('suffixIcon', value)
    }

    get helperMessage() {
        return this.getAttribute('helperMessage')
    }
    set helperMessage(value) {
        this.setAttribute('helperMessage', value)
    }

    get errorMessage() {
        return this.getAttribute('errorMessage')
    }
    set errorMessage(value) {
        this.setAttribute('errorMessage', value)
    }

    get counterMessage() {
        return this.getAttribute('counterMessage')
    }
    set counterMessage(value) {
        this.setAttribute('counterMessage', value)
    }

    get outlined() {
        return this.hasAttribute('outlined')
    }
    set outlined(value) {
        this.setAttribute('outlined', '')
    }

}

customElements.define('wk-text-field', WKTextField)