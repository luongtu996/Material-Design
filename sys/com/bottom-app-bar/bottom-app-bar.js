import '../fab/fab.js'

class WKBottomAppBar extends HTMLElement {

    constructor() {
        super()
        this.template()
    }

    template() {
        this.innerHTML = `
            ${this.fab ? `<wk-fab icon="${this.fab}"></wk-fab>`: ``}
            <div class="bottom-app-bar__container">
                <div class="bottom-app-bar__section bottom-app-bar__section--start">
                    ${this.navigation ? `<div class="bottom-app-bar__icon bottom-app-bar__icon--navigation icon">&#xE700;</div>`: ``}
                </div>
                <div class="bottom-app-bar__section bottom-app-bar__section--end">
                    ${this.menu ? `<div class="bottom-app-bar__icon bottom-app-bar__icon--menu icon">&#xE712;</div>`: ``}
                </div>
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
            'fab',
            'navigation',
            'menu',
            'fabEnd',
            'fabCut',
        ]
    }

    get fab() {
        return this.getAttribute('fab')
    }
    set fab(value) {
        this.setAttribute('fab', value)
    }

    get navigation() {
        return this.hasAttribute('navigation')
    }
    set navigation(value) {
        this.setAttribute('navigation', '')
    }

    get menu() {
        return this.hasAttribute('menu')
    }
    set menu(value) {
        this.setAttribute('menu', '')
    }

    get fabEnd() {
        return this.hasAttribute('fabEnd')
    }
    set fabEnd(value) {
        this.setAttribute('fabEnd', '')
    }

    get fabCut() {
        return this.hasAttribute('fabCut')
    }
    set fabCut(value) {
        this.setAttribute('fabCut', '')
    }
}

customElements.define('wk-bottom-app-bar', WKBottomAppBar)