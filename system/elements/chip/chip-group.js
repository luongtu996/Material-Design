class WKChipGroup extends HTMLElement {

    constructor() {
        super()
        // this.template()
    }

    // template() {
    //     this.innerHTML = ``
    // }

    connectedCallback() { }

    disconnectedCallback() { }

    adoptedCallback() { }

    attributeChangedCallback(name, oldValue, newValue) {
        // this.template()
    }

    static get observedAttributes() {
        return []
    }
}

customElements.define('wk-chip-group', WKChipGroup)