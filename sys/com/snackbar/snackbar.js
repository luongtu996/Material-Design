class WKSnackbar extends HTMLElement {

    constructor() {
        super()
        this.template()
    }

    template() {
        this.innerHTML = `
            ${this.text ? `<div class="snackbar__text">${this.text}</div>`:``}
            ${this.action ? `<button class="button"><span class="button__text">${this.action}</span></button>`:``}
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
            'text',
            'action',
        ]
    }

    get text() {
        return this.getAttribute('text')
    }

    set text(value) {
        this.setAttribute('text', value)
    } 

    get action() {
        return this.getAttribute('action')
    }

    set action(value) {
        this.setAttribute('action', value)
    } 
}

customElements.define('wk-snackbar', WKSnackbar)