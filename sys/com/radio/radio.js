class WKRadio extends HTMLElement {

    constructor() {
        super()
        this.template()
    }

    template() {
        this.innerHTML = `
            <input type="radio" class="radio__input" 
            ${this.name ? `name="${this.name}"` : ``} 
            ${this.value ? `value="${this.value}"` : ``} 
            ${this.checked ? `checked` : ``}
            >
            <div class="radio__track">
                <div class="radio__thumb"></div>
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
            'name',
            'value',
            'checked',
        ]
    }

    get name() {
        return this.getAttribute('name')
    }

    set name(value) {
        this.setAttribute('name', value)
    }

    get value() {
        return this.getAttribute('value')
    }

    set value(value) {
        this.setAttribute('value', value)
    }

    get checked() {
        return this.hasAttribute('checked')
    }

    set checked(value) {
        this.setAttribute('checked', '')
    }

}

customElements.define('wk-radio', WKRadio)