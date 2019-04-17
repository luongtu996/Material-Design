import './image-list-item.js'

class WKImageList extends HTMLElement {

    constructor() {
        super()
    }

    connectedCallback() { }

    disconnectedCallback() { }

    adoptedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) { }

    static get observedAttributes() {
        return [
            'quilted',
            'woven',
            'masonry',
        ]
    }
}

customElements.define('wk-image-list', WKImageList)