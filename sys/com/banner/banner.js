class WKBanner extends HTMLElement {

    constructor() {
        super()

        if (this.actions) {
            this.actionsHTML = document.querySelector(this.actions)
            this.actionsInnerHTML = this.actionsHTML.innerHTML
            this.actionsHTML.remove()
        }

        this.template()
    }

    template() {
        this.innerHTML = `
            <div class="banner__content">
                ${this.thumb ? `<img class="banner__thumb" src="${this.thumb}" alt="">`:``}
                ${this.text ? `<div class="banner__text">${this.text}</div>`:``}
            </div>
            ${this.actions ? `<div class="banner__actions">
                ${this.actionsInnerHTML}
            </div>`: ``}
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
            'actions',
            'thumb',
            'text',
        ]
    }

    get thumb() {
        return this.getAttribute('thumb')
    }
    
    set thumb(value) {
        this.setAttribute('thumb', value)
    }

    get text() {
        return this.getAttribute('text')
    }
    
    set text(value) {
        this.setAttribute('text', value)
    }

    get actions() {
        return this.getAttribute('actions')
    }
    
    set actions(value) {
        this.setAttribute('actions', value)
    }
}

customElements.define('wk-banner', WKBanner)