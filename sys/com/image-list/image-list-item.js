class WKImageListItem extends HTMLElement {

    constructor() {
        super()
        this.template()
    }

    template() {
        this.innerHTML = `
            <figure class="image-list__figure">
                ${this.img ? `<img class="image-list__img" src="${this.img}">`: ``}
                ${!this.textBelow ? `<div class="image-list__figcaption">
                    ${this.text ? `<div class="image-list__text">${this.text}</div>`: ``}
                    ${this.action ? `<div class="image-list__icon icon">${this.action}</div>`: ``}
                </div>`: ``}
            </figure>
            ${this.textBelow ? `<div class="image-list__figcaption">
                ${this.text ? `<div class="image-list__text">${this.text}</div>`: ``}
                ${this.action ? `<div class="image-list__icon icon">${this.action}</div>`: ``}
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
            'img',
            'text',
            'action',
            'textBelow',
        ]
    }

    get img() {
        return this.getAttribute('img')
    }

    set img(value) {
        this.setAttribute('img', value)
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

    get textBelow() {
        return this.hasAttribute('textBelow')
    }

    set textBelow(value) {
        this.setAttribute('textBelow', '')
    }
}

customElements.define('wk-image-list-item', WKImageListItem)