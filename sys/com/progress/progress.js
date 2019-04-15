class WKProgress extends HTMLElement {

    constructor() {
        super()
        this.template()
    }

    template() {
        this.innerHTML = `
            ${this.circular ? `<svg viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="18" />
            </svg>`:``}
        `

        this.style.setProperty('--progress-value', this.value);
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
            'indeterminate',
            'circular',
        ]
    }

    get value() {
        return this.getAttribute('value')
    }

    set value(value) {
        this.setAttribute('value', value)
    }

    get indeterminate() {
        return this.hasAttribute('indeterminate')
    }

    set indeterminate(value) {
        this.setAttribute('indeterminate', '')
    }

    get circular() {
        return this.hasAttribute('circular')
    }

    set circular(value) {
        this.setAttribute('circular', '')
    }
}

customElements.define('wk-progress', WKProgress)