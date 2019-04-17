class WKCheckbox extends HTMLElement {

    constructor() {
        super()
        this.template()
    }

    template() {
        this.innerHTML = `
            <input type="checkbox" class="checkbox__input" 
            ${this.name ? `name="${this.name}"` : ``} 
            ${this.value ? `value="${this.value}"` : ``} 
            ${this.checked ? `checked` : ``}
            ${this.indeterminate ? `indeterminate` : ``}
            >
            <div class="checkbox__track">
                <div class="checkbox__thumb"></div>
            </div>
        `
    }

    connectedCallback() {
        if (this.indeterminate) {
            this.querySelector('.checkbox__input').indeterminate = this.indeterminate
        }
    }

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
            'indeterminate',
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

    get indeterminate() {
        return this.hasAttribute('indeterminate')
    }

    set indeterminate(value) {
        this.setAttribute('indeterminate', '')
    }

}

customElements.define('wk-checkbox', WKCheckbox)