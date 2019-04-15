import './dialog-scrim.js'
import '../button/button.js'

class WKDialog extends HTMLElement {

    constructor() {
        super()

        this.oldInnerHTML = this.innerHTML

        if (this.actions) {
            this.actionsHTML = document.querySelector(this.actions)
            this.actionsInnerHTML = this.actionsHTML.innerHTML
            this.actionsHTML.remove()
        }

        this.template()
    }

    template() {
        this.innerHTML = `
            ${this.title ? `<div class="dialog__header">
                ${this.title ? `<div class="dialog__title">${this.title}</div>` : ``}
            </div>`: ``}
            <div class="dialog__content">
                ${this.oldInnerHTML}
            </div>
            ${this.actionsInnerHTML ? `<div class="dialog__actions">
                ${this.actionsInnerHTML ? this.actionsInnerHTML : ``}
            </div>`:``}
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
            'actions',
        ]
    }

    get title() {
        return this.getAttribute('title')
    }
    set title(value) {
        this.setAttribute('title', value)
    }
    
    get actions() {
        return this.getAttribute('actions')
    }
    set actions(value) {
        this.setAttribute('actions', value)
    }
    
}

customElements.define('wk-dialog', WKDialog)