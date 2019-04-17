class WKListItem extends HTMLElement {

    constructor() {
        super()
        this.template()
    }

    template() {
        this.innerHTML = `
            ${this.thumb ? `<img class="list__thumb ${this.squareThumb ? `list__thumb--square` : ``} ${this.rectangleThumb ? `list__thumb--rectangle` : ``}" src="${this.thumb}" alt="">` : ``}
            ${this.icon ? `<div class="list__icon icon">${this.icon}</div>` : ``}
            ${this.meta ? `
                <div class="list__supporting">
                    <div class="list__text">
                        ${this.overlineText ? `<div class="list__text-overline">${this.overlineText}</div>` : ``}
                        ${this.primaryText ? `<div class="list__text-primary">${this.primaryText}</div>` : ``}
                        ${this.secondaryText ? `<div class="list__text-secondary">${this.secondaryText}</div>` : ``}
                    </div>
                    ${this.meta ? `<div class="list__meta">${this.meta}</div>` : ``}
                </div>
            ` : `
                <div class="list__text">
                    ${this.overlineText ? `<div class="list__text-overline">${this.overlineText}</div>` : ``}
                    ${this.primaryText ? `<div class="list__text-primary">${this.primaryText}</div>` : ``}
                    ${this.secondaryText ? `<div class="list__text-secondary">${this.secondaryText}</div>` : ``}
                </div>
            `}
            ${this.action ? `<div class="list__action icon">${this.action}</div>` : ``}
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
            'squareThumb',
            'rectangleThumb',
            'icon',
            'overlineText',
            'primaryText',
            'secondaryText',
            'meta',
            'action',
        ]
    }

    get thumb() {
        return this.getAttribute('thumb')
    }
    set thumb(value) {
        this.setAttribute('thumb', value)
    }

    get squareThumb() {
        return this.hasAttribute('squareThumb')
    }
    set squareThumb(value) {
        this.setAttribute('squareThumb', '')
    }

    get rectangleThumb() {
        return this.hasAttribute('rectangleThumb')
    }
    set rectangleThumb(value) {
        this.setAttribute('rectangleThumb', '')
    }

    get icon() {
        return this.getAttribute('icon')
    }
    set icon(value) {
        this.setAttribute('icon', value)
    }

    get overlineText() {
        return this.getAttribute('overlineText')
    }
    set overlineText(value) {
        this.setAttribute('overlineText', value)
    }

    get primaryText() {
        return this.getAttribute('primaryText')
    }
    set primaryText(value) {
        this.setAttribute('primaryText', value)
    }

    get secondaryText() {
        return this.getAttribute('secondaryText')
    }
    set secondaryText(value) {
        this.setAttribute('secondaryText', value)
    }

    get meta() {
        return this.getAttribute('meta')
    }
    set meta(value) {
        this.setAttribute('meta', value)
    }

    get action() {
        return this.getAttribute('action')
    }
    set action(value) {
        this.setAttribute('action', value)
    }

}

customElements.define('wk-list-item', WKListItem)