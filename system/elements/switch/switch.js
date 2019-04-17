class WKSwitch extends HTMLElement {

    constructor() {
        super()
        this.template() 
    }

    template() {
        this.innerHTML = `
            <input type="checkbox" class="switch__input" 
            ${this.value ? `value="${this.value}"`: ``} 
            ${this.name ? `name="${this.name}"`: ``} 
            ${this.checked ? `checked` : ``}
            >
            <div class="switch__track">
                <div class="switch__thumb"></div>
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
            'value',
            'name',
            'checked',
        ]
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
    
    get checked() {
        return this.hasAttribute('checked')
    }
    
    set checked(value) {
        this.setAttribute('checked', '')
    }
}

customElements.define('wk-switch', WKSwitch)