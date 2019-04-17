import './top-app-bar-row.js'

class WKTopAppBar extends HTMLElement {

    constructor() {
        super()
        this.oldInnerHTML = this.innerHTML
        this.template()
    }

    template() {
        this.innerHTML = `
            <wk-top-app-bar-row>
                <div class="top-app-bar__section top-app-bar__section--start">
                    ${this.navigation ? `<div class="top-app-bar__icon top-app-bar__icon--navigation"></div>` : ``}
                    ${this.title ? `<div class="top-app-bar__title">${this.title}</div>` : ``}
                </div>
                <div class="top-app-bar__section top-app-bar__section--end">
                    ${this.menu ? `<div class="top-app-bar__icon top-app-bar__icon--menu"></div>` : ``}
                </div>
            </wk-top-app-bar-row>
            ${this.oldInnerHTML}
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
            'extended',
            'navigation',
            'title',
            'menu',
        ]
    }

    get extended() {
        return this.hasAttribute('extended');
    }

    set extended(value) {
        this.setAttribute('extended', '');
    }

    get navigation() {
        return this.hasAttribute('navigation')
    }

    set navigation(value) {
        this.setAttribute('navigation', value)
    }

    get title() {
        return this.getAttribute('title')
    }

    set title(value) {
        this.setAttribute('title', value)
    }

    get menu() {
        return this.hasAttribute('menu')
    }

    set menu(value) {
        this.setAttribute('menu', value)
    }
}

customElements.define('wk-top-app-bar', WKTopAppBar)