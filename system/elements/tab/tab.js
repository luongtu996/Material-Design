import './tab-bar.js'

class WKTab extends HTMLElement {

    constructor() {
        super()
        this.template()
    }

    template() {
        this.innerHTML = `
            ${this.icon ? `<div class="tab__icon icon">${this.icon}</div>` : ``}
            ${this.text ? `<div class="tab__text">${this.text}</div>` : ``}
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
            'icon',
            'text'
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
}

customElements.define('wk-tab', WKTab)