import './navigation-drawer-scrim.js'

class WKNavigationDrawer extends HTMLElement {

    constructor() {
        super()
        this.oldInnerHTML = this.innerHTML
        this.template()
    }

    template() {
        this.innerHTML = `
            <div class="navigation-drawer__header">
                ${this.thumb ? `<img class="navigation-drawer__thumb" src="${this.thumb}" alt="">`:``}
                ${this.title ? `<div class="navigation-drawer__title">${this.title}</div>`:``}
                ${this.subtitle ? `<div class="navigation-drawer__subtitle">
                    ${this.subtitle ? `<div class="navigation-drawer__subtitle-text">${this.subtitle}</div>`:``}
                    ${this.action ? `<div class="navigation-drawer__subtitle-icon icon" style="font-size: 10px;">&#xEDDC;</div>` : ``}
                </div>`:``}
                ${this.divider ? `<hr class="divider">`: ``}
            </div>
            <div class="navigation-drawer__content">
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
            'thumb',
            'title',
            'subtitle',
            'action',
            'divider',
            'modal'
        ]
    }

    get thumb() {
        return this.getAttribute('thumb')
    }
    set thumb(value) {
        this.setAttribute('thumb', value)
    }

    get title() {
        return this.getAttribute('title')
    }
    set title(value) {
        this.setAttribute('title', value)
    }

    get subtitle() {
        return this.getAttribute('subtitle')
    }
    set subtitle(value) {
        this.setAttribute('subtitle', value)
    }

    get action() {
        return this.hasAttribute('action')
    }
    set action(value) {
        this.setAttribute('action', '')
    }

    get divider() {
        return this.hasAttribute('divider')
    }
    set divider(value) {
        this.setAttribute('divider', '')
    }

    get modal() {
        return this.hasAttribute('modal')
    }
    set modal(value) {
        this.setAttribute('modal', '')
    }
}

customElements.define('wk-navigation-drawer', WKNavigationDrawer)