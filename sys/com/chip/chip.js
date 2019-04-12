class WKChip extends HTMLElement {

    constructor() {
        super()
        
        this.template()
    }

    template() {
        this.innerHTML = `
            ${this.icon ? `<span class="chip__icon icon">${this.icon}</span>` : ``}
            ${this.thumb ? `<img src="${this.thumb}" alt="" class="chip__thumb">` : ``}
            <span class="chip__check">
                <span class="chip__mark"></span>
            </span>
            ${this.text ? `<span class="chip__text">${this.text}</span>`: ``}
            ${this.action ? `<span class="chip__action"></span>` : ``}
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
            'icon',
            'text',
            'action',
            'outlined',
        ]
    }

    get thumb() {
        return this.getAttribute('thumb')
    }

    set thumb(value) {
        this.setAttribute('thumb', value)
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

    get action() {
        return this.getAttribute('action')
    }

    set action(value) {
        this.setAttribute('action', value)
    }

    get outlined() {
        return this.hasAttribute('outlined')
    }

    set outlined(value) {
        this.setAttribute('outlined', '')
    }
}

customElements.define('wk-chip', WKChip)