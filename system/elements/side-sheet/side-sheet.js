import './side-sheet-scrim.js'

class WKSideSheet extends HTMLElement {

    constructor() {
        super()
        this.oldInnerHTML = this.innerHTML
        this.template()
    }

    template() {
        this.innerHTML = `
            <div class="side-sheet__header">
                ${this.title ? `<div class="side-sheet__title">${this.title}</div>` : ``}
                ${this.action ? `<div class="side-sheet__icon icon">&#xE711;</div>` : ``}
            </div>
            <div class="side-sheet__content">
                ${this.oldInnerHTML}
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
            'title',
            'action',
            'modal',
        ]
    }

    get title() {
        return this.getAttribute('title')
    }
    set title(value) {
        this.setAttribute('title', value)
    }

    get action() {
        return this.hasAttribute('action')
    }
    set action(value) {
        this.setAttribute('action', '')
    }

    get modal() {
        return this.hasAttribute('modal')
    }
    set modal(value) {
        this.setAttribute('modal', '')
    }
}

customElements.define('wk-side-sheet', WKSideSheet)