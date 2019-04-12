class WKButton extends HTMLElement {

    constructor() {
        super()

        this.template()
        this.styles([
            '../foundation/foundation.css',
            '../icon/icon.css',
            './button.css'
        ])
    }

    template() {
        this.innerHTML = `
            ${this.icon ? `<span class="button__icon icon">${this.icon}</span>` : ``}
            ${this.text ? `<span class="button__text">${this.text}</span>` : ``}
        `
    }

    styles(styles = []) {
        styles.map(style => {
            let link = document.querySelector(`link[href="${style}"]`)

            if (!link)
                document.querySelector('head').insertAdjacentHTML('beforeend', `<link rel="stylesheet" href="${style}">`)
        })
    }

    connectedCallback() { }

    disconnectedCallback() { }

    adoptedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) {
        this.template()
    }

    static get observedAttributes() {
        return [
            'icon',
            'text',
            'outlined',
            'contained',
            'toggle'
        ]
    }

    get icon() {
        return this.getAttribute('icon')
    }

    set icon(value) {
        this.setAttribute('icon', value)
    }

    get text() {
        return this.getAttribute('text')
    }

    set text(value) {
        this.setAttribute('text', value)
    }

    get outlined() {
        this.hasAttribute('outlined')
    }

    set outlined(value) {
        this.setAttribute('outlined', '')
    }

    get contained() {
        this.hasAttribute('contained')
    }

    set contained(value) {
        this.setAttribute('contained', '')
    }

    get toggle() {
        this.hasAttribute('toggle')
    }

    set toggle(value) {
        this.setAttribute('toggle', '')
    }
}

customElements.define('wk-button', WKButton)